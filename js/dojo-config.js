var dojoConfig = {
  baseUrl: "/",
  packages: [
    {name: "dojo", location: "vendor/js/dojo"},
    {name: "apps", location: "js/apps"},
    {name: "controllers", location: "js/controllers"},
    {name: "models", location: "js/models"},
    {name: "routers", location: "js/routers"},
    {name: "templates", location: "html/templates"},
    {name: "stores", location: "js/stores"},
    {name: "utils", location: "js/utils"},
    {name: "views", location: "js/views"}
  ],
  async: true,
  isDebug: true,
  //cacheBust: true,
  parseOnLoad: false,
  callback: function() {
    require([
      "apps/main",
      "dojo/parser",
      "dojo/ready"
    ], function(app, parser, ready) {
      ready(function() {
        parser.parse();
        app.run();
      });
    });
  }
};

function log() {
  window.console.log.apply(window.console, arguments);
}
