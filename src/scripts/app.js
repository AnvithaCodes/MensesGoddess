// src/scripts/app.js
/*
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('period-form');
    const historyList = document.getElementById('history-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        
        if (startDate && endDate) {
            const listItem = document.createElement('li');
            listItem.textContent = `From ${startDate} to ${endDate}`;
            historyList.appendChild(listItem);

            form.reset();
        } else {
            alert('Please fill in both dates.');
        }
    });
});

// Save data to localStorage
localStorage.setItem('periodHistory', JSON.stringify(periodData));

// Retrieve data from localStorage
const savedData = JSON.parse(localStorage.getItem('periodHistory')); */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('period-form');
    const historyList = document.getElementById('history-list');
    const calendarEl = document.getElementById('calendar');

    // Initialize FullCalendar
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'month',
        events: getSavedPeriodEvents(), // Function to get period data from localStorage
    });

    calendar.render();

    function getSavedPeriodEvents() {
        try {
            const savedData = JSON.parse(localStorage.getItem('periodHistory')) || [];
            return savedData.map(period => ({
                start: period.startDate,
                end: period.endDate,
                backgroundColor: 'lightpink',
                borderColor: 'lightpink',
            }));
        } catch (error) {
            console.error('Error loading period events from localStorage:', error);
            return [];
        }
    }

    // Load saved data from localStorage and display it
    const savedData = JSON.parse(localStorage.getItem('periodHistory')) || [];
    savedData.forEach(period => {
        const listItem = document.createElement('li');
        listItem.textContent = `From ${period.startDate} to ${period.endDate}`;
        historyList.appendChild(listItem);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        
        if (startDate && endDate) {
            // Create a new list item for the history
            const listItem = document.createElement('li');
            listItem.textContent = `From ${startDate} to ${endDate}`;
            historyList.appendChild(listItem);
            
            // Save the period data to localStorage
            const periodData = { startDate, endDate };
            const existingData = JSON.parse(localStorage.getItem('periodHistory')) || [];
            existingData.push(periodData);
            localStorage.setItem('periodHistory', JSON.stringify(existingData));

            // Update the calendar with new data
            calendar.addEvent({
                start: startDate,
                end: endDate,
                backgroundColor: 'lightpink',
                borderColor: 'lightpink'
            });

            // Clear the form inputs
            form.reset();
        } else {
            alert('Please fill in both dates.');
        }
    });
});
