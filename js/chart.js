//DECLARE GLOBAL VARIABLES
var GV, CHT, DATA, DT;

function drawChart(){
	GV = google.visualization;
	
	//CALL AJAX
	$.ajax( {
	    data : {
	        POST_TYPE : "GET_DEFAULTERS_COLUMN_DATATABLE"
	    },
	    success : function(res){
				res = JSON.parse(res);
				DATA = res;
				if( DATA.error ){
					alert( "Chart Cannot be displayed" );
					return;
				}
				DT = new GV.DataTable( DATA.DATATABLE );
				$("body").append(DT.toJSON());
				CHT = new GV.ColumnChart( document.getElementById("MY_CHART") );
				CHT.draw( DT, {
					title : "Student Payment Overview",
					annotations : {
						alwaysOutside : true
					},
					legend : "bottom"
				} );
				GV.events.addListener( CHT, "select", function(e){
					var el = CHT.getSelection();
					alert( JSON.stringify(el) );
					var dt = DT.getValue( el[0].row, el[0].column-1 );
					alert( JSON.stringify(dt) );
				} );
	    }
	});
}


//EVENTS
$(document).on( "click", "#PRINT_BTN", function(){
	printJS({
		printable : CHT.getImageURI(),
		type : "image",
		showModal : true
	});
} );
$(document).on( "click", "#printClose", function(ev){
	ev.preventDefault();
	$("#printJS-Modal").remove();
} );
