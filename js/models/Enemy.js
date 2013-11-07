define([
  "dojo/_base/declare"
], function(declare) {
  return declare([], {
    constructor: function() {
      this.hp = Math.random() * 90 + 10;
    }
  });
});
