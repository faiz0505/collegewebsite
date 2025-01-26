export const formatTime = (time) => {
  if (!/^\d{2}:\d{2}$/.test(time)) {
    throw new Error(
      "Invalid time format. Expected format: HH:MM (24-hour format)"
    );
  }

  const [hourStr, minuteStr] = time.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  const isPM = hour >= 12;
  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
  }

  const period = isPM ? "PM" : "AM";

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(
    2,
    "0"
  )}${period}`;
};
