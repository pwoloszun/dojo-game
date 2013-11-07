define([
  "views/MapView",
  "models/Enemy",
  "models/Player"
], function(MapView, Enemy, Player) {

  function random(max) {
    return Math.ceil(Math.random() * 7);
  }

  return {
    index: function() {
      var mapView = new MapView(".js-game");
      var enemiesCount = random(10);
      for(var i = 0; i < enemiesCount; i++)
        mapView.addEnemy(new Enemy());
      mapView.addPlayer(new Player());
    }
  };
});
