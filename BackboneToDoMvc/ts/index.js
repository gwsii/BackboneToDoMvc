var Xplat;
(function (Xplat) {
    "use strict";

    Xplat.app;

    var XplatApplication = (function () {
        function XplatApplication() {
            this.appEvents = new ApplicationEvents();
        }
        XplatApplication.prototype.initialize = function () {
            this.bindEvents();
            // TODO: Perform any additional initialization here that does not require Cordova.
        };

        XplatApplication.prototype.bindEvents = function () {
            // Handle the Corodva deviceready event.
            document.addEventListener('deviceready', this.appEvents.onDeviceReady.bind(this.appEvents), false);
            // TODO: bind any additional required events such as 'loaded', 'online' or 'offline'
        };
        return XplatApplication;
    })();
    Xplat.XplatApplication = XplatApplication;

    var ApplicationEvents = (function () {
        function ApplicationEvents() {
        }
        ApplicationEvents.prototype.onDeviceReady = function () {
            // Handle the Corodva pause and resume events
            document.addEventListener('pause', this.onPause, false);
            document.addEventListener('resume', this.onResume, false);
            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        };

        ApplicationEvents.prototype.onPause = function () {
            // TODO: This application has been suspended. Save application state here.
        };

        ApplicationEvents.prototype.onResume = function () {
            // TODO: This application has been reactivated. Restore application state here.
        };
        return ApplicationEvents;
    })();
    Xplat.ApplicationEvents = ApplicationEvents;

    Xplat.app = new XplatApplication();

    window.onload = function () {
        Xplat.app.initialize();
    };
})(Xplat || (Xplat = {}));
//# sourceMappingURL=index.js.map
