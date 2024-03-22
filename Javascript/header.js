// document.getElementById('navbar-toggle').addEventListener('click', function () {
//     var navbarLinks = document.getElementById('navbar-links');
//     navbarLinks.classList.toggle('active');
// });
// document.getElementById('plusicon').addEventListener('click', function () {
//     var submenu = document.getElementById('DropDown');
//     submenu.classList.toggle('active');
// })
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarLinks = document.getElementById('navbar-links');

    navbarToggle.addEventListener('click', function () {
        navbarLinks.classList.toggle('active');
    });

    const dropdownToggles = document.querySelectorAll('.plusicon');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (event) {
            event.stopPropagation();
            const dropdown = this.parentElement.querySelector('.DropDown');
            dropdown.classList.toggle('active');
        });
    });

    document.addEventListener('click', function (event) {
        dropdownToggles.forEach(toggle => {
            const dropdown = toggle.parentElement.querySelector('.DropDown');
            if (!toggle.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
});
