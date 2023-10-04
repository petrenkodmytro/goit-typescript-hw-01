import { concatenation } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
var Days;
(function (Days) {
    Days[Days["MONDAY"] = 0] = "MONDAY";
    Days[Days["TUESDAY"] = 1] = "TUESDAY";
    Days[Days["WEDNESDAY"] = 2] = "WEDNESDAY";
    Days[Days["THURSDAY"] = 3] = "THURSDAY";
    Days[Days["FRIDAY"] = 4] = "FRIDAY";
    Days[Days["SATURDAY"] = 5] = "SATURDAY";
    Days[Days["SUNDAY"] = 6] = "SUNDAY";
})(Days || (Days = {}));
function isWeekend(day) {
    if (day === Days.SATURDAY || day === Days.SUNDAY) {
        return true;
    }
    else {
        return false;
    }
}
const today = Days.FRIDAY;
console.log(isWeekend(today));
//# sourceMappingURL=index.js.map