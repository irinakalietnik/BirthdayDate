function inputValueDate() {
  var inputBirthdayDate = document.getElementById("birthday").value;
  let dateParseArr = inputBirthdayDate.split("-");

  return (function daysUntilBirthday() {
    setInterval(daysUntilBirthday, 1000);
    const year = +dateParseArr[0];
    const month = +dateParseArr[1];
    const day = +dateParseArr[2];

    const date = new Date(year, month - 1, day);

    let now = new Date();
    let thisYearBirthday = new Date(
      now.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let days = 0;
    if (thisYearBirthday > now) {
      days = (thisYearBirthday - now) / (24 * 60 * 60 * 1000);
      hours = ((thisYearBirthday - now) / (60 * 60 * 1000)) % 24;
      minutes = ((thisYearBirthday - now) / (60 * 1000)) % 60;
      seconds = ((thisYearBirthday - now) / 1000) % 60;
    } else if (thisYearBirthday < now) {
      thisYearBirthday.setFullYear(thisYearBirthday.getFullYear() + 1);
      days = (thisYearBirthday - now) / (24 * 60 * 60 * 1000);
      hours = (thisYearBirthday - now) / (60 * 60 * 1000);
      minutes = (thisYearBirthday - now) / (60 * 1000);
      seconds = ((thisYearBirthday - now) / 1000) % 60;
      console.log(hours);
    }

    document.getElementById("day").textContent = `${Math.ceil(days)
      .toString()
      .padStart(2, "0")}`;
    document.getElementById("hour").textContent = `${Math.ceil(hours)
      .toString()
      .padStart(2, "0")}`;
    document.getElementById("minute").textContent = `${Math.ceil(minutes)
      .toString()
      .padStart(2, "0")}`;
    document.getElementById("second").textContent = `${Math.ceil(seconds)
      .toString()
      .padStart(2, "0")}`;
  })();
}
