$(document).ready(function () {
  // Load navbar once
  $("#navbar-holder").load("Partials/Navbar.html", function () {
    const collapseEl = document.getElementById("navbarSupportedContent");
    let bsCollapse = null;

    // Initialize Bootstrap collapse
    if (collapseEl) {
      bsCollapse = new bootstrap.Collapse(collapseEl, {
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

    // Handle navbar clicks (SPA navigation + active state)
    $(document).on("click", ".navbar-nav [data-page]", function (e) {
      e.preventDefault();

      const page = $(this).data("page");

      setActiveLink(page);
      loadPage(page);
    });

    // Load default page
    const defaultPage = "About";
    loadPage(defaultPage);
    setActiveLink(defaultPage);
  });

  // Load footer once
  $("#footer-holder").load("Partials/Footer.html");
});

// Set active navbar link
function setActiveLink(page) {
  document
    .querySelectorAll(".navbar-nav .nav-link")
    .forEach((link) => link.classList.remove("active"));

  const activeLink = document.querySelector(
    `.navbar-nav [data-page="${page}"]`
  );

  if (activeLink) {
    activeLink.classList.add("active");
  }
}

// Load content pages
function loadPage(page) {
  $("#content").fadeOut(150, function () {
    $("#content").load(`Content/${page}.html`, function () {
      $("#content").fadeIn(150);
    });
  });
}
