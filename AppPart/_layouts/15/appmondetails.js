function ErrorCallOutFunction(c,e,i,f,d){if(typeof CalloutManager!=="object"||typeof Callout!=="function"||typeof CalloutAction!=="function")return;var g=document.getElementById(c),b=c+"_callout",a=[];a.push("<div id='"+b+"_outer' style='max-height: 500px; overflow: hidden;'><span id='");a.push(b);a.push("'>");a.push(Strings.STS.L_Loading_Text);a.push("</span></div>");var h=CalloutManager.createNew({launchPoint:g,openOptions:{closeCalloutOnBlur:true,event:"click",showCloseButton:true},ID:b,title:e,content:a.join(""),contentWidth:610,onOpenedCallback:function(){GetErrorDetails(b,i,f,d)}});h.addAction(new CalloutAction({text:"",onClickCallback:function(){},isVisibleCallback:function(){return false}}))}function CalloutCreateXMLHttpRequest(){try{return new XMLHttpRequest}catch(a){}return null}var calloutXmlHttp=CalloutCreateXMLHttpRequest(),currentcalloutdiv;function CalloutHandleRSC(){if(calloutXmlHttp.readyState==4)if(calloutXmlHttp.status==200)currentcalloutdiv.innerHTML=calloutXmlHttp.responseText;else alert(Strings.STS.L_AppMonDetails_AjaxFailed+calloutXmlHttp.statusText)}function GetErrorDetails(e,g,f,d){currentcalloutdiv=document.getElementById(e);var b;if(typeof _spPageContextInfo!="undefined"&&typeof _spPageContextInfo.currentLanguage!="undefined")b=_spPageContextInfo.currentLanguage;else b=1033;try{var a="./appmonitoringerrordetails.ashx";if(d=="1")a+="?appProductId=";else a+="?appInstanceId=";a+=g+"&entryCode="+f+"&lcid="+b.toString();calloutXmlHttp.open("GET",a,true);calloutXmlHttp.onreadystatechange=CalloutHandleRSC;calloutXmlHttp.send(null)}catch(c){alert(Strings.STS.L_AppMonDetails_AjaxFailed+c.toString())}}function OpenCentralAdminDialog(c,d,b,e,f){if(typeof _spPageContextInfo!="undefined"&&typeof _spPageContextInfo.currentLanguage!="undefined")currentLCID=_spPageContextInfo.currentLanguage;else currentLCID=1033;var a="./ca_appmonitoringerrordetails.aspx";if(b=="1")a+="?appProductId="+c;else a+="?appInstanceId="+c+"&SiteId="+e+"&WebId="+f;a+="&entryCode="+d+"&lcid="+currentLCID.toString();OpenDialog(a,b,true,null)}function OpenTenantAdminDialog(c,d,b,e,f){if(typeof _spPageContextInfo!="undefined"&&typeof _spPageContextInfo.currentLanguage!="undefined")currentLCID=_spPageContextInfo.currentLanguage;else currentLCID=1033;var a="./ta_appmonitoringerrordetails.aspx";if(b=="1")a+="?appProductId="+c;else a+="?appInstanceId="+c+"&SiteId="+e+"&WebId="+f;a+="&entryCode="+d+"&lcid="+currentLCID.toString();OpenDialog(a,b,false,null)}function Change_Graphs(j){var d=document.getElementById("Chart14DayLU"),e=document.getElementById("Chart1YearLU"),f=document.getElementById("Chart3YearLU"),a=null,b=null,c=null;if(showbcs){a=document.getElementById("Chart14DayBCS");b=document.getElementById("Chart1YearBCS");c=document.getElementById("Chart3YearBCS")}var g=document.getElementById("link14Day"),h=document.getElementById("link1Year"),i=document.getElementById("link3Year");if(j=="14Day"){f.style.display="none";e.style.display="none";d.style.display="block";if(showbcs){c.style.display="none";b.style.display="none";a.style.display="block"}i.setAttribute("href","#");h.setAttribute("href","#");g.removeAttribute("href")}else if(j=="1Year"){f.style.display="none";e.style.display="block";d.style.display="none";if(showbcs){c.style.display="none";b.style.display="block";a.style.display="none"}i.setAttribute("href","#");h.removeAttribute("href");g.setAttribute("href","#")}else{f.style.display="block";e.style.display="none";d.style.display="none";if(showbcs){c.style.display="block";b.style.display="none";a.style.display="none"}i.removeAttribute("href");h.setAttribute("href","#");g.setAttribute("href","#")}return false}function OpenDialog(f,c,d,e){var a,b=430;if(c)a=536;else a=570;if(!d){b-=40;a+=50}SP.SOD.executeFunc("sp.ui.dialog.js","SP.UI.ModalDialog.showModalDialog",function(){var c=new SP.UI.DialogOptions;c.url=f;c.showClose=true;c.width=a;c.height=b;c.dialogReturnValueCallback=e;SP.UI.ModalDialog.showModalDialog(c)})}function ShowAppSelectDialog(){SP.SOD.executeFunc("sp.ui.dialog.js","SP.UI.ModalDialog.showModalDialog",function(){var a=new SP.UI.DialogOptions;a.url=addUrl;a.showClose=true;a.autosize=true;a.dialogReturnValueCallback=Function.createDelegate(null,AppSelectDialogCallback);SP.UI.ModalDialog.showModalDialog(a)})}function AppSelectDialogCallback(a){if(a==SP.UI.DialogResult.OK)window.location=selfUrl}function GetItemUrl(f){for(var c=null,d=document.forms[formId],e=d.elements.length,b=0;b<e;b++){var a=d.elements[b];if(a.type=="checkbox"&&a.name!="selectall")if(a.checked){c=a;break}}if(c!=null)return a.getAttribute(f);return null}function ShowDetails(){var a=GetItemUrl("detailsUrl");a!=null&&STSNavigate(a)}function ViewErrors(){var a=GetItemUrl("errorsUrl");a!=null&&OpenDialog(a,true,isCentralAdmin,null)}function DeleteSelectedApps(){if(confirm(L_DeleteAppMessage)){for(var c=document.forms[formId],b=[],e=c.elements.length,d=0;d<e;d++){var a=c.elements[d];if(a.type=="checkbox"&&a.name!="selectall")a.checked&&b.push(a.value)}if(b.length>0){document.getElementById("selectedItems").value=b.join(",");document.getElementById("cmd").value="del"}c.submit()}}function AddEnabled(){if(analyticsEnabled=="True")return true;else return false}function DeleteEnabled(){return selectedItemCount>0}function DetailsEnabled(){return selectedItemCount==1}function SelectAll(e){var c=document.forms[formId],d=c.elements.length;selectedItemCount=0;for(var b=0;b<d;b++){var a=c.elements[b];if(a.type=="checkbox"&&a.name!="selectall")if(e){a.checked=true;AddCssClassToElement(a.parentNode.parentNode,"s4-itm-selected");selectedItemCount++}else{a.checked=false;RemoveCssClassFromElement(a.parentNode.parentNode,"s4-itm-selected")}}if(typeof addButton!="undefined")addButton.disabled=selectedItemCount<=0;RefreshRibbon()}function AppRowClick(c){var a=c.getElementsByTagName("input")[0];if(a!=null){var b=true;if(a.checked&&selectedItemCount==1)b=false;SelectAll(false);if(b){a.checked=true;SelectApp(null,a)}}}function SelectApp(a,b){document.getElementById("idSelectAll").checked=false;if(b.checked){selectedItemCount++;if(selectedItemCount==itemCount)document.getElementById("idSelectAll").checked=true;AddCssClassToElement(b.parentNode.parentNode,"s4-itm-selected")}else{selectedItemCount--;RemoveCssClassFromElement(b.parentNode.parentNode,"s4-itm-selected")}RefreshRibbon();if(a!=null){a.cancelBubble=true;a.stopPropagation&&a.stopPropagation()}if(typeof addButton!="undefined")addButton.disabled=selectedItemCount<=0}function RefreshRibbon(){RefreshCommandUI&&RefreshCommandUI()}function AddSelected(){for(var h=document.forms[formId],b=[],f=[],g=[],d=[],e=[],i=h.elements.length,c=0;c<i;c++){var a=h.elements[c];if(a.type=="checkbox"&&a.name!="selectall")if(a.checked){b.push(a.value);g.push(a.attributes["appName"].value);f.push(a.attributes["appSourceType"].value);d.push(a.attributes["appAssetId"].value);e.push(a.attributes["appMarket"].value)}}if(b.length>0){document.getElementById("selectedItems").value=b.join(",");document.getElementById("selectedItemsSource").value=f.join(",");document.getElementById("selectedItemsName").value=g.join(",");document.getElementById("selectedItemsAssetId").value=d.join(",");document.getElementById("selectedItemsMarket").value=e.join(",");return true}else return false}function TruncateAppsLocation(){for(var b=document.getElementsByName("appLocation"),c=b.length,a=0;a<c;a++){var d=displayTruncatedLocation(b[a],40);b[a].innerHTML=d}}function AddErrorStatus(a){ExecuteOrDelayUntilScriptLoaded(function(){var b=SP.UI.Status.addStatus("",a);SP.UI.Status.setStatusPriColor(b,"red")},"SP.js")}function AddWarningStatus(a){ExecuteOrDelayUntilScriptLoaded(function(){var b=SP.UI.Status.addStatus("",a);SP.UI.Status.setStatusPriColor(b,"yellow")},"SP.js")}