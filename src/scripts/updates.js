document.addEventListener('DOMContentLoaded', () => {
    // Retrieve period history from localStorage
    const periodHistory = JSON.parse(localStorage.getItem('periodHistory')) || [];

    // Check if there's any period data available
    if (periodHistory.length > 0) {
        // Find the most recent end date in the period history
        let latestEndDate = new Date(periodHistory[0].endDate);

        periodHistory.forEach(period => {
            const endDate = new Date(period.endDate);
            if (endDate > latestEndDate) {
                latestEndDate = endDate;
            }
        });

        // Assuming an average cycle length of 28 days
        const averageCycleLength = 28;

        // Calculate the next predicted period date
        const nextPeriodDate = new Date(latestEndDate);
        nextPeriodDate.setDate(nextPeriodDate.getDate() + averageCycleLength);

        // Display the predicted date on the page
        const predictionElement = document.getElementById('prediction');
        predictionElement.textContent = `Your next period is expected to start on ${nextPeriodDate.toDateString()}.`;
    } else {
        // If there's no data, display a message
        const predictionElement = document.getElementById('prediction');
        predictionElement.textContent = 'No period data available to predict your next period.';
    }
});


