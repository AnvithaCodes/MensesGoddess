document.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem('periodHistory')) || [];

    const calendarEl = document.getElementById('calendar');

    // Add basic HTML structure for the calendar
    calendarEl.innerHTML = `
        <div class="calendar-grid">
            ${generateCalendar()}
        </div>
    `;

    if (savedData.length > 0) {
        savedData.forEach(period => {
            const startDate = new Date(period.startDate);
            const endDate = new Date(period.endDate);
            const currentDate = new Date(startDate);

            while (currentDate <= endDate) {
                highlightDate(currentDate);
                currentDate.setDate(currentDate.getDate() + 1);
            }
        });
    }

    function highlightDate(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based
        const year = date.getFullYear();

        const cell = document.querySelector(`.day-${year}-${month}-${day}`);
        if (cell) {
            cell.classList.add('highlighted');
        }
    }

    function generateCalendar() {
        // Generate a simple calendar structure
        // This example is a placeholder; you might need a library or more complex logic for a full calendar
        let html = '';
        for (let day = 1; day <= 31; day++) {
            html += `<div class="calendar-day day-${new Date().getFullYear()}-${new Date().getMonth() + 1}-${day}">${day}</div>`;
        }
        return html;
    }
});