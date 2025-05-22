document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const dateInput = document.getElementById("date");

  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);
});
