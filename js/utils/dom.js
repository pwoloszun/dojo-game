define([
  "dojo/_base/lang",
  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/dom-construct",
  "dojo/dom-form",
  "dojo/dom-geometry"
  // "dojo/dom-prop"
  // "dojo/dom-style"
], function(lang, dom) {
  var extendedDom = dom;
  for (var i = 2; i < arguments.length; i++) {
    var domModule = arguments[i];
    extendedDom = lang.delegate(extendedDom, domModule);
  }
  return extendedDom;
});
