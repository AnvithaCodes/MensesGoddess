// src/scripts/app.js

/* document.addEventListener('DOMContentLoaded', () => {
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

/* document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('period-form');
    const historyList = document.getElementById('history-list');

    // Load saved data from localStorage and display it
    const savedData = JSON.parse(localStorage.getItem('periodHistory')) || [];
    savedData.forEach(period => {
        const listItem = document.createElement('li');
        listItem.textContent = From ${period.startDate} to ${period.endDate};
        historyList.appendChild(listItem);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        
        if (startDate && endDate) {
            // Create a new list item for the history
            const listItem = document.createElement('li');
            listItem.textContent = From ${startDate} to ${endDate};
            historyList.appendChild(listItem);
            
            // Save the period data to localStorage
            const periodData = { startDate, endDate };
            const existingData = JSON.parse(localStorage.getItem('periodHistory')) || [];
            existingData.push(periodData);
            localStorage.setItem('periodHistory', JSON.stringify(existingData));

            // Clear the form inputs
            form.reset();
        } else {
            alert('Please fill in both dates.');
        }
    });
}); */

/*
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('period-form');
    const historyList = document.getElementById('history-list');

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

            // Clear the form inputs
            form.reset();
        } else {
            alert('Please fill in both dates.');
        }
    });
}); */

// src/scripts/app.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('period-form');
    const historyList = document.getElementById('history-list');

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

            // Clear the form inputs
            form.reset();
        } else {
            alert('Please fill in both dates.');
        }
    });
});

