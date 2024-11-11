document.addEventListener('DOMContentLoaded', function () {
    const reportBtn = document.querySelector('.report-btn');
    
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
    });
});
