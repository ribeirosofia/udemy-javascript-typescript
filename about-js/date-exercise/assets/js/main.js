const pageTitle = document.querySelector(".page-title");
const date = new Date();

// native solution
//  pageTitle.innerHTML = date.toLocaleDateString("pt-BR", {
//   dateStyle: "full",
// });

// alternative solution

const getDayWeekText = (dayWeek) => {
  const daysWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return daysWeek[dayWeek];
};

const getMonthName = (monthNumber) => {
  const month = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return month[monthNumber];
};

const leftZeros = (num) => {
  return num >= 10 ? num : `0${num}`;
};

const createDate = (date) => {
  const dayWeek = date.getDay();
  const monthNumber = date.getMonth();

  const dayName = getDayWeekText(dayWeek);
  const monthName = getMonthName(monthNumber);

  return (
    `${dayName}, ${date.getDate()} de ${monthName}` +
    ` de ${date.getFullYear()}, ${leftZeros(date.getHours())}:${leftZeros(
      date.getMinutes()
    )}:${leftZeros(date.getSeconds())}`
  );
};

pageTitle.innerHTML = createDate(date);
