export const formatDate = (dateString) => {
  // Ensure the input is a valid date string
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    throw new Error("Invalid date format. Expected format: YYYY-MM-DD");
  }

  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date provided.");
  }

  const options = { month: "short", year: "numeric" };

  // Format the date
  return date.toLocaleDateString("en-US", options);
};
