define([
  "dojo/_base/declare",
  "dojo/Evented"
], function(declare, Evented) {
  return declare([Evented], {
    constructor: function(el) {
      this.el = el;
    },
    move: function(position, callback) {
      var animProps = {
        top: position.y, //event.clientY - mapSize.y - 13,
        left: position.x //event.clientX - mapSize.x - 13
      };
      this.el.anim(animProps, 1200, null, callback);
    }
  });
});
