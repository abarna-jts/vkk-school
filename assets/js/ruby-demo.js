/* ########################################################### */
/* #################### RUBY MEGA MENU   ##################### */
/* ######################## V 1.0 ############################ */

/* ############## DEMO SHOWCASE JAVASCRIPT ################### */
/* THESE JS FOR DEMO SHOWCASE ONLY. ANY PROBLEM/QUESTION       */
/* REGARDING DEMO JS WILL NOT BE SUPPORTED.                    */

rubyMenuDemo = function()
{
  // Strict Mode
  "use strict";

  // Theme Switcher
  $( "#rubyTheme1" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-1.html') );
  });
  $( "#rubyTheme2" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-2.html') );
  });
  $( "#rubyTheme3" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-3.html') );
  });
  $( "#rubyTheme4" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-4.html') );
  });
  $( "#rubyTheme5" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-5.html') );
  });
  $( "#rubyTheme6" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-6.html') );
  });
  $( "#rubyTheme7" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-7.html') );
  });
  $( "#rubyTheme8" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-8.html') );
  });
  $( "#rubyTheme9" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-9.html') );
  });
  $( "#rubyTheme10" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-10.html') );
  });
  $( "#rubyTheme11" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-11.html') );
  });
  $( "#rubyTheme12" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-12.html') );
  });
  $( "#rubyTheme13" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-13.html') );
  });
  $( "#rubyTheme14" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-14.html') );
  });
  $( "#rubyTheme15" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-15.html') );
  });
  $( "#rubyTheme16" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-16.html') );
  });
  $( "#cmn-toggle-1" ).on('click', function() {
    $("div.ruby-wrapper:not(.ruby-vertical)").toggleClass("ruby-menu-full-width");
  });
  $( "#cmn-toggle-2" ).on('click', function() {
    $("div.ruby-menu-demo-header").toggleClass("ruby-menu-demo-header-bg");
    $("div.ruby-wrapper").toggleClass("ruby-menu-transparent");
  });
  $( "#cmn-toggle-3" ).on('click', function() {
    var attr = $("#ruby-transitions").attr('disabled');
    if (typeof attr !== typeof undefined && attr !== false) {
      // Element has this attribute
      $("#ruby-transitions").removeAttr("disabled");
    } else {
      $("#ruby-transitions").attr("disabled", "disabled");
    }
  });
  $( "#cmn-toggle-4" ).on('click', function() {
    $("ul.ruby-menu").toggleClass("ruby-menu-dividers");
  });
}

rubyMenuDemo();
