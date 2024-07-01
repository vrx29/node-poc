// Get all dates from week
function getAllDates(startDate, endDate) {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let dates = [];

  // Loop from start date to end date
  while (start <= end) {
    // Convert date to "YYYY-MM-DD" format and add to array
    let year = start.getFullYear();
    let month = (start.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    let day = start.getDate().toString().padStart(2, '0');
    dates.push(`${year}-${month}-${day}`);

    // Move to the next date
    start.setDate(start.getDate() + 1);
  }

  return dates;
}

// Example usage
let startDate = '2023-07-25';
let endDate = '2023-08-02';
let allDates = getAllDates(startDate, endDate);
console.log(allDates); // ["2023-07-01", "2023-07-02", "2023-07-03", "2023-07-04", "2023-07-05"]




