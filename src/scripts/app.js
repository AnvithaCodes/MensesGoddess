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

    // Function to render the history in chronological order
    function renderHistory(data) {
        historyList.innerHTML = ''; // Clear the existing list
        data.sort((a, b) => new Date(a.startDate) - new Date(b.startDate)); // Sort by start date

        data.forEach((period, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `From ${period.startDate} to ${period.endDate}`;

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editPeriod(index));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deletePeriod(index));

            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);

            historyList.appendChild(listItem);
        });
    }

    // Load saved data from localStorage and display it
    const savedData = JSON.parse(localStorage.getItem('periodHistory')) || [];
    renderHistory(savedData);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        
        if (startDate && endDate) {
            // Save the period data to localStorage
            const periodData = { startDate, endDate };
            const existingData = JSON.parse(localStorage.getItem('periodHistory')) || [];
            existingData.push(periodData);
            localStorage.setItem('periodHistory', JSON.stringify(existingData));

            // Render the updated history
            renderHistory(existingData);

            // Clear the form inputs
            form.reset();
        } else {
            alert('Please fill in both dates.');
        }
    });

    // Edit period entry
    function editPeriod(index) {
        const existingData = JSON.parse(localStorage.getItem('periodHistory'));
        const period = existingData[index];

        document.getElementById('start-date').value = period.startDate;
        document.getElementById('end-date').value = period.endDate;

        // Remove the old entry and update localStorage
        existingData.splice(index, 1);
        localStorage.setItem('periodHistory', JSON.stringify(existingData));

        // Render the updated history
        renderHistory(existingData);
    }

    // Delete period entry
    function deletePeriod(index) {
        const existingData = JSON.parse(localStorage.getItem('periodHistory'));
        existingData.splice(index, 1);
        localStorage.setItem('periodHistory', JSON.stringify(existingData));

        // Render the updated history
        renderHistory(existingData);
    }
});

