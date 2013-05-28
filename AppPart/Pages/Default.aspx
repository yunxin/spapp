﻿<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" Language="C#" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
 
<!-- The following tells SharePoint to allow this page to be hosted in an IFrame -->
<WebPartPages:AllowFraming runat="server" />
 
<html lang="en"> 
  <head> 
    <meta charset="utf-8"> 
    <title>MiniSplunk</title> 
    <meta name="description" content=""> 
    <meta name="author" content=""> 
 
    <script id="eventRowTemplate" type="text/x-jquery-tmpl">
      <table>
        <tbody> 
          <tr class="result-data">
            <td class="id-cell">${index}</td>
            <td class="date-cell">${timestamp}</td>
            <td class="duration-cell">${duration}</td>
            <td class="request-cell">${request}</td>
          </tr>
          <tr>
            <td colspan="3" class="result-info hidden">
              <a class="close" href="#">×</a>
              <ul>
              {{each properties}}
                <li>${$value.key}: ${$value.value}</li>
              {{/each}}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </script>
 
    <script id="resultRowTemplate" type="text/x-jquery-tmpl">
      <td>${index}</td>
      {{each properties}}
      <td>${$value.value}</td>
      {{/each}}
    </script>
    
    <script id="eventPropertiesTemplate" type="text/x-jquery-tmpl">
      <div style="max-height: 200px; overflow-y: auto;">
        <h3>Count: ${count}</h3>
        <ul>
        {{each properties}}
          <li>${$value.key}: ${$value.value}</li>
        {{/each}}
        <ul>
      </div>
    </script>
    
    <script id="eventsTemplate" type="text/x-jquery-tmpl">
      <div class="span16 offset0">      
        <ul class="results" id="results-header">
          <li>
            <table>
              <thead> 
                <tr> 
                  <th class="id-cell">#</th> 
                  <th class="date-cell">Datetime</th> 
                  <th class="duration-cell">Execution Time in Seconds</th>
                  <th class="request-cell">Request</th>
            </tr> 
              </thead> 
            </table>
          </li>
        </ul>     
        <ul class="results" id="results-list">
        </ul>
      </div> 
    </script>
    
    <script id="resultsTemplate" type="text/x-jquery-tmpl">
      <div class="span16 offset0">  
        <table class="results">
          <thead>
            <tr> 
              <th class="id-cell">#</th> 
              {{each headers }}
              <th>${$value}</th> 
              {{/each}}
            </tr> 
          </thead>
          <tbody id="Tbody1">
          </tbody>
      </div> 
    </script>
 
    <script id="searchFormTemplate" type="text/x-jquery-tmpl">
      <div class="span16 offset0 highlight"> 
        <form action class="form-stacked" id="search-form">
          <div class="clearfix">
            <label for="searchbox">Search Requests to Sites</label>
            <div class="input-append">
              <input id="searchbox" class="xxxlarge" name="searchbox" type="text">
              <a href="" id="submit-search" class="add-on btn small primary">Search</a>
            </div>
          </div>
        </form>
        <div id="messages">
        </div>
      </div> 
    </script>
    
    <script id="alertTemplate" type="text/x-jquery-tmpl">
      <div class="alert-message ${messageClass}">
        <p>
          ${text}
        </p>
      </div>
    </script>
 
    <script id="searchStatsTemplate" type="text/x-jquery-tmpl">
      <div class="span3 offset0"> 
        <span>Events: </span><strong id="event-count">${eventCount}</strong>
      </div> 
      <div class="span3 offset0"> 
        <span>Scanned: </span><strong id="scan-count">${scanCount}</strong>
      </div>
      <div class="span3 offset7">
        <div class="pull-right">
          {{each actions}}
          <a href="#" class="${$value.toLowerCase()}">${$value}</a>{{if ($index+1) !== actions.length}} | {{/if}}
          {{/each}}
        </div>
      </div> 
    </script>
    
    <script id="paginationTemplate" type="text/x-jquery-tmpl">
      <div class="span16 offset0">  
        <div class="pagination">
          <ul>
            <li class="prev {{if isPrevDisabled}}disabled{{/if}}"><a href="#">← Previous</a></li>
          {{each items}}
            <li class="number {{if $value.isDisabled}}disabled{{/if}} {{if $value.isCurrent}}active{{/if}}"><a href="#">${$value.number}</a></li>
          {{/each}}
            <li class="next {{if isNextDisabled}}disabled{{/if}}"><a href="#">Next →</a></li>
          </ul>
        </div>
      </div> 
    </script>
    
    <script id="jobRowTemplate" type="text/x-jquery-tmpl">
      <tr class="job-data toprow">
        <td class="">${dispatchedAt}</td>
        <td class="">${owner}</td>
        <td class="">${application}</td>
        <td class="">${size}</td>
        <td class="">${events}</td>
        <td class="">${runtime}</td>
        <td class="">${expires}</td>
        <td class="capitalize">${status}</td>
        <td class="">
        {{each actions}}
          <a href="#" class="${$value.toLowerCase()}">${$value}</a>{{if ($index+1) !== actions.length}} | {{/if}}
        {{/each}}
        </td>
      </tr>
      <tr class="job-name bottomrow">
        <td colspan="9" class=""><strong>${query}</strong></td>
      </tr>
    </script>
    
    <script id="jobsTemplate" type="text/x-jquery-tmpl">
      <div class="span16 offset0">      
        <table class="jobs" id="jobs-list">
          <thead> 
            <tr> 
              <th class="">Dispatched at</th> 
              <th class="">Owner</th> 
              <th class="">Application</th> 
              <th class="">Size</th> 
              <th class="">Events</th> 
              <th class="">Run time</th> 
              <th class="">Expires</th> 
              <th class="">Status</th> 
              <th class="">Actions</th> 
            </tr> 
          </thead> 
        </table>
      </div> 
    </script>
    
    <script id="mapTemplate" type="text/x-jquery-tmpl">
      <div class="span16 offset0">      
        <div class="row" id="map-container">
          <div id="map-canvas"></div>
        </div>
      </div> 
    </script>
    
    <script id="navBarTemplate" type="text/x-jquery-tmpl">
      <div class="fill"> 
        <div class="container"> 
          <ul> 
            <li class="active"><a href="#search">List</a></li> 
            <li><a href="#jobs">Timeline</a></li> 
            <li><a href="#maps">Throughput</a></li> 
          </ul> 
          <%--<ul class="signin">
            <li><a href="" id="login-info"></a></li>
            <li>
              <button class="signin btn primary small">Sign in</button>
            <li>
          </ul>--%>
        </div> 
      </div> 
    </script>
    
    <script id="signinTemplate" type="text/x-jquery-tmpl">
      <div class="modal">
        <div class="modal-header">
          <h3>Sign In</h3>
          <a href="#" class="close">×</a>
        </div>
        <div class="modal-body">
          <div class="alert-message error hidden" id="login-error">
            <p></p>
          </div>
          <fieldset>
              <div class="clearfix ">
                  <label for="id_username">Username</label>
                  <div class="input">
                      <input id="id_username" type="text" name="username" placeholder="admin"/>
                  </div>
              </div>
              <div class="clearfix ">
                  <label for="id_password">Password</label>
                  <div class="input">
                      <input type="password" name="password" id="id_password" placeholder="changeme">
                  </div>
              </div>
              <div class="clearfix ">
                  <label for="id_scheme">Scheme</label>
                  <div class="input">
                      <input type="text" name="scheme" id="id_scheme" placeholder="https">
                  </div>
              </div>
              <div class="clearfix ">
                  <label for="id_host">Host</label>
                  <div class="input">
                      <input type="text" name="host" id="id_host" placeholder="localhost">
                  </div>
              </div>
              <div class="clearfix ">
                  <label for="id_port">Port</label>
                  <div class="input">
                      <input type="text" name="port" id="id_port" placeholder="8089">
                  </div>
              </div>
              <div class="clearfix ">
                  <label for="id_app">App</label>
                  <div class="input">
                      <input type="text" name="app" id="id_app" placeholder="search">
                  </div>
              </div>
              <div class="clearfix ">
                  <label for="id_version">Version</label>
                  <div class="input">
                      <input type="text" name="version" id="id_version" placeholder="5.0">
                  </div>
              </div>
          </fieldset>
        </div>
        <div class="modal-footer">
          <a href="#" class="btn primary button1">Login</a>
          <a href="#" class="btn secondary button2">Cancel</a>
        </div>
      </div>
    </script>
  
    <!-- Le HTML5 shim, for IE6-8 support of HTML elements --> 
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]--> 
 
    <!-- Le styles --> 
    <link rel="stylesheet" type="text/css" href="../Scripts/minisplunk/bootstrap-1.1.1.css">

