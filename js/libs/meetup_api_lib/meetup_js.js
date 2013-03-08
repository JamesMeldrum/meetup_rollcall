// Meetup_JS - series of provisioned calls on the meetup api.
//  Public:
//    * 
(function(){
  "use strict";
define(
       ['jquery'],
       function($){
         return {
           ajax_settings: {
             "cache" : false,
             "async" : false,
             "crossDomain" : true
           },
           api_key : undefined,
           base_url : "http://api.meetup.com/2/",
           getGroupId : function(ndx, group_url_ident){
             $.ajax(GET_url,{
               url: GET_url,
               type: 'GET',
               crossDomain : true,
               dataType: 'jsonp',
               success: function(data){
                 this.groups[ndx] = {group_url_ident, data.results[0].id};
               }
             });
           },
           getValidGroupsAsList : function(){
              console.log("Groups of meetups requested");
              return;
           },
           getUpcomingMeetsupForGroupAsList : function(group_id) {
              if(group_id === undefined){
                throw this.errors[1];
              }
              console.log("List of recent meetups requested");
              return;
           },
           groups : [],
           errors : [
             new Error("Invalid configuration provided to init"),
             new Error("Invalid meetup group ID provided for ")
           ],
           issueJSONRequest : function(GET_url) {
           },
           confirm_valid_request : function() {
             
             var group_url_ident = 0;

             if(this.api_key === undefined || (this.groups.length) < 1){
               throw this.errors[0];
             }

             for(group_url_ident in this.groups){
               if(this.groups.hasOwnProperty(group_url_ident)){
                 this.groups.push(this.groups[group_url_ident]);
                 console.log(this.issueJSONRequest(this.base_url + 'groups?key=4e4615491240203683f137557275e23&group_urlname=nylug-meetings'));
               }
             }
           },
           init : function(api_key, array_of_groups ) { 
             var group_url_ident = 0;
             this.api_key = api_key; 
             for(group_url_ident in array_of_groups){
               if(array_of_groups.hasOwnProperty(group_url_ident)){
                 this.groups.push(array_of_groups[group_url_ident]);
               }
             }
             console.log("groups:",this.groups[0]);
             this.confirm_valid_request();
           },
           version : "0.0.1",
           do_stuff : function(){ console.log("do stuff called"); }
         };
       }
);
}());
