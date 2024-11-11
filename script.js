document.addEventListener('DOMContentLoaded', function () {
    const reportBtn = document.querySelector('.report-btn');
    
    // Zoom functionality (using basic CSS scaling)
    let scale = 1;
    const zoomInView = document.getElementById('zoomed-in-view');
    
    zoomInView.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0 && scale < 2) {
            scale += 0.1;
        } else if (e.deltaY > 0 && scale > 1) {
            scale -= 0.1;
        }
        zoomInView.style.transform = `scale(${scale})`;
    });

    reportBtn.addEventListener('click', () => {
        alert('Generating report...');
        // Logic to generate report (e.g., downloading a PDF or opening a modal)
    });
});
