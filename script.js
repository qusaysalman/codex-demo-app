const timeButton = document.querySelector("#time-button");
const timeDisplay = document.querySelector("#time-display");

const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
});

timeButton.addEventListener("click", () => {
  timeDisplay.textContent = `It’s ${timeFormatter.format(new Date())}.`;
});
