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

			if (state == "i") {
				$.ajax({
					url: settings.serverUrl + "getandroidtime",
					cache: false,
					success: function(ms) {
						ms = parseFloat(ms);
						var sec = ms / 1000;
						processingTime.android = sec;
						loadGraph();
					}
				});
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

			if (state == "i") {
				$.ajax({
					url: settings.serverUrl + "getcloudtime",
					cache: false,
					success: function(ms) {
						ms = parseFloat(ms);
						var sec = ms / 1000;
						processingTime.cloud = sec;
						loadGraph();
					}					
				});
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