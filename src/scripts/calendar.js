document.addEventListener('DOMContentLoaded', function() {
    // Retrieve period history from localStorage
    const savedData = JSON.parse(localStorage.getItem('periodHistory')) || [];
    const events = savedData.map(period => ({
        title: 'Period',
        start: period.startDate,
        end: period.endDate,
        color: 'lightpink', // Highlight color for periods
    }));

    // Initialize FullCalendar
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        initialView: 'dayGridMonth',
        events: events,
        eventColor: 'lightpink',
    });

    calendar.render();

});
