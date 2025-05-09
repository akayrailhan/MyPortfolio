$(document).ready(function () {
    let programs = {};

    // Load JSON once when page is ready
    $.getJSON("json.json", function (data) {
        // Create a map with titles as keys for easy lookup
        data.educationPrograms.forEach(program => {
            programs[program.title] = program;
        });
    });

    // Button click handler
    $(".button").click(function () {
        const title = $(this).data("title");
        const program = programs[title];

        if (program) {
            $("#service-title").text(program.title);
            $("#service-image").attr("src", program.image).attr("alt", program.title);
            $("#service-description").html(program.description.replace(/\n/g, "<br>"));
        }
    });
});

$.ajax({
    url: "https://api.github.com/search/repositories?q=sort=stars&order=desc",
    method: "GET",
    dataType: "json",
    success: function (response) {
        console.log(response);
      const topRepo = response.items[0];
      const name = topRepo.full_name;
      const stars = topRepo.stargazers_count.toLocaleString();
      const url = topRepo.html_url;
      const description = topRepo.description;
  
      $("#github-stats").html(
        `🌟 Most Starred GitHub Repo: 
        <a href="${url}" target="_blank" style="color: #7531ad; text-decoration: underline;">
          ${name}
        </a> – ⭐ ${stars} stars<br>`
        
      );
    },
    error: function () {
      $("#github-stats").text("Couldn't load top GitHub repository.");
    }
      });


