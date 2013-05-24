

"use strict";
(function () {
    // Prepare the request to an RSS source
    //  using the GET verb
    //var context = SP.ClientContext.get_current();
    //var request = new SP.WebRequestInfo();
    //request.set_url(
    //    "http://www.microsoft.com/en-us/news/rss/rssfeed.aspx?ContentType=FeatureStories"
    //    );
    //request.set_method("GET");
    
    //var response = SP.WebProxy.invoke(context, request);


    var http = new splunkjs.ProxyHttp("/proxy");
    
    var service = new splunkjs.Service(http, {
        username: "admin",
        password: "changed",
        scheme: "http",
        host: "localhost",
        port: 8089,
        version: "5.0"
    });
    
    // First, we log in
    service.login(function(err, success) {
        // We check for both errors in the connection as well
        // as if the login itself failed.
        if (err || !success) {
            done(err || "Login failed");
            return;
        }
        // Now that we're logged in, let's get a listing of all the apps.
        service.apps().fetch(function(err, apps) {
            if (err) {
                console.log("There was an error retrieving the list of applications:", err);
                done(err);
                return;
            }
            var appsList = apps.list();
            for(var i = 0; i < appsList.length; i++) {
                var app = appsList[i];
            }
            done();
        });
    }); 
        
    //// Set the event handlers and invoke the request
    //context.executeQueryAsync(successHandler, errorHandler);

    //// Event handler for the success event
    ////  Get the totalResults node in the response
    ////  Render the value in the placeholder
    //function successHandler() {
    //    var stories;
    //    var storiesHTML;
    //    var xmlDOM;

    //    // Check for status code == 200
    //    //  Some other status codes, such as 302 redirect
    //    //  do not trigger the errorHandler 
    //    if (response.get_statusCode() == 200) {
    //        xmlDOM = new ActiveXObject("Microsoft.XMLDOM");
    //        xmlDOM.async = false;
    //        xmlDOM.loadXML(response.get_body());

    //        stories = xmlDOM.selectNodes("//title");

    //        storiesHTML = "<UL>";
    //        for (var i = 0; i < stories.length; i++) {
    //            storiesHTML += "<LI>" + stories[i].text + "</LI>";
    //        }
    //        storiesHTML += "</UL>";

    //        document.getElementById("stories").innerHTML =
    //            storiesHTML;
    //    }
    //    else {
    //        var errordesc;

    //        errordesc = "<P>Status code: " +
    //            response.get_statusCode() + "<br/>";
    //        errordesc += response.get_body();
    //        document.getElementById("stories").innerHTML = errordesc;
    //    }
    //}

    //// Event handler for the error event
    ////  Render the response body in the placeholder
    ////  The body includes the error message
    //function errorHandler() {
    //    document.getElementById("stories").innerHTML =
    //        response.get_body();
    //}
})();