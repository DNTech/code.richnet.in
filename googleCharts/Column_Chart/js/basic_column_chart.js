//Declaring Global Variables
var GV, CHT, DT, OPT;

function drawChart(){
	
	GV = google.visualization;

	//Create DataTable Object
	DT = new GV.DataTable();

	//Add Two Columns
	DT.addColumn({
		type : "string",
		label : "SUBJECTS"
	});
	DT.addColumn({
		type : "number",
		label : "MARKS"
	});

	//Add Multiple Rows
	DT.addRows( [
		[ "Physics", 88 ],
		[ "Chemistry", 65 ],
		[ "Mathematics", 96 ],
		[ "Computer", 99 ],
		[ "English", 89 ],
		[ "Arabic", 98 ]
	] );

	//Create Options
	OPT = {
		title : "MARKS REPORT",
		legend : "bottom",
		height : 400
	};

	//Create a Column chart and assign a DIV element via ID
	CHT = new GV.ColumnChart( document.getElementById("MY_CHART") );

	//Draw the Chart by passing DT (DataTable) and OPT (Options)
	CHT.draw( DT, OPT );

}
