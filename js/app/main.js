require.config({
  paths: {
    jquery: '../libs/jquery/jquery-min',
    underscore: '../libs/underscore/underscore-min', 
    lodash: '../libs/lodash/lodash', // alternative to underscore
    backbone: '../libs/backbone/backbone-min',
    text: '../libs/require/text',
    meetup_api_lib: '../libs/meetup_api_lib/meetup_js',
    // Just a short cut so we can put our html outside the js dir
    // When you have HTML/CSS designers this aids in keeping them out of the js directory
    templates: '../../templates'
  }

});

require([
  'views/app',
  'router',
  'vm'
], function(AppView, Router, Vm){
  var appView = Vm.create({}, 'AppView', AppView);
  appView.render();
  Router.initialize({appView: appView});  // The router now has a copy of all main appview
});
