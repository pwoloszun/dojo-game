define([
  "routers/appRouter"
], function(appRouter) {
  return {
    run: function() {
      // define app routes
      appRouter.match([
        {path: "/", ctrl: 'MapCtrl', action: "index"},
        {path: "/fight/:enemyId", ctrl: 'FightCtrl', action: "index"},
        {path: "/stats", ctrl: 'PlayerStatsCtrl', action: "index"}
      ]);
      // redirect to main route
      appRouter.redirectTo("/");
    }
  };
});