<script src="../Scripts/jquery.min.js"></script>
        
    <!-- Le splunk -->
    <script type="text/javascript" src="../Scripts/client/splunk.js"></script>     

      <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js">
</script>
 <script 
    type="text/javascript" 
    src="../_layouts/15/SP.Runtime.js">
</script>
<script 
    type="text/javascript" 
    src="../_layouts/15/SP.js">
</script>
      
    <script type="text/javascript" src="../Scripts/proxy_http.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.js"></script>
    <script type="text/javascript" src="http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3&sensor=true"></script>
    <script type="text/javascript" src="../Scripts/minisplunk/jquery.fn.gmap.js"></script>
    <script type="text/javascript" src="../Scripts/minisplunk/bootstrap.modal.js"></script>
    <script type="text/javascript" src="../Scripts/minisplunk/date.format.js"></script>
    <script type="text/javascript" src="../Scripts/minisplunk/underscore.js"></script>
    <script type="text/javascript" src="../Scripts/minisplunk/backbone.js"></script>
    <script type="text/javascript" src="../Scripts/minisplunk/models.js"></script>
    <script type="text/javascript" src="../Scripts/minisplunk/views.js"></script>
    <script type="text/javascript" src="../Scripts/minisplunk/site.js"></script>
 
    <!-- Le fav and touch icons --> 
    <link rel="shortcut icon" href="images/favicon.ico"> 
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png"> 
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png"> 
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png"> 
    
    <style>      
        
      html {
        overflow-y: hidden;
      }

      body {
        padding-top: 40px;
      }
      
      #searchInput {
      }
      
      .pull-right {
        float: right;
      }
      
      .capitalize {
        text-transform: capitalize;
      }
      
      div#map-container {
        padding-top: 20px;
      }
      
      div#map-canvas {
        width: 100%;
        height: 300px;
      }
      
      div.highlight {
        background-color: #EDEDE7;
        padding: 10px 0;
        margin: -10px 0 10px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
      }
      
      div.highlight #messages {
        margin: 0px 16px 0px 20px;
      }
      
      div.highlight #messages .alert-message {
        margin: 0px 0px 5px 0px;
      }
      
      .form-stacked div.highlight {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        margin-top: 0;
        margin-left: -20px;
      }
      
      input.xxxlarge {
        width: 840px;
        height: 24px;
      }
      
      div.separator {
        border-top: 1px solid #eee;
        margin-top: 5px;
        padding-top: 5px;
      }
      
      .hidden {
        display: none;
      }
      
      #results {
        overflow-x: auto;
        height: 80%;
      }
      
      div#pagination-row div.pagination {
        margin: 0px auto;
      }
      
      ul.results {
        list-style-type: none;
        padding: 0px;
        margin: 0px;
      }
      
      .results td {
        vertical-align: text-top;
      }
      
      .results table {
        table-layout: fixed;
      }
      
      .results .id-cell {
        width: 50px;
        min-width: 50px;
        max-width: 50px;
      }
      
      .results .date-cell {
        width: 120px;
        min-width: 120px;
        max-width: 120px;
      }
      
       .results .duration-cell {
        width: 100px;
        min-width: 100px;
        max-width: 100px;
      }
      
      .results .event-cell {
        white-space: wrap;
      }
      
      .results .request-cell {
        white-space: wrap;
      }
      
      .results td.result-info {
        background: whiteSmoke;
      }
      
      .results td.result-info .close {
        float: right;
        margin-top: -2px;
        color: #000000;
        font-size: 20px;
        font-weight: bold;
        text-shadow: 0 1px 0 #ffffff;
        filter: alpha(opacity=20);
        -khtml-opacity: 0.2;
        -moz-opacity: 0.2;
        opacity: 0.2;
      }
      
      .results td.result-info .close:hover {
        color: #000000;
        text-decoration: none;
        filter: alpha(opacity=40);
        -khtml-opacity: 0.4;
        -moz-opacity: 0.4;
        opacity: 0.4;
      }
      
      tr.toprow td {
        border-bottom: 0px;
      }
      
      .jobs tr.job-data {
        font-size: 11px;
      }
      .jobs tr.job-name {
        font-size: 12px;
      }
      
      button.signin {
        margin-top: 5px;
        padding: 10px 10px 11px;
        float: none;
      }
      
      ul.signin {
        float:right;
      }
      
      /*Fixes the positioning of the modal*/
      .modal {
        top: 0px;
        margin-top: 60px;
        z-index: 10002; /*Make the modal display over the toolbar*/
      }
      
      /*From the 1.3 work in progress build*/
      .modal-backdrop {
        background-color: #000;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10001; /*Make the modal display over the toolbar*/
      }
      
      .modal-backdrop.fade {
        opacity: 0;
      }
      
      .modal-backdrop, .modal-backdrop.fade.in {
        filter: alpha(opacity=50);
        -khtml-opacity: 0.5;
        -moz-opacity: 0.5;
        opacity: 0.5;
      }
      
      .hide {
        display: none;
      }
      
      .fade {
        -webkit-transition: opacity 0.15s linear;
        -moz-transition: opacity 0.15s linear;
        -ms-transition: opacity 0.15s linear;
        -o-transition: opacity 0.15s linear;
        transition: opacity 0.15s linear;
        opacity: 0;
      }
      
      .fade.in {
        opacity: 1;
      }
    </style>
    
    <script>

    </script>
  </head> 
 
  <body> 
    <div class="topbar" id="navbar"> 
    </div> 
    
    <div id="content-container">
    </div>
    
    <div class="container" id="footer-container">
      <footer> 
        <p>&copy; Splunk 2011-2012</p> 
      </footer> 
    </div>
  </body> 
    </html>
<%--<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js">
</script>--%>
<%--<script 
    type="text/javascript" 
    src="../_layouts/15/SP.Runtime.js">
</script>
<script 
    type="text/javascript" 
    src="../_layouts/15/SP.js">
</script>--%>
<%--<script src="../Scripts/jquery.min.js"></script>
<script src="../Scripts/client/splunk.js"></script>--%>
<%--<script src="../Scripts/WebProxyExec.js"></script>--%>
