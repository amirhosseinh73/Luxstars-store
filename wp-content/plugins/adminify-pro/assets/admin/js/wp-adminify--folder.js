"use strict";(self.webpackChunkwp_adminify=self.webpackChunkwp_adminify||[]).push([[1102],{9908:(e,t,r)=>{var a=r(538);a.Z.component("folder-app",r(4896).Z),a.Z.component("folders",r(450).Z),jQuery((function(e){e("#wp-adminify--folder-app").length&&new a.Z({el:"#wp-adminify--folder-app",template:"<folder-app></folder-app>"})}))},450:(e,t,r)=>{r.d(t,{Z:()=>o});const a={props:{folders:{type:Array,required:!0},folder_select_toggle:{type:Boolean,required:!0}},methods:{is_folder:function(e){return this.$parent.is_folder(e)},get_folder_url:function(e){return this.$parent.get_folder_url(e)},folderActions:function(e,t){this.$parent.folderActions(e,t)},showRenameFolderPopup:function(e){this.$parent.showRenameFolderPopup(e)},showDeleteFolderPopup:function(e){this.$parent.showDeleteFolderPopup(e)},showNewSubFolderPopup:function(e){this.$parent.showNewSubFolderPopup(e)}}};const o=(0,r(1900).Z)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",e._l(e.folders,(function(t){return r("li",{key:t.term_id,staticClass:"folder--single-root has--sub-menu",class:e.is_folder(t)?"active":"",attrs:{"data-folder":t.term_id}},[r("a",{style:{color:t.color},attrs:{href:e.get_folder_url(t)},on:{contextmenu:function(r){return e.folderActions(r,t)}}},[r("span",{staticClass:"wp-adminify--folder-left"},[r("span",{staticClass:"wp-adminify--icon-control"},[e.folder_select_toggle?e._e():r("span",{staticClass:"wp-adminify--icon dashicons dashicons-open-folder"}),e._v(" "),e.folder_select_toggle?r("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"_folder.selected"}],staticClass:"wp-adminify--control",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?e._i(t.selected,null)>-1:t.selected},on:{"!click":function(e){e.stopPropagation()},change:function(r){var a=t.selected,o=r.target,i=!!o.checked;if(Array.isArray(a)){var n=e._i(a,null);o.checked?n<0&&e.$set(t,"selected",a.concat([null])):n>-1&&e.$set(t,"selected",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(t,"selected",i)}}}):e._e()]),e._v(" "),r("span",{staticClass:"wp-adminify--name"},[e._v(e._s(t.name))])]),e._v(" "),r("span",{staticClass:"wp-adminify--count"},[e._v(e._s(t.count))])]),e._v(" "),t.children.length?r("folders",{staticClass:"folder--sub-lists",attrs:{folders:t.children,folder_select_toggle:e.folder_select_toggle}}):e._e(),e._v(" "),r("ul",{staticClass:"adminify--sub-menu"},[r("li",[r("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),r.stopPropagation(),e.showNewSubFolderPopup(t)}}},[e._v("New Sub-folder")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),r.stopPropagation(),e.showRenameFolderPopup(t)}}},[e._v("Rename")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),r.stopPropagation(),e.showDeleteFolderPopup(t)}}},[e._v("Delete")])])])],1)})),0)}),[],!1,null,null,null).exports},4896:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(1955);function o(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){s=!0,n=e},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw n}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=jQuery;const s={data:function(){var e;return n(e={post_type:"",post_type_tax:"",folders:[],filter_folder:"",total_uncat_posts:""},"total_uncat_posts",""),n(e,"folder_select_toggle",!1),n(e,"create_folder_popup",!1),n(e,"new_folder_name",null),n(e,"create_folder_error",null),n(e,"rename_folder_popup",!1),n(e,"rename_folder_name",null),n(e,"rename_folder_error",null),n(e,"delete_folder_popup",!1),n(e,"delete_folder_error",null),n(e,"color_tags",["#7B61FF","#0347FF","#F24AE1","#ED2E7E","#FFC804","#00BA88"]),n(e,"active_color_tag","#7B61FF"),n(e,"currentView","all"),n(e,"sort","a-z"),n(e,"is_pro",!!wp_adminify__folder_data.is_pro),n(e,"pro_notice",wp_adminify__folder_data.pro_notice),n(e,"total_posts",{"auto-draft":0,draft:0,future:0,inherit:0,pending:0,private:0,publish:0,"request-completed":0,"request-confirmed":0,"request-failed":0,"request-pending":0,trash:0}),e},mounted:function(){this.post_type=wp_adminify__folder_data.post_type,this.post_type_tax=wp_adminify__folder_data.post_type_tax,this.folders=wp_adminify__folder_data.folders,this.total_posts=wp_adminify__folder_data.total_posts,this.total_uncat_posts=wp_adminify__folder_data.total_uncat_posts,this._active_color_tag=this.active_color_tag,this.adminurl=wp_adminify__folder_data.adminurl,this.folder_hierarchy=wp_adminify__folder_data.folder_hierarchy,this.folders_to_edit=[];var e=a.Z.get(this.post_type_tax+"__sort");e&&(this.sort=e),this.init_folder_events(),l(function(){this.init_draggable_events(),this.init_droppable_events(),this.reset_on_other_ajax_events(),this.init_submenu_events()}.bind(this))},methods:{init_submenu_events:function(){l(".folder--actions .has--sub-menu > a").on("click",(function(e){e.preventDefault(),e.stopImmediatePropagation(),l(this).parent().toggleClass("sub-menu--open")})),l("body").on("click",(function(){l(".has--sub-menu.sub-menu--open").removeClass("sub-menu--open")}))},reset_on_other_ajax_events:function(){var e=this;l(document).ajaxComplete(function(e,t,r){var a=this;if("html"==r.dataType)return this.init_draggable_events();["inline-save","query-attachments","delete-post"].some((function(e){return-1!=r.data.indexOf("action=".concat(e))}))&&setTimeout((function(){a.init_draggable_events(),a.refresh_folders_data_ajax()}),100)}.bind(this)),wp.Uploader&&wp.Uploader.queue&&wp.Uploader.queue.on("reset",(function(){e.init_draggable_events(),e.refresh_folders_data_ajax()}))},init_folder_events:function(){var e=this;if(wp.media){var t=wp.media.view.Attachments;wp.media.view.Attachments=t.extend({initialize:function(){var r=this;t.prototype.initialize.apply(this,arguments),l(".folder--lists, .folder--stats").on("click","li a",(function(t){t.preventDefault();var a=l(this).attr("href");if(l(".attachments-browser .attachments").length){r.model.get("library").props.set("media_folder",e.getUrlParameter(a,"media_folder"));var o=e.getUrlParameter(a);window.history.pushState(o,"",a)}}))}})}else l(".folder--lists, .folder--stats").on("click","li a",(function(t){t.preventDefault();var r=l(this).attr("href");if(l(".folder--lists, .folder--stats").find("li").removeClass("active"),l(this).closest("li").addClass("active"),l("#the-list").length){l("#the-list").load("".concat(r," #the-list > tr"));var a=e.getUrlParameter(r);window.history.pushState(a,"",r)}}))},folderActions:function(e,t){e.preventDefault(),this.folders.forEach((function(e){e.contexted=!1})),t.contexted=!0,l(".folder--lists li").removeClass("sub-menu--open"),l(e.target).closest("li").addClass("sub-menu--open")},get_active_folder:function(){return l(".folder--lists li.active").toArray().map((function(e){return l(e).data("folder")}))},is_folder:function(e){var t=location.href;return!("all"==e&&t.indexOf(wp_adminify__folder_data.post_type_tax)>-1)&&t==this.get_folder_url(e)},getUrlParameter:function(e,t){e=e.substring(e.indexOf("?")+1);var r,a=new URLSearchParams(e),i={},n=o(a.keys());try{for(n.s();!(r=n.n()).done;){var l=r.value;a.getAll(l).length>1?i[l]=a.getAll(l):i[l]=a.get(l)}}catch(e){n.e(e)}finally{n.f()}return t?t in i?i[t]:"":i},get_folder_url:function(e){if("all"==e)return"attachment"==this.post_type?"upload.php":"post"==this.post_type?this.adminurl+"edit.php":this.adminurl+"edit.php?post_type=".concat(this.post_type);var t="uncategorized"==e?"-1":e.slug;return"attachment"==this.post_type?this.adminurl+"upload.php?".concat(this.post_type_tax,"=").concat(t):"post"==this.post_type?this.adminurl+"edit.php?".concat(this.post_type_tax,"=").concat(t):this.adminurl+"edit.php?post_type=".concat(this.post_type,"&").concat(this.post_type_tax,"=").concat(t)},showPopupOverlay:function(){l("body").addClass("wp-adminify--popup-show")},hidePopupOverlay:function(){l("body").removeClass("wp-adminify--popup-show")},showNewFolderPopup:function(){this.showPopupOverlay(),this.create_folder_popup=!0,this.parent_folder=null,this.active_color_tag=this.color_tags[0],this._active_color_tag=this.active_color_tag},showNewSubFolderPopup:function(e){this.showPopupOverlay(),this.create_folder_popup=!0,this.parent_folder=e.term_id,this.active_color_tag=this.color_tags[0],this._active_color_tag=this.active_color_tag},showRenameFolderPopup:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&t.term_id?this.folders_to_edit=[t]:this.get_active_folder().length?this.folders_to_edit=[this.folders.find((function(t){return t.term_id==e.get_active_folder()[0]}))]:this.folders_to_edit=null,this.folders_to_edit&&this.folders_to_edit.length&&(t=this.folders_to_edit[0],this._rename_folder_name=t.name,this.rename_folder_name=t.name,this.active_color_tag=t.color,this._active_color_tag=this.active_color_tag,this.showPopupOverlay(),this.rename_folder_popup=!0)},showDeleteFolderPopup:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&t.term_id?this.folders_to_edit=[t]:this.folder_select_toggle?this.folders_to_edit=this.folders.filter((function(e){return e.selected})):this.get_active_folder().length?this.folders_to_edit=[this.folders.find((function(t){return t.term_id==e.get_active_folder()[0]}))]:this.folders_to_edit=null,this.folders_to_edit&&this.folders_to_edit.length&&(this.showPopupOverlay(),this.delete_folder_popup=!0)},hide_rename_folder_popup:function(){this.hidePopupOverlay(),this.rename_folder_popup=!1,this.rename_folder_error=null},hide_delete_folder_popup:function(){this.hidePopupOverlay(),this.delete_folder_popup=!1,this.delete_folder_error=null},hide_create_folder_popup:function(){this.hidePopupOverlay(),this.create_folder_popup=!1,this.new_folder_name=null,this.create_folder_error=null,this.active_color_tag=this._active_color_tag},saveNewFolder:function(){var e=this,t={post_type:wp_adminify__folder_data.post_type,post_type_tax:wp_adminify__folder_data.post_type_tax,new_folder_name:this.new_folder_name,folder_color_tag:this.active_color_tag,parent_folder:this.parent_folder,action:"adminify_folder",route:"create_new_folder",_ajax_nonce:wp_adminify__folder_data.nonce};this.is_pro&&(t.parent_folder=this.parent_folder),l.ajax({url:wp_adminify__folder_data.ajaxurl,method:"post",data:t}).done((function(t,r,a){t.success&&200==a.status?(e.refresh_folders_data(t.data),e.hide_create_folder_popup()):e.create_folder_error=t.data.message}))},renameFolder:function(){var e=this,t=!1;if(this.active_color_tag!=this._active_color_tag&&(t=!0),t||this._rename_folder_name.trim()==this.rename_folder_name.trim()||(t=!0),!t)return this.hide_rename_folder_popup();l.ajax({url:wp_adminify__folder_data.ajaxurl,method:"post",data:{post_type:wp_adminify__folder_data.post_type,post_type_tax:wp_adminify__folder_data.post_type_tax,term_id:e.folders_to_edit[0].term_id,folder_name:e.rename_folder_name,folder_color_tag:e.active_color_tag,action:"adminify_folder",route:"rename_folder",_ajax_nonce:wp_adminify__folder_data.nonce}}).done((function(t,r,a){t.success&&200==a.status?(e.refresh_folders_data(t.data),e.hide_rename_folder_popup(),l(".folder--lists li.active > a").trigger("click")):e.rename_folder_error=t.data.message}))},init_draggable_events:function(){l(".adminify-move-file:not(.ui-draggable), .adminify-move-multiple:not(.ui-draggable)").draggable({revert:"invalid",containment:"document",helper:"clone",cursor:"move",start:function(e,t){l(this).closest("td").addClass("adminify-draggable"),l("body").addClass("adminify--items-dragging")},stop:function(e,t){l(this).closest("td").removeClass("adminify-draggable"),l("body").removeClass("adminify--items-dragging")}}),l(".attachments-browser li.attachment:not(.ui-draggable)").draggable({revert:"invalid",containment:"document",cursor:"move",cursorAt:{left:0,top:0},start:function(e,t){l("body").addClass("adminify--items-dragging")},stop:function(e,t){l(".adminify--selected-items").remove(),l("body").removeClass("adminify--items-dragging")},helper:function(e,t){l(".adminify--selected-items").remove();var r=l(".attachments-browser li.attachment.selected").length;return r=r<2?"1 Item":"".concat(r," Items"),l("<div class='adminify--selected-items'><span class='total-post-count'>".concat(r," Selected</span></div>"))}})},init_droppable_events:function(){var e=this;l(".folder--lists li a:not(.ui-droppable), .folder--stats li.folder--single-uncategorized a:not(.ui-droppable)").droppable({accept:".adminify-move-file, .adminify-move-multiple, .attachments-browser li.attachment",hoverClass:"adminify-drop-hover",classes:{"ui-droppable-active":"ui-state-highlight"},tolerance:"pointer",drop:function(t,r){var a=l(this).parent("li").data("folder");if(a){var o=[];if(r.draggable.hasClass("adminify-move-multiple")?(o=l("#the-list .check-column input[type=checkbox]:checked").toArray().map((function(e){return e.value})),l(".wp-list-table .manage-column.check-column input").prop("checked",!1)):r.draggable.hasClass("adminify-move-file")?o=[r.draggable[0].attributes["data-id"].nodeValue]:r.draggable.hasClass("attachment")&&(o=l(".media-toolbar.wp-filter").hasClass("media-toolbar-mode-select")?l(".attachments-browser li.attachment.selected").toArray().map((function(e){return e.dataset.id})):[r.draggable[0].attributes["data-id"].nodeValue]),o.length){if(!r.draggable.hasClass("attachment")){var i=l("input[name=post_view]").first().val()||"list";l.ajax({url:wp_adminify__folder_data.ajaxurl,method:"post",data:{post_ids:o,folder_id:a,post_type:wp_adminify__folder_data.post_type,post_type_tax:wp_adminify__folder_data.post_type_tax,action:"adminify_folder",route:"move_to_folder",screen:pagenow,mode:i,_ajax_nonce:wp_adminify__folder_data.nonce}}).done((function(t,r){t.success&&(e.refresh_rows(),e.refresh_folders_data(t.data))}))}r.draggable.hasClass("attachment")&&l.ajax({url:wp_adminify__folder_data.ajaxurl,method:"post",data:{post_ids:o,folder_id:a,post_type:wp_adminify__folder_data.post_type,post_type_tax:wp_adminify__folder_data.post_type_tax,action:"adminify_folder",route:"move_to_folder",screen:pagenow,mode:"grid",_ajax_nonce:wp_adminify__folder_data.nonce}}).done((function(t,r){t.success&&(e.refresh_rows(),e.refresh_folders_data(t.data))}))}}}})},refresh_rows:function(){var e=l(".folder--lists li.active, .folder--stats li.active").first();e.length||(e=l(".folder--stats li").first()),e.children("a").trigger("click")},get_allowed_status:function(){return["pending","draft","future","private","publish","inherit"]},refresh_folders_data:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.folders=t.folders,this.total_posts=t.total_posts,this.total_uncat_posts=t.total_uncat_posts,this.folder_hierarchy=t.folder_hierarchy,setTimeout((function(){e.init_droppable_events(),e.init_draggable_events()}),200)},refresh_folders_data_ajax:function(){var e=this;l.ajax({url:wp_adminify__folder_data.ajaxurl,method:"post",data:{post_type:wp_adminify__folder_data.post_type,post_type_tax:wp_adminify__folder_data.post_type_tax,action:"adminify_folder",route:"refresh_folders",_ajax_nonce:wp_adminify__folder_data.nonce}}).done((function(t,r){t.success&&e.refresh_folders_data(t.data)}))},get_color_tags:function(){if(this.folders_to_edit||this.folders_to_edit.length){var e=this.folders_to_edit[0],t="";return e&&e.color&&(t=e.color),!t||this.color_tags.includes(t)?this.color_tags:this.color_tags.concat([t])}},deleteFolders:function(){var e=this,t=this.folders_to_edit;if(!t.length)return this.hide_delete_folder_popup();t=t.map((function(e){return e.term_id})),l.ajax({url:wp_adminify__folder_data.ajaxurl,method:"post",data:{post_type:wp_adminify__folder_data.post_type,post_type_tax:wp_adminify__folder_data.post_type_tax,term_ids:t,action:"adminify_folder",route:"delete_folders",_ajax_nonce:wp_adminify__folder_data.nonce}}).done((function(t,r,a){t.success&&200==a.status&&(e.refresh_folders_data(t.data),e.hide_delete_folder_popup(),l(".folder--lists, .folder--stats").find("li.active > a").trigger("click"))}))},sortFolders:function(e){var t=l(e.currentTarget).data("sort");t&&(a.Z.set(this.post_type_tax+"__sort",t),this.sort=t)}},computed:{_filter_folder:function(){return this.filter_folder.trim().toLowerCase()},filtered_folders:function(){var e=this,t=this,r=this.folders.map((function(e){return e.selected=!1,e.contexted=!1,e.children=[],e}));function a(e,o){t.folder_hierarchy[e.term_id].forEach((function(i){var n=r.find((function(e){return e.term_id==i})),l=r.findIndex((function(e){return e.term_id==i}));n&&l>-1&&(e.children.find((function(e){return e.term_id==n.term_id}))||(e.children.push(n),n=e.children.find((function(e){return e.term_id==i})),i in t.folder_hierarchy&&a(n,o)))}))}if(r=r.sort((function(t,r){if("a-z"==e.sort){if(t.name<r.name)return-1;if(t.name>r.name)return 1}if("z-a"==e.sort){if(t.name<r.name)return 1;if(t.name>r.name)return-1}return 0})),this._filter_folder){var o=r.filter((function(t){return t.name.toLowerCase().search(e._filter_folder.toLowerCase())>-1}));if(o.length)return o}for(var i in r.forEach((function(e){e.term_id in t.folder_hierarchy&&a(e,r)})),t.folder_hierarchy)t.folder_hierarchy[i].forEach((function(e){var t=r.findIndex((function(t){return t.term_id==e}));r.splice(t,1)}));return r},total_posts_count:function(){var e=this,t=0;return this.get_allowed_status().forEach((function(r){t+=Number(e.total_posts[r])})),t},is_reached_limit:function(){return!this.is_pro&&(!(!this.folders||!this.folders.length)&&this.folders.length>=3)}},watch:{filter_folder:function(){var e=this;setTimeout((function(){e.init_draggable_events(),e.init_droppable_events()}),50)}}};const d=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"wp-adminify--folder-app"}},[r("div",{staticClass:"wp-adminify--folder-widget"},[r("div",{staticClass:"wp-adminify--folder-app"},[r("div",{staticClass:"wp-adminify--folder-app--inner"},[r("div",{staticClass:"folder--header"},[r("span",[e._v("Folders")]),e._v(" -\n                    "),r("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.showNewFolderPopup.apply(null,arguments)}}},[e._v("Create New Folder")])]),e._v(" "),r("div",{staticClass:"folder--actions"},[r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.folder_select_toggle,expression:"folder_select_toggle"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.folder_select_toggle)?e._i(e.folder_select_toggle,null)>-1:e.folder_select_toggle},on:{change:function(t){var r=e.folder_select_toggle,a=t.target,o=!!a.checked;if(Array.isArray(r)){var i=e._i(r,null);a.checked?i<0&&(e.folder_select_toggle=r.concat([null])):i>-1&&(e.folder_select_toggle=r.slice(0,i).concat(r.slice(i+1)))}else e.folder_select_toggle=o}}})]),e._v(" "),r("a",{staticClass:"btn--folder-rename",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.showRenameFolderPopup.apply(null,arguments)}}},[e._v("Rename")]),e._v(" "),r("a",{staticClass:"btn--folder-delete",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.showDeleteFolderPopup.apply(null,arguments)}}},[e._v("Delete")]),e._v(" "),r("ul",{staticClass:"folder-sort--list"},[e._m(0),e._v(" "),r("li",{staticClass:"folder--sort has--sub-menu"},[e._m(1),e._v(" "),r("ul",{staticClass:"adminify--sub-menu"},[r("li",[r("a",{attrs:{"data-sort":"a-z",href:"#"},on:{click:function(t){return t.preventDefault(),e.sortFolders(t)}}},[e._v("A → Z")])]),e._v(" "),r("li",[r("a",{attrs:{"data-sort":"z-a",href:"#"},on:{click:function(t){return t.preventDefault(),e.sortFolders(t)}}},[e._v("Z → A")])])])])])]),e._v(" "),r("div",{staticClass:"folder--search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter_folder,expression:"filter_folder"}],attrs:{type:"text",placeholder:"Search folder"},domProps:{value:e.filter_folder},on:{input:function(t){t.target.composing||(e.filter_folder=t.target.value)}}})]),e._v(" "),r("ul",{staticClass:"folder--stats"},[r("li",{staticClass:"folder--single-all",class:e.is_folder("all")?"active":"",attrs:{"data-folder":"all"}},[r("a",{attrs:{href:e.get_folder_url("all")}},[r("span",[e._v("All")]),r("span",{staticClass:"wp-adminify--count"},[e._v(e._s(e.total_posts_count))])])]),e._v(" "),r("li",{staticClass:"folder--single-uncategorized",class:e.is_folder("uncategorized")?"active":"",attrs:{"data-folder":"uncategorized"}},[r("a",{attrs:{href:e.get_folder_url("uncategorized")}},[r("span",[e._v("Uncategorized")]),r("span",{staticClass:"wp-adminify--count"},[e._v(e._s(e.total_uncat_posts))])])])]),e._v(" "),e.folders?r("folders",{staticClass:"folder--lists",attrs:{folders:e.filtered_folders,folder_select_toggle:e.folder_select_toggle}}):e._e()],1)])]),e._v(" "),r("div",{staticClass:"wp-adminify--popup-area"},[r("div",{staticClass:"wp-adminify--popup-container"},[r("div",{staticClass:"wp-adminify--popup-container_inner"},[e.create_folder_popup?r("div",{staticClass:"popup--create-new-folder"},[r("a",{staticClass:"wp-adminify--popup-close",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.hide_create_folder_popup.apply(null,arguments)}}},[r("span",{staticClass:"dashicons dashicons-no-alt"})]),e._v(" "),e.parent_folder?[r("h3",[e._v("New Sub Folder")]),e._v(" "),e.is_pro?[r("div",{staticClass:"popup--new-folder__name"},[r("div",[e._v("Sub Folder Name")]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.new_folder_name,expression:"new_folder_name"}],attrs:{type:"text",placeholder:"Write here"},domProps:{value:e.new_folder_name},on:{input:[function(t){t.target.composing||(e.new_folder_name=t.target.value)},function(t){e.create_folder_error=null}]}})])]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"popup--new-folder__color"},[r("div",[e._v("Colour Tag")]),e._v(" "),r("div",[r("ul",{staticClass:"wp-adminify--colors"},e._l(e.color_tags,(function(t){return r("li",{key:t,class:t==e.active_color_tag?"active":""},[r("a",{style:"background: "+t+";",attrs:{href:"#"},on:{click:function(r){r.preventDefault(),e.active_color_tag=t}}})])})),0)])]),e._v(" "),r("a",{staticClass:"button button-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.saveNewFolder.apply(null,arguments)}}},[e._v("Save Folder")]),e._v(" "),e.create_folder_error?r("div",{staticClass:"popup--new-folder-error"},[e._v(e._s(e.create_folder_error))]):e._e()]:[r("div",{staticClass:"wp-adminify-folder--pro-notice",domProps:{innerHTML:e._s(e.pro_notice)}})]]:[r("h3",[e._v("New Folder")]),e._v(" "),e.is_reached_limit?[r("div",{staticClass:"wp-adminify-folder--pro-notice",domProps:{innerHTML:e._s(e.pro_notice)}})]:[r("div",{staticClass:"popup--new-folder__name"},[r("div",[e._v("Folder Name")]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.new_folder_name,expression:"new_folder_name"}],attrs:{type:"text",placeholder:"Write here"},domProps:{value:e.new_folder_name},on:{input:[function(t){t.target.composing||(e.new_folder_name=t.target.value)},function(t){e.create_folder_error=null}]}})])]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"popup--new-folder__color"},[r("div",[e._v("Colour Tag")]),e._v(" "),r("div",[r("ul",{staticClass:"wp-adminify--colors"},e._l(e.color_tags,(function(t){return r("li",{key:t,class:t==e.active_color_tag?"active":""},[r("a",{style:"background: "+t+";",attrs:{href:"#"},on:{click:function(r){r.preventDefault(),e.active_color_tag=t}}})])})),0)])]),e._v(" "),r("a",{staticClass:"button button-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.saveNewFolder.apply(null,arguments)}}},[e._v("Save Folder")]),e._v(" "),e.create_folder_error?r("div",{staticClass:"popup--new-folder-error"},[e._v(e._s(e.create_folder_error))]):e._e()]]],2):e._e(),e._v(" "),e.rename_folder_popup?r("div",{staticClass:"popup--rename-folder"},[r("a",{staticClass:"wp-adminify--popup-close",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.hide_rename_folder_popup.apply(null,arguments)}}},[r("span",{staticClass:"dashicons dashicons-no-alt"})]),e._v(" "),r("h3",[e._v("Rename Folder")]),e._v(" "),r("div",{staticClass:"popup--new-folder__name"},[r("div",[e._v("Rename Folder")]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.rename_folder_name,expression:"rename_folder_name"}],attrs:{type:"text",placeholder:"Write here"},domProps:{value:e.rename_folder_name},on:{input:[function(t){t.target.composing||(e.rename_folder_name=t.target.value)},function(t){e.rename_folder_error=null}]}})])]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"popup--new-folder__color"},[r("div",[e._v("Change Color")]),e._v(" "),r("div",[r("ul",{staticClass:"wp-adminify--colors"},e._l(e.get_color_tags(),(function(t){return r("li",{key:t,class:t==e.active_color_tag?"active":""},[r("a",{style:"background: "+t+";",attrs:{href:"#"},on:{click:function(r){r.preventDefault(),e.active_color_tag=t}}})])})),0)])]),e._v(" "),r("a",{staticClass:"button button-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.renameFolder.apply(null,arguments)}}},[e._v("Save Folder")]),e._v(" "),e.rename_folder_error?r("div",{staticClass:"popup--new-folder-error"},[e._v(e._s(e.rename_folder_error))]):e._e()]):e._e(),e._v(" "),e.delete_folder_popup?r("div",{staticClass:"popup--delete-folder"},[r("a",{staticClass:"wp-adminify--popup-close",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.hide_delete_folder_popup.apply(null,arguments)}}},[r("span",{staticClass:"dashicons dashicons-no-alt"})]),e._v(" "),r("h3",[e._v("Are you sure you want to delete the selected folder?")]),e._v(" "),r("p",[e._v("Items in the folder will not be deleted.")]),e._v(" "),r("div",[r("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.hide_delete_folder_popup.apply(null,arguments)}}},[e._v("No, Keep it")]),e._v(" "),r("a",{staticClass:"button button-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.deleteFolders.apply(null,arguments)}}},[e._v("Yes, Delete it!")])])]):e._e()])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"folder--expand"},[t("a",{staticClass:"btn--folder-expand",attrs:{href:"#"}},[t("span",{staticClass:"dashicons dashicons-arrow-down-alt2"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"btn--folder-sort",attrs:{href:"#"}},[t("span",{staticClass:"dashicons dashicons-sort"})])}],!1,null,null,null).exports}},e=>{e.O(0,[2564],(()=>{return t=9908,e(e.s=t);var t}));e.O()}]);