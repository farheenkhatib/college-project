document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.para h1');

    headings.forEach(function(heading) {
        heading.addEventListener('click', function() {
            const paragraph = this.nextElementSibling;
            paragraph.classList.toggle('show');
        });
    });
});


