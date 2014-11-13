var settings = {};
settings.serverUrl = "http://127.0.0.1:3000/";

var processingTime = {};
processingTime.android = 0.0;
processingTime.cloud = 0.0;

window.setInterval(function() {
  renderAndroidImage();
  renderCloudImage();
}, 100);