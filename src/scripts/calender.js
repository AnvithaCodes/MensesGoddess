document.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem('periodHistory')) || [];

    const calendarEl = document.getElementById('calendar');

    if (savedData.length > 0) {
        // Iterate through saved data and highlight the corresponding dates
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
});
