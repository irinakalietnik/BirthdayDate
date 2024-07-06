function inputValueDate() {
  var inputBirthdayDate = document.getElementById("birthday").value;
  let dateParseArr = inputBirthdayDate.split(".");
  const year = +dateParseArr[2];
  const month = +dateParseArr[1];
  const day = +dateParseArr[0];
  if (
    dateParseArr.length !== 3 ||
    dateParseArr[2].length !== 4 ||
    dateParseArr[1].length !== 2 ||
    dateParseArr[0].length !== 2
  )
    return alert("Некоректний ввід даних!");

  const date = new Date(year, month - 1, day);
  if (
    year !== date.getFullYear() ||
    month !== date.getMonth() + 1 ||
    day !== date.getDate()
  ) {
    return alert("Некоректний ввід даних!");
  }

  return (function daysUntilBirthday() {
    setInterval(daysUntilBirthday, 1000);

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
      days = (thisYearBirthday - now) / 24 / 60 / 60 / 1000;
      hours = ((thisYearBirthday - now) / 60 / 60 / 1000) % 24;
      minutes = ((thisYearBirthday - now) / 60 / 1000) % 60;
      seconds = ((thisYearBirthday - now) / 1000) % 60;
      console.log(thisYearBirthday);
    } else if (thisYearBirthday < now) {
      thisYearBirthday.setFullYear(thisYearBirthday.getFullYear() + 1);
      console.log(thisYearBirthday);
      days = (thisYearBirthday - now) / 24 / 60 / 60 / 1000;
      hours = ((thisYearBirthday - now) / 60 / 60 / 1000) % 24;
      minutes = ((thisYearBirthday - now) / 60 / 1000) % 60;
      seconds = ((thisYearBirthday - now) / 1000) % 60;
    }
    console.log(minutes);
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
