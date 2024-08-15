document.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem('periodHistory')) || [];
    
    if (savedData.length > 0) {
        const lastPeriod = savedData[savedData.length - 1];
        const lastPeriodEndDate = new Date(lastPeriod.endDate);

        // Assuming a 28-day cycle for prediction
        const nextPeriodDate = new Date(lastPeriodEndDate);
        nextPeriodDate.setDate(nextPeriodDate.getDate() + 28);

        document.getElementById('next-period-date').textContent = nextPeriodDate.toDateString();
    } else {
        document.getElementById('next-period-date').textContent = "Input your last period date to predict the next date";
    }
});
