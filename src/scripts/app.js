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
    savedData.forEach((period, index) => {
        addPeriodToHistory(period, index);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        
        if (startDate && endDate) {
            const periodData = { startDate, endDate };
            const existingData = JSON.parse(localStorage.getItem('periodHistory')) || [];
            existingData.push(periodData);
            localStorage.setItem('periodHistory', JSON.stringify(existingData));
            addPeriodToHistory(periodData, existingData.length - 1);

            form.reset();
        } else {
            alert('Please fill in both dates.');
        }
    });

    function addPeriodToHistory(period, index) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `From ${period.startDate} to ${period.endDate} 
            <button onclick="editPeriod(${index})">Edit</button>
            <button onclick="deletePeriod(${index})">Delete</button>`;
        historyList.appendChild(listItem);
    }

    window.editPeriod = (index) => {
        const savedData = JSON.parse(localStorage.getItem('periodHistory'));
        const period = savedData[index];
        document.getElementById('start-date').value = period.startDate;
        document.getElementById('end-date').value = period.endDate;

        deletePeriod(index);
    };

    window.deletePeriod = (index) => {
        let savedData = JSON.parse(localStorage.getItem('periodHistory'));
        savedData.splice(index, 1);
        localStorage.setItem('periodHistory', JSON.stringify(savedData));
        historyList.innerHTML = ''; // Clear the list
        savedData.forEach((period, i) => addPeriodToHistory(period, i)); // Re-render the list
    };
});


