document.addEventListener('DOMContentLoaded', () => {
    // Retrieve period history from localStorage
    const periodHistory = JSON.parse(localStorage.getItem('periodHistory')) || [];

    // Check if there's any period data available
    if (periodHistory.length > 0) {
        // Get the most recent period (last entry in the array)
        const lastPeriod = periodHistory[periodHistory.length - 1];
        const lastEndDate = new Date(lastPeriod.endDate);

        // Assuming an average cycle length of 28 days
        const averageCycleLength = 28;

        // Calculate the next predicted period date
        const nextPeriodDate = new Date(lastEndDate);
        nextPeriodDate.setDate(nextPeriodDate.getDate() + averageCycleLength);

        // Display the predicted date on the page
        const predictionElement = document.getElementById('prediction');
        predictionElement.textContent = `Your next period is expected to start on ${nextPeriodDate.toDateString()}.`;
    } else {
        // If there's no data, display a message
        const predictionElement = document.getElementById('prediction');
        predictionElement.textContent = 'No period data is available to predict your next period.';
    }
});

