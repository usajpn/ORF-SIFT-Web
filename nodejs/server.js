
var http = require('http'),
    url = require("url"),
    fs = require('fs'),
    path = require("path"),
    port = process.argv[2] || 3000;

var android = {};
var cloud = {};

android.state = "w";
cloud.state = "w";

console.log("Creating server for localhost at port 3000...");
http.createServer(function (request, response) {
	var uri = url.parse(request.url).pathname,
	filename = path.join(process.cwd(), uri);

	// delete first slash
    uri = uri.slice(1, uri.length);
    var uriArray = uri.split('/');
    var method = uriArray[0];

    var header = {
        "Access-Control-Allow-Origin":"*",
        "Pragma": "no-cache",
        "Cache-Control" : "no-cache"
    };

    var Response = {
		"reset": function() {
			resetImg();
			response.writeHead(200, header);
            response.write("success");
            response.end();
		},
		"androidstate": function() {
			updateAndroidState();
			response.writeHead(200, header);
            response.write(android.state);
            response.end();
		},
		"cloudstate": function() {
			updateCloudState();
			response.writeHead(200, header);
            response.write(cloud.state);
            response.end();
		},
		"androidload": function() {
			android.state = "l";
			response.writeHead(200, header);
            response.write("success");
            response.end();
		},
		"cloudload": function() {
			cloud.state = "l"
			response.writeHead(200, header);
            response.write("success");
            response.end();
		}

    };

    if (Response[method]) {
		Response[method]();
    }
    if (method == "androidload") {
		console.log("received " + method);
    }
}).listen(3000);


console.log("Listening...");

function updateAndroidState() {
	fs.exists("../img/android.jpeg", function(exists) {
		if (exists) {
			android.state = "i";
		} 
	});
}

function updateCloudState() {
	fs.exists("../img/cloud.jpeg", function(exists) {
		if (exists) {
			cloud.state = "i";
		} 
	});
}

function resetImg() {
	removeFile("../img/cloud.jpeg");
	removeFile("../img/android.jpeg");
	android.state = "w";
	cloud.state = "w";
}

function removeFile(filePath) {
	fs.exists(filePath, function(exists) {
		if (exists) {
			fs.unlink(filePath, function (err) {
				if (err) throw err;
				console.log('successfully deleted ' + filePath);
			});
		} else {
			// 存在していない場合
		}
	});


}

