import { concatenation } from "./concatenation";

const button = document.querySelector("button");
const input = document.querySelector("input");

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}

enum Days {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: Days): boolean {
  if (day === Days.SATURDAY || day === Days.SUNDAY) {
    return true;
  } else {
    return false;
  }
}

const today = Days.FRIDAY;
console.log(isWeekend(today));