// src/scripts/app.js

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
