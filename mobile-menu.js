document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const headerRightSide = document.getElementById('header-right-side');

    mobileNavToggle.addEventListener('click', () => {
        const isVisible = headerRightSide.getAttribute('data-visible');

        if (isVisible === "false") {
            headerRightSide.setAttribute('data-visible', "true");
            mobileNavToggle.setAttribute('aria-expanded', "true");
        } else {
            headerRightSide.setAttribute('data-visible', "false");
            mobileNavToggle.setAttribute('aria-expanded', "false");
        }
    });
});