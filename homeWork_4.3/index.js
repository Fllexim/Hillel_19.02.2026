const userBirthYear = prompt("Ваш рік народження:");
if (userBirthYear === null) {
  alert("Шкода, що Ви не захотіли ввести свій рік народження :(");
}
let userCity = prompt("Ваше місто:");
if (userCity === null) {
  alert("Шкода, що Ви не захотіли ввести своє місто :(");
} else {
  userCity = userCity.toLowerCase();
}
let userFavoriteSport = prompt("Ваш улюблений вид спорту:");
if (userFavoriteSport === null) {
  alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту :(");
} else {
  userFavoriteSport = userFavoriteSport.toLowerCase();
}

const currentYear = new Date().getFullYear();
let userAge = currentYear - +userBirthYear;
if (userAge == 2026) {
  userAge = "**";
}

let capitalCountry;
if (userCity === null) {
  capitalCountry = "***";
} else {
  switch (userCity) {
    case "київ":
      capitalCountry = "столиці України";
      break;
    case "вашингтон":
      capitalCountry = "столиці США";
      break;
    case "лондон":
      capitalCountry = "столиці Англії";
      break;

    default:
      capitalCountry = `місті - ${userCity[0].toUpperCase() + userCity.slice(1)}`;
  }
}

let championsName;
if (userFavoriteSport === null) {
  championsName = "а улюблений вид спорту - ***";
} else {
  switch (userFavoriteSport) {
    case "плавання":
      championsName =
        "а улюблений вид спорту - плавання. Круто! Хочеш стати Майклом Фелпсом?";
      break;
    case "футбол":
      championsName =
        "а улюблений вид спорту - футбол. Круто! Хочеш стати Ліонелем Мессі?";
      break;
    case "бокс":
      championsName =
        "а улюблений вид спорту - бокс. Круто! Хочеш стати Олександром Усиком?";
      break;

    default:
      championsName = `а улюблений вид спорту - ${userFavoriteSport}`;
  }
}

alert(`Тобі ${userAge}, ти народився в ${capitalCountry}, ${championsName}`);
