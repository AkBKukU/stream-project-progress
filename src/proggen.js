function loadJSON(callback)
{
	var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
	xobj.open('GET', 'goal.json', true); // Replace 'my_data' with the path to your file
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}

function init()
{
	loadJSON(function(response) {
		// Parse JSON string into object
		var actual_JSON = JSON.parse(response);
		initProgress(actual_JSON)
		updateProgess();
	});
}

function initProgress(project)
{
	table = document.getElementById("goals")
	for (i = 0; i < project.goals.length; i++) {
		var tr = document.createElement('TR');
		var td = document.createElement('TD')
		td.appendChild(document.createTextNode(project.goals[project.goals.length-1-i]));
		tr.appendChild(td)
		table.appendChild(tr);
	}

}

function updateProgess()
{
	loadJSON(function(response) {
		// Parse JSON string into object
		var project = JSON.parse(response);
		var percent = ((100 / (project.goals.length))*project.progress)+(100 / (project.goals.length))/2;
		var dom = document.getElementById('progress');
		var gradient = 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) ' + (100- percent - 5) + '%,#8f0222 '+(100-percent)+'%,#e50003 100%)';

		dom.style.background = gradient;
	});

}

init();
setInterval(updateProgess, 1000);
