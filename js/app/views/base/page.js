define([
  'jquery',
  'lodash',
  'backbone',
  'meetup_api_lib',
  'text!templates/base/page.html',
  'text!/meetup_config.json'
], function($, _, Backbone, meetup_api_lib, dashboardPageTemplate,config){
  var DashboardPage = Backbone.View.extend({
    el: '#page',
    render: function () {
      var config_parsed = JSON.parse(config)['meetup_credentials'];
      meetup_api_lib.init(config_parsed.api_key, config_parsed.group_urlname);
      $(this.el).html(dashboardPageTemplate);
    }
  });
  return DashboardPage;
});

