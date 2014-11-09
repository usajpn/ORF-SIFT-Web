var settings = {};
settings.serverUrl = "http://127.0.0.1:3000/";

window.setInterval(function() {
	renderAndroidImage();
	renderCloudImage();
}, 100);

function renderAndroidImage() {
	var stateUrl = {
		"w": "img/waiting.gif",
		"l": "img/loading.gif",
		"i": "img/android.jpeg"
	};

	$.ajax({
		url: settings.serverUrl + "androidstate",
		cache: false,
		success: function(state){
			$('#android-processed-img').empty();

			if (stateUrl[state]) {
				$('#android-processed-img').prepend('<img src="' + stateUrl[state] + '" />');
			}

		}
	});

}

function renderCloudImage() {
	var stateUrl = {
		"w": "img/waiting.gif",
		"l": "img/loading.gif",
		"i": "img/cloud.jpeg"
	};

	$.ajax({
		url: settings.serverUrl + "cloudstate",
		cache: false,
		success: function(state){
			$('#cloud-processed-img').empty();

			if (stateUrl[state]) {
				$('#cloud-processed-img').prepend('<img src="' + stateUrl[state] + '" />');
			}

		}
	});

}

function reset() {
	location.reload();
	$.ajax({
		url: "http://127.0.0.1:3000/reset",
		cache: false,
		success: function(data) {

		}
	});
}