function loadGraph() {
	var chart = new CanvasJS.Chart("chartContainer", {
		title: {
			text: "Processing Time",
			fontSize: 30
		},
		data: [
		{
			indexLabelFontSize: 18,
			type: "column",
			dataPoints: [
			{ label: "Android", y: processingTime.android, indexLabel: "{y} sec" },
			{ label: "Cloud", y: processingTime.cloud, indexLabel: "{y} sec"}
			]
		}
		],
		axisX: {
			labelFontSize: 18	
		},
	    axisY:{
			labelFontSize: 18,
	        suffix: " sec"
	    }    
	});
	chart.render();
}