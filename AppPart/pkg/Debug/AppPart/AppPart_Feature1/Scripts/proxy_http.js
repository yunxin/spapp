/// <reference path="sp.debug.js" />
/// <reference path="client/splunk.js" />

// Copyright 2011 Splunk, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License"): you may
// not use this file except in compliance with the License. You may obtain
// a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

(function() {
    var root = splunkjs;
    var Http = root.Http;
    var utils = root.Utils;
    
    var getHeaders = function(headersString) {
        var headers = {};
        var headerLines = headersString.split("\n");
        for(var i = 0; i < headerLines.length; i++) {
            if (utils.trim(headerLines[i]) !== "") {
                var headerParts = headerLines[i].split(": ");
                headers[headerParts[0]] = headerParts[1];
            }
        }

        return headers;
    };
    
    // parseUri 1.2.2
    // (c) Steven Levithan <stevenlevithan.com>
    // MIT License
    function parseUri (str) {
        var o   = parseUri.options,
            m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
            uri = {},
            i   = 14;

        while (i--) {
            uri[o.key[i]] = m[i] || "";
        }

        uri[o.q.name] = {};
        uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
            if ($1) {
                uri[o.q.name][$1] = $2;
            }
        });

        return uri;
    }

    parseUri.options = {
        strictMode: false,
        key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
        q:   {
            name:   "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    };
    
    var specials = /[.*+?|()\[\]{}\\$\^]/g; // .*+?|()[]{}\$^
    var escape = function(str) {
        str = str || "";
        return str.replace(specials, "\\$&");
    };

    root.ProxyHttp = Http.extend({
        init: function(prefix) {
            this.prefix = prefix;
            this._super();
        },

        makeRequest: function(url, message, callback) {
            // Add our original destination to to headers,
            // as some proxy implementations would rather
            // use this.
            message.headers["X-ProxyDestination"] = url;
            
            // Need to remove the hostname from the URL
            //var parsed = parseUri(url);
            //var prefixToRemove = "" + (parsed.protocol ? parsed.protocol : "") + "://" + parsed.authority;
            //url = url.replace(new RegExp(escape(prefixToRemove), "i"), "");
            
            //// Now, we prepend the prefix
            //url = this.prefix + url;
            
            var that = this;
            var params = {
                url: url,
                type: message.method,
                headers: message.headers,
                data: message.body || "",
                dataType: "text",
                success: function(data, error, res) {
                    //if (req.wasAborted) {
                    //    return;
                    //}
                    
                    var response = {
                        statusCode: spRes.status,
                        headers: getHeaders(spRes.getAllResponseHeaders())
                    };

                    var complete_response = that._buildResponse(error, response, data);
                    callback(complete_response);
                },
                error: function(res, data, error) {
                    if (req.wasAborted) {
                        return;
                    }
                    
                    var response = {
                        statusCode: spRes.status,
                        headers: getHeaders(spRes.getAllResponseHeaders())
                    };

                    if (data === "abort") {
                        response.statusCode = "abort";
                        spRes.responseText = "{}";
                    }
                    var json = spRes.responseText;

                    var complete_response = that._buildResponse(error, response, json);
                    callback(complete_response);
                    
                    // Note the fact that we aborted after we call
                    // our initial callback, otherwise it will never
                    // execute
                    if (data === "abort") {
                        req.wasAborted = true;
                    }
                }
            };
     
            // Prepare the request to an RSS source
            //  using the GET verb
            var context = SP.ClientContext.get_current();
            
            var request = new SP.WebRequestInfo();
            request.set_url(url);
            request.set_method(message.method);
            request.set_headers(message.headers);
            request.set_body(message.body || "");

            //url: url,
            //type: message.method,
            //headers: message.headers,
            //data: message.body || "",
            //dataType: "text",
          

            var spRes = SP.WebProxy.invoke(context, request);

            // Set the event handlers and invoke the request
            context.executeQueryAsync(successHandler, errorHandler);

            // Event handler for the success event
            //  Get the totalResults node in the response
            //  Render the value in the placeholder
            function successHandler() {

                //if (req.wasAborted) {
                //    return;
                //}

                var response = {
                    statusCode: spRes.get_statusCode(),
                    headers: spRes.get_headers()
                };

                var error;
                var data = spRes.get_body();
                
                var complete_response = that._buildResponse(error, response, data);
                
                callback(complete_response);
            }

            // Event handler for the error event
            //  Render the response body in the placeholder
            //  The body includes the error message
            function errorHandler() {
                //if (req.wasAborted) {
                //    return;
                //}

                var response = {
                    statusCode: spRes.status,
                    headers: getHeaders(spRes.getAllResponseHeaders())
                };

                if (data === "abort") {
                    response.statusCode = "abort";
                    spRes.responseText = "{}";
                }
                var json = spRes.responseText;

                var complete_response = that._buildResponse(error, response, json);
                callback(complete_response);

                //// Note the fact that we aborted after we call
                //// our initial callback, otherwise it will never
                //// execute
                //if (data === "abort") {
                //    req.wasAborted = true;
                //}
            }
            
            var res = {
                wasAborted: false
            };

            return res;
        },

        parseJson: function(json) {
            // JQuery does this for us
            return $.parseJSON(json);
        }
    });

    root.SplunkWebHttp = root.ProxyHttp.extend({
        init: function() {
            this._super("/en-US/splunkd/__raw");
        }
    });
})();