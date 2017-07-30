
$.ajax({
		url: 'data.json',
		type: 'GET',
		dataType: 'JSON',
	})
	.done(function(r) {
		console.log(r);
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});