// script.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Dashboard Loaded");

    // Select all sidebar links
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    const pages = document.querySelectorAll(".page");

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const page = this.getAttribute("data-page");

            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            // Hide all pages
            pages.forEach(p => p.classList.add("hidden"));

            // Show the selected page
            const activePage = document.getElementById(`${page}-page`);
            if (activePage) {
                activePage.classList.remove("hidden");
            }
        });
    });
    

    // Show dashboard by default
    document.getElementById("dashboard-page").classList.remove("hidden");
    document.querySelectorAll('.sidebar-link').forEach(link => {
     link.addEventListener('click', (event) => {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
        
        // Remove active class from all sidebar links
        document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));

        // Show the clicked page
        const page = document.querySelector(`#${link.dataset.page}-page`);
        page.classList.remove('hidden');
        
        // Add active class to the clicked link
        link.classList.add('active');
     });
 });

});

