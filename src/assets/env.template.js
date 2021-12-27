(function(window) {
    window.env = window.env || {};
  
    // Environment variables
    window["env"]["apiHost"] = "${WATCHERS_SERVICE_HOST}";
  })(this);