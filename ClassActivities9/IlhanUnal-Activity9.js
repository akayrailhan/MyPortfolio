$(document).ready(function() {
	-    $("#image_list a").each(function() {
			var swappedImage = new Image();
			swappedImage.src = $(this).attr("href");
		});
		  
		$("#image_list a").click(function(evt) {
			var imageHref = $(this).attr("href");
			var captionText = $(this).attr("title");
			
			$("#image").fadeOut(1000, function() {
				
				$("#image").attr("src", imageHref).fadeIn(1000);
				
				$("#caption").text(captionText).fadeIn(1000);
			});
			
			$("#caption").fadeOut(1000);
			
			evt.preventDefault();
		});
		
		$("li:first-child a").focus();
	});