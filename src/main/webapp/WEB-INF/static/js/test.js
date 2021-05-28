$(document).ready(function() {
	$("#main-table").css('background-color', 'yellow');

	var showData = $("#showData");
	console.log(showData)
	$(showData).click(function() {
		getData();
	})
	function getData() {
		$.get("/test", function(data) {
		$(".result1").html(data);
		alert("Load was performed.");
	});
	}
});