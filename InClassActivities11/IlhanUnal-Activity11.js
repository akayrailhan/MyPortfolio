$(document).ready(function() {
    $("#nav_list a").click(function(evt) {
        var title = $(this).attr("title");
        
        $.getJSON("json_files/" + title + ".json", function(data) {
            var speaker = data.speakers[0];  
            
            $("main h1").html(speaker.title);
            $("main h2").html(speaker.month + "<br>" + speaker.speaker);
            $("main img").attr("src", speaker.image);
            $("main p").html(speaker.text);
        });
        
        evt.preventDefault(); 
    });
}); 