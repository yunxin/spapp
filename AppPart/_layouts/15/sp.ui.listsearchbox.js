Type.registerNamespace("Microsoft.SharePoint.Portal");Microsoft.SharePoint.Portal.ListSearchBox=function(a,b){this.$$d_onDataRefreshCompleted=Function.createDelegate(this,this.onDataRefreshCompleted);this.$$d_$1W_3=Function.createDelegate(this,this.$1W_3);this.$$d_$1M_3=Function.createDelegate(this,this.$1M_3);this.$$d_$1J_3=Function.createDelegate(this,this.$1J_3);this.$$d_$1I_3=Function.createDelegate(this,this.$1I_3);this.$$d_$1K_3=Function.createDelegate(this,this.$1K_3);this.$$d_$1L_3=Function.createDelegate(this,this.$1L_3);this.$$d_$1G_3=Function.createDelegate(this,this.$1G_3);this.$$d_$1H_3=Function.createDelegate(this,this.$1H_3);this.$$d_$1S_3=Function.createDelegate(this,this.$1S_3);this.$$d_$1R_3=Function.createDelegate(this,this.$1R_3);this.$$d_$1O_3=Function.createDelegate(this,this.$1O_3);this.$$d_$1N_3=Function.createDelegate(this,this.$1N_3);this.$$d_$1P_3=Function.createDelegate(this,this.$1P_3);this.$$d_$1Q_3=Function.createDelegate(this,this.$1Q_3);this.$$d_onSearchBoxKeyUp=Function.createDelegate(this,this.onSearchBoxKeyUp);this.$$d_onSearchBoxKeyPress=Function.createDelegate(this,this.onSearchBoxKeyPress);this.$$d_$1C_3=Function.createDelegate(this,this.$1C_3);Microsoft.SharePoint.Portal.ListSearchBox.initializeBase(this,[b]);this.$1_3=a;this.$V_3=false};Microsoft.SharePoint.Portal.ListSearchBox.$y=function(c,b){var a=0;switch(c){case 0:switch(b){case 0:a=1;break;case 2:a=1}break;case 1:switch(b){case 0:a=1;break;case 1:a=0;break;case 2:a=2}break;case 2:switch(b){case 0:a=2;break;case 1:a=0;break;case 2:a=3}}return a};Microsoft.SharePoint.Portal.ListSearchBox.$v=function(a,b){var c=a?a.toLowerCase():null,d=b?b.toLowerCase():null;return c===d};Microsoft.SharePoint.Portal.ListSearchBox.isNullOrWhiteSpace=function(a){return!a||!a.trim().length};Microsoft.SharePoint.Portal.ListSearchBox.prototype={$V_3:false,$0_3:null,get_searchBox:function(){return this.$0_3},set_searchBox:function(a){this.$0_3=a;return a},$2_3:null,get_searchImg:function(){return this.$2_3},set_searchImg:function(a){this.$2_3=a;return a},$D_3:null,get_searchImgSpan:function(){return this.$D_3},set_searchImgSpan:function(a){this.$D_3=a;return a},$3_3:null,get_parentDiv:function(){return this.$3_3},set_parentDiv:function(a){this.$3_3=a;return a},$T_3:null,get_searchStatus:function(){return this.$T_3},set_searchStatus:function(a){this.$T_3=a;return a},$E_3:null,get_searchProgress:function(){return this.$E_3},set_searchProgress:function(a){this.$E_3=a;return a},$F_3:null,get_searchUpscopeLink:function(){return this.$F_3},set_searchUpscopeLink:function(a){this.$F_3=a;return a},$1_3:null,get_context:function(){return this.$1_3},set_context:function(a){this.$1_3=a;return a},$Z_3:null,$7_3:0,get_focusedElement:function(){return this.$7_3},set_focusedElement:function(a){this.$7_3=a;return a},$H_3:false,get_isGoImgHovering:function(){return this.$H_3},set_isGoImgHovering:function(a){this.$H_3=a;return a},$M_3:false,get_isParentDivHovering:function(){return this.$M_3},set_isParentDivHovering:function(a){this.$M_3=a;return a},$6_3:false,get_isEmpty:function(){return this.$6_3},set_isEmpty:function(a){this.$6_3=a;return a},$9_3:false,get_isDirty:function(){return this.$9_3},set_isDirty:function(a){this.$9_3=a;return a},$B_3:0,$S_3:0,$O_3:0,$C_3:null,$A_3:false,get_searchButtonShouldCancel:function(){return this.$A_3},set_searchButtonShouldCancel:function(a){this.$A_3=a;return a},$8_3:false,get_showingGhostedText:function(){return this.$8_3},set_showingGhostedText:function(a){this.$8_3=a;return a},$4_3:false,get_requestSent:function(){return this.$4_3},set_requestSent:function(a){this.$4_3=a;return a},$G_3:false,get_showProgress:function(){return this.$G_3},set_showProgress:function(a){this.$G_3=a;return a},$m_3:null,$n_3:null,$l_3:null,$k_3:null,$i_3:null,$j_3:null,$o_3:null,$q_3:null,$Y_3:null,$X_3:null,$e_3:null,$d_3:null,$b_3:null,$c_3:null,$f_3:null,$Q_3:false,$J_3:null,get_ghostedText:function(){return this.$J_3},set_ghostedText:function(a){this.$J_3=a;return a},$K_3:null,get_hiddenItems:function(){return this.$K_3},set_hiddenItems:function(a){this.$K_3=a;return a},$U_3:null,get_siteHiddenItems:function(){return this.$U_3},set_siteHiddenItems:function(a){this.$U_3=a;return a},$L_3:null,get_hiddenItemsTitle:function(){return this.$L_3},set_hiddenItemsTitle:function(a){this.$L_3=a;return a},$N_3:null,get_searchBoxInstructions:function(){return this.$N_3},set_searchBoxInstructions:function(a){this.$N_3=a;return a},$R_3:null,$s_3:null,$w_3:null,$17_3:null,get_$5_3:function(){var a=null;if(this.$1_3)a=this.$1_3.completedSearchTerm;return a},set_$5_3:function(a){if(this.$1_3)this.$1_3.completedSearchTerm=a;return a},get_$I_3:function(){var a=null;if(this.$1_3)a=this.$1_3.searchTerm;return a},set_$I_3:function(a){if(this.$1_3)this.$1_3.searchTerm=a;return a},$19_3:function(a){if(this.$1_3)this.$1_3.fullListSearch=a},$13_3:"",get_searchIconUrl:function(){return this.$13_3},set_searchIconUrl:function(a){this.$13_3=a;return a},$12_3:"",get_searchHoverIconUrl:function(){return this.$12_3},set_searchHoverIconUrl:function(a){this.$12_3=a;return a},$u_3:"",get_cancelIconUrl:function(){return this.$u_3},set_cancelIconUrl:function(a){this.$u_3=a;return a},$t_3:"",get_cancelHoverIconUrl:function(){return this.$t_3},set_cancelHoverIconUrl:function(a){this.$t_3=a;return a},$W_3:"",get_fullSearchSiteUrl:function(){return this.$W_3},set_fullSearchSiteUrl:function(a){this.$W_3=a;return a},$18_3:"",get_searchUrl:function(){return this.$18_3},set_searchUrl:function(a){this.$18_3=a;return a},dispose:function(){if(!this.$V_3){Srch.ClientControl.prototype.dispose.call(this);this.$V_3=true}},initialize:function(){Srch.ClientControl.prototype.initialize.call(this);this.$C_3="";this.$8_3=false;this.$6_3=true;this.$9_3=false;this.alternateRenderer=this.$$d_$1C_3;this.$S_3=0;this.$O_3=0;this.$A_3=false;this.$1F_3();this.initializeStrings()},get_$11_3:function(){return this.get_id()+"_lsinput"},get_$14_3:function(){return this.get_id()+"_lsimg"},get_$15_3:function(){return this.get_id()+"_lsimgspan"},get_$1V_3:function(){return this.get_id()+"_lsstatus"},get_$p_3:function(){return this.get_id()+"_lsupscope"},get_$16_3:function(){return this.get_id()+"_lsprogress"},get_$10_3:function(){return this.get_id()+"_lsparent"},$1F_3:function(){this.$m_3=this.$$d_onSearchBoxKeyPress;this.$n_3=this.$$d_onSearchBoxKeyUp;this.$l_3=this.$$d_$1Q_3;this.$k_3=this.$$d_$1P_3;this.$i_3=this.$$d_$1N_3;this.$j_3=this.$$d_$1O_3;this.$o_3=this.$$d_$1R_3;this.$q_3=this.$$d_$1S_3;this.$Y_3=this.$$d_$1H_3;this.$X_3=this.$$d_$1G_3;this.$e_3=this.$$d_$1L_3;this.$d_3=this.$$d_$1K_3;this.$b_3=this.$$d_$1I_3;this.$c_3=this.$$d_$1J_3;this.$f_3=this.$$d_$1M_3;this.$B_3=0},initializeStrings:function(){if(this.$1_3.listBaseType===1){this.$J_3=SpsClient.ScriptResources.ip_FileGhostedText;this.$N_3=SpsClient.ScriptResources.ip_LibrarySearchInstructions;this.$K_3=SpsClient.ScriptResources.ip_LibraryHiddenItems}else{this.$J_3=SpsClient.ScriptResources.ip_ItemGhostedText;this.$N_3=SpsClient.ScriptResources.ip_ListSearchInstructions;this.$K_3=SpsClient.ScriptResources.ip_ListHiddenItems}this.$U_3=SpsClient.ScriptResources.ip_SiteHiddenItems;this.$L_3=SpsClient.ScriptResources.ip_HiddenItemsTitle;this.$R_3=SpsClient.ScriptResources.ip_SearchButtonInstructions;this.$s_3=SpsClient.ScriptResources.ip_CancelButtonInstructions;this.$w_3=SpsClient.ScriptResources.ip_ClearButtonInstructions;this.$17_3=SpsClient.ScriptResources.ip_SearchProgress},$1B_3:function(a){this.$B_3|=a},$1T_3:function(a){this.$B_3&=3-a},$1D_3:function(a){this.$x_3(a);if(a===1||a===3){$addHandler(this.$0_3,"keypress",this.$m_3);$addHandler(this.$0_3,"keyup",this.$n_3);$addHandler(this.$0_3,"input",this.$l_3);$addHandler(this.$0_3,"focus",this.$k_3);$addHandler(this.$0_3,"blur",this.$i_3);$addHandler(this.$0_3,"click",this.$j_3);$addHandler(this.$2_3,"mouseover",this.$Y_3);$addHandler(this.$2_3,"mouseout",this.$X_3);$addHandler(this.$2_3,"click",this.$o_3);$addHandler(this.$3_3,"mouseover",this.$e_3);$addHandler(this.$3_3,"mouseout",this.$d_3);$addHandler(this.$3_3,"click",this.$b_3);$addHandler(this.$3_3,"keypress",this.$c_3)}if(a===2||a===3)this.$F_3&&$addHandler(this.$F_3,"click",this.$q_3);this.$1B_3(a)},$x_3:function(a){if((a===1||a===3)&&(this.$B_3===1||this.$B_3===3)){$removeHandler(this.$0_3,"keypress",this.$m_3);$removeHandler(this.$0_3,"keyup",this.$n_3);$removeHandler(this.$0_3,"input",this.$l_3);$removeHandler(this.$0_3,"focus",this.$k_3);$removeHandler(this.$0_3,"blur",this.$i_3);$removeHandler(this.$0_3,"click",this.$j_3);$removeHandler(this.$2_3,"mouseover",this.$Y_3);$removeHandler(this.$2_3,"mouseout",this.$X_3);$removeHandler(this.$2_3,"click",this.$o_3);$removeHandler(this.$3_3,"mouseover",this.$e_3);$removeHandler(this.$3_3,"mouseout",this.$d_3);$removeHandler(this.$3_3,"click",this.$b_3);$removeHandler(this.$3_3,"keypress",this.$c_3)}if((a===2||a===3)&&(this.$B_3===2||this.$B_3===3))this.$F_3&&$removeHandler(this.$F_3,"click",this.$q_3);this.$1T_3(a)},$1E_3:function(a){if(a===1||a===3){this.$0_3=$get(this.get_$11_3());this.$2_3=$get(this.get_$14_3());this.$D_3=$get(this.get_$15_3());this.$T_3=$get(this.get_$1V_3());this.$E_3=$get(this.get_$16_3());this.$3_3=$get(this.get_$10_3())}if(a===2||a===3)this.$F_3=$get(this.get_$p_3())},$h_3:function(a){this.$x_3(a);this.$1E_3(a);this.$1D_3(a)},$1H_3:function(a){a.preventDefault();this.$H_3=true;this.updateVisuals()},$1G_3:function(a){a.preventDefault();this.$H_3=false;this.updateVisuals()},$1L_3:function(a){a.preventDefault();this.$M_3=true;this.updateVisuals()},$1K_3:function(a){a.preventDefault();this.$M_3=false;this.updateVisuals()},$1I_3:function(a){a.preventDefault();this.$P_3();this.updateVisuals()},$1J_3:function(a){var b=a.charCode;if(Srch.U.isEnterKey(String.fromCharCode(b))){a.preventDefault();a.stopPropagation();if(this.$4_3){this.$A_3=true;this.searchCancelOrClear();this.$P_3();this.updateVisuals()}}else if(b===27){a.preventDefault();a.stopPropagation()}},onSearchBoxKeyPress:function(a){if(!a)return;var b=a.charCode;if(Srch.U.isEnterKey(String.fromCharCode(b))){a.preventDefault();a.stopPropagation();this.$A_3=this.$6_3&&!Srch.U.e(this.get_$5_3());this.searchCancelOrClear();this.updateVisuals()}else if(b===27){a.preventDefault();a.stopPropagation()}},$a_3:function(){this.$C_3="";this.set_$I_3(null);this.$4_3=false;this.$G_3=false;this.$0_3.disabled=false;this.updateVisuals()},$1R_3:function(a){a.preventDefault();a.stopPropagation();this.searchCancelOrClear();this.updateVisuals()},searchCancelOrClear:function(){var a=this.$0_3.value;if(this.$4_3){this.set_$I_3(null);this.$19_3(false);inplview.RefreshInplViewUrlByContext(this.$1_3);inplview.CancelRefreshViewByContext(this.$1_3);this.$a_3()}else if(this.$A_3)this.clearSearch();else!Microsoft.SharePoint.Portal.ListSearchBox.isNullOrWhiteSpace(a)&&this.$1U_3(a);this.$1A_3()},$1S_3:function(a){a.preventDefault();this.$1X_3()},onSearchBoxKeyUp:function(a){if(!a)return;a.preventDefault();this.$z_3()},$1Q_3:function(a){a.preventDefault();this.$z_3()},$z_3:function(){var a=this.$0_3.value;if(!Microsoft.SharePoint.Portal.ListSearchBox.$v(this.$Z_3,a)){this.$9_3=true;this.$Z_3=a}this.$6_3=Microsoft.SharePoint.Portal.ListSearchBox.isNullOrWhiteSpace(a);this.updateVisuals()},$1P_3:function(a){a.preventDefault();this.$7_3=1;this.updateVisuals()},$1N_3:function(a){a.preventDefault();this.$7_3=0;this.updateVisuals()},$1O_3:function(a){a.stopPropagation()},$1M_3:function(a){a.stopPropagation();this.$G_3=false;this.updateVisuals()},onDataRefreshCompleted:function(){if(this.$4_3){this.$C_3="";this.$8_3=false;this.set_$5_3(this.get_$I_3());this.$0_3.value=!Srch.U.e(this.get_$5_3())?this.get_$5_3():"";this.$6_3=Microsoft.SharePoint.Portal.ListSearchBox.isNullOrWhiteSpace(this.$0_3.value);this.$S_3=this.$O_3;this.$a_3();if(this.$6_3){this.$P_3();this.$r_3()}this.$9_3=false;this.$Z_3="";this.$4_3=false;this.$G_3=false;this.$Q_3=false;this.$0_3.disabled=false}this.updateVisuals();this.$1A_3()},updateVisuals:function(){if(this.$9_3&&!Microsoft.SharePoint.Portal.ListSearchBox.$v(this.$0_3.value,this.get_$5_3())&&!this.$6_3&&!this.$4_3){this.showSearchIcon();this.$2_3.title=this.$R_3}else if((!this.$9_3||this.$9_3&&Srch.U.e(this.get_$5_3()))&&this.$6_3){this.showSearchIcon();this.$2_3.title=this.$R_3}else{this.showCancelIcon();if(this.$4_3)this.$2_3.title=this.$s_3;else this.$2_3.title=this.$w_3}this.styleParentDiv(this.$7_3===1||this.$7_3===2,this.$M_3);this.styleTextBox(this.$6_3,this.$7_3===1);this.$0_3.disabled=this.$4_3;if(this.$G_3){this.$E_3.style.visibility="visible";$addHandler(this.$E_3,"click",this.$f_3);this.$Q_3=true}else{this.$E_3.style.visibility="hidden";if(this.$Q_3){$removeHandler(this.$E_3,"click",this.$f_3);this.$Q_3=false}}},showSearchIcon:function(){this.$A_3=false;if(this.$H_3){this.$2_3.setAttribute("class","ms-inlineSearch-searchImgHover ms-inlineSearch-imgHoverHighlight");this.$D_3.setAttribute("class","ms-inlineSearch-searchImgSpanBase ms-inlineSearch-searchImgSpanHoverHighlight")}else{this.$2_3.setAttribute("class","ms-inlineSearch-searchImg");this.$D_3.setAttribute("class","ms-inlineSearch-searchImgSpanBase ms-inlineSearch-searchImgSpanStandard")}},showCancelIcon:function(){this.$A_3=true;if(this.$H_3){this.$2_3.setAttribute("class","ms-inlineSearch-cancelImgHover ms-inlineSearch-imgHoverHighlight");this.$D_3.setAttribute("class","ms-inlineSearch-searchImgSpanBase ms-inlineSearch-searchImgSpanHoverHighlight")}else{this.$2_3.setAttribute("class","ms-inlineSearch-cancelImg");this.$D_3.setAttribute("class","ms-inlineSearch-searchImgSpanBase ms-inlineSearch-searchImgSpanStandard")}},$P_3:function(){this.$7_3=1;this.$0_3.select();!this.$0_3.disabled&&this.$0_3.focus()},$r_3:function(){this.$7_3=0;!this.$0_3.disabled&&this.$0_3.blur()},styleParentDiv:function(a,b){if(a)this.$3_3.setAttribute("class","ms-InlineSearch-Outline-Baseline ms-InlineSearch-Outline-Focused");else if(b)this.$3_3.setAttribute("class","ms-InlineSearch-Outline-Baseline ms-InlineSearch-Outline-Filled");else this.$3_3.setAttribute("class","ms-InlineSearch-Outline-Baseline ms-InlineSearch-Outline-Empty")},styleTextBox:function(b,a){if(b)if(a){if(this.$8_3){this.$0_3.value=this.$C_3;this.$C_3="";this.$8_3=false}this.$0_3.setAttribute("class","ms-helperText ms-textSmall ms-InlineSearch-SearchBox-Baseline ms-InlineSearch-SearchBox-EmptyFocused")}else{if(!this.$8_3){this.$C_3=Microsoft.SharePoint.Portal.ListSearchBox.isNullOrWhiteSpace(this.$0_3.value)?this.$0_3.value:"";this.$0_3.value=this.$J_3;this.$8_3=true}this.$0_3.setAttribute("class","ms-helperText ms-textSmall ms-InlineSearch-SearchBox-Baseline ms-InlineSearch-SearchBox-EmptyUnfocused")}else{this.$C_3="";this.$8_3=false;this.$0_3.setAttribute("class","ms-helperText ms-textSmall ms-InlineSearch-SearchBox-Baseline ms-InlineSearch-SearchBox-Filled")}},$1C_3:function(c){var a="<div id='{0}' class='ms-InlineSearch-Outline-Baseline ms-InlineSearch-Outline-Empty'><input id='{1}' title='{2}' class='ms-core-form-helper ms-InlineSearch-SearchBox-Baseline ms-InlineSearch-SearchBox-Empty' type='text' value='{3}' maxlength='2048'/><span id='{4}' class='{5}'><img id='{6}' class='{7}' src='{8}' title='{9}'/></span></div><div id='{10}' class='ms-InlineSearch-SearchProgress'><img src='{11}' title='{12}' style='vertical-align:middle;'/></div>",b=String.format(a,SP.Utilities.HttpUtility.htmlEncode(this.get_$10_3()),SP.Utilities.HttpUtility.htmlEncode(this.get_$11_3()),SP.Utilities.HttpUtility.htmlEncode(this.$N_3),SP.Utilities.HttpUtility.htmlEncode(this.get_$5_3()),SP.Utilities.HttpUtility.htmlEncode(this.get_$15_3()),"ms-inlineSearch-searchImgSpanBase ms-inlineSearch-searchImgSpanStandard",SP.Utilities.HttpUtility.htmlEncode(this.get_$14_3()),"ms-inlineSearch-searchImg",GetThemedImageUrl("spcommon.png"),SP.Utilities.HttpUtility.htmlEncode(this.$R_3),SP.Utilities.HttpUtility.htmlEncode(this.get_$16_3()),SP.Utilities.HttpUtility.htmlEncode(this.$1_3.imagesPath+"loadingcirclests16.gif"),SP.Utilities.HttpUtility.htmlEncode(this.$17_3));c.innerHTML=b},$1A_3:function(){var b=Microsoft.SharePoint.Portal.ListSearchBox.$y(this.$S_3,2),a;switch(b){case 0:a="";break;case 1:a="";break;case 2:var c=String.format(this.$K_3," <a href='#' id='"+this.get_$p_3()+"' title='"+this.$L_3+"'>","</a>");a="<div class='ms-InlineSearch-SearchStatus'>"+c+"</div>";break;case 3:var d=String.format(this.$U_3," <a href='#' id='"+this.get_$p_3()+"' title='"+this.$L_3+"'>","</a>");a="<div class='ms-InlineSearch-SearchStatus'>"+d+"</div>";break;default:a=""}this.$h_3(1);this.$T_3.innerHTML=a;this.$h_3(2)},$1W_3:function(){this.$G_3=this.$4_3;this.updateVisuals()},$1U_3:function(a){if(!this.$6_3){this.set_$I_3(a);this.$g_3(0,a)}},clearSearch:function(){if(Srch.U.e(this.get_$5_3())){this.$0_3.value="";this.$P_3()}this.$a_3();!Srch.U.e(this.get_$5_3())&&this.$g_3(1,null)},$1X_3:function(){this.$g_3(2,this.get_$5_3())},$1Y_3:function(){var a=String.format("{0}?u={1}&k={2}",SP.Utilities.UrlBuilder.urlCombine(this.$1_3.HttpRoot,SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl()+"osssearchresults.aspx"),SP.Utilities.HttpUtility.urlKeyValueEncode(this.$W_3),SP.Utilities.HttpUtility.urlKeyValueEncode(this.get_$5_3()));STSNavigate(a)},$g_3:function(a,b){this.$O_3=Microsoft.SharePoint.Portal.ListSearchBox.$y(this.$S_3,a);this.$19_3(this.$O_3===2);this.set_$I_3(b);if(this.$O_3!==3){this.$r_3();this.$0_3.disabled=true;this.$7_3=2;this.$3_3.focus();this.$4_3=true;window.setTimeout(this.$$d_$1W_3,300);this.$1_3.onDataRefreshCompleted=this.$$d_onDataRefreshCompleted;inplview.RefreshInplViewUrlByContext(this.$1_3);inplview.HandleRefreshViewByContext(this.$1_3);this.updateVisuals()}else this.$1Y_3()},bootstrapRendering:function(){this.renderControl(null,null);this.$h_3(3);this.updateVisuals()}};Microsoft.SharePoint.Portal.ListSearchBox.SearchScopeType=function(){};Microsoft.SharePoint.Portal.ListSearchBox.SearchScopeType.prototype={none:0,optimistic:1,list:2,site:3};Microsoft.SharePoint.Portal.ListSearchBox.SearchScopeType.registerEnum("Microsoft.SharePoint.Portal.ListSearchBox.SearchScopeType",false);Microsoft.SharePoint.Portal.ListSearchBox.SearchActionType=function(){};Microsoft.SharePoint.Portal.ListSearchBox.SearchActionType.prototype={search:0,cancel:1,upscope:2};Microsoft.SharePoint.Portal.ListSearchBox.SearchActionType.registerEnum("Microsoft.SharePoint.Portal.ListSearchBox.SearchActionType",false);Microsoft.SharePoint.Portal.ListSearchBox.FocusedElementType=function(){};Microsoft.SharePoint.Portal.ListSearchBox.FocusedElementType.prototype={none:0,searchBox:1,parentDiv:2};Microsoft.SharePoint.Portal.ListSearchBox.FocusedElementType.registerEnum("Microsoft.SharePoint.Portal.ListSearchBox.FocusedElementType",false);Microsoft.SharePoint.Portal.ListSearchBox.registerClass("Microsoft.SharePoint.Portal.ListSearchBox",Srch.ClientControl);typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.ListSearchBox.js");_spApplicationPagesScriptLoaded=true;