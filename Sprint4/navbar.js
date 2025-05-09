fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Optional: highlight current page
      const path = window.location.pathname.split("/").pop();
      const links = document.querySelectorAll(".topnav a");
      links.forEach(link => {
        if (link.getAttribute("href") === path) {
          link.classList.add("active");
        }
      });
    });