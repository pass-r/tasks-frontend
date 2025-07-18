/**
 * Returns the date as a string
 *
 * @param {Date} dueDate - A Date object
 * @returns {string} A string in the format: "Yesterday", "Today", "Tomorrow", "April 20", "Mai 21, 2024" (Year is only added if different from current)
 */
export function getDateAsString(dueDate) {
  // if dueDate is 'null' return 'null'
  if (!dueDate) return dueDate;
  dueDate.setHours(0, 0, 0, 0);

  // helper function
  const checkSameDay = (day1, day2) => day1.getTime() === day2.getTime();
  const dateAtMidnight = (date) => {
    date.setHours(0, 0, 0, 0);
    return date;
  };

  // is dueDate TODAY?
  const today = dateAtMidnight(new Date());
  if (checkSameDay(dueDate, today)) return "Today";

  // is dueDate TOMORROW?
  const tomorrow = dateAtMidnight(
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
  );
  if (checkSameDay(dueDate, tomorrow)) return "Tomorrow";

  // was dueDate YESTERDAY?
  const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
  if (checkSameDay(dueDate, yesterday)) return "Yesterday";

  // this YEAR?
  const options = {
    month: "long",
    day: "2-digit",
    ...(today.getFullYear() !== dueDate.getFullYear() && { year: "numeric" }),
  };
  return dueDate.toLocaleString("en-US", options);
}

/**
 * Returns todays date as a string
 *
 * @returns {string} A string in the format: "April 20"
 */
export function getDateTodayAsString() {
  const dateAtMidnight = (date) => {
    date.setHours(0, 0, 0, 0);
    return date;
  };

  const today = dateAtMidnight(new Date());

  const options = {
    month: "long",
    day: "2-digit",
  };
  return today.toLocaleString("en-US", options);
}

/**
 * Returns the date as a string in the format yyyy-mm-dd
 * (required by the input tag (type date))
 *
 * @param {Date} date - A Date object
 * @returns {string} A string in the format: yyyy-mm-dd
 */
export function formatDateForInput(date) {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
