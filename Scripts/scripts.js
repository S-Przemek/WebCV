$(document).ready(function () {
  // Load navbar once
  $("#navbar-holder").load("Partials/Navbar.html", function () {
    const collapseEl = document.getElementById("navbarSupportedContent");

    // Initialize Bootstrap collapse
    if (collapseEl) {
      const bsCollapse = new bootstrap.Collapse(collapseEl, {
        toggle: false,
      });

      // Auto-collapse navbar on link click
      document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          if (collapseEl.classList.contains("show")) {
            bsCollapse.hide();
          }
        });
      });
    }

    // Handle navbar clicks (SPA navigation)
    $(document).on("click", "[data-page]", function (e) {
      e.preventDefault();
      const page = $(this).data("page");
      loadPage(page);
    });

    // Load default page
    loadPage("About");
  });
});

// Load content pages
function loadPage(page) {
  $("#content").fadeOut(150, function () {
    $("#content").load(`Content/${page}.html`, function () {
      $("#content").fadeIn(150);
    });
  });
}
