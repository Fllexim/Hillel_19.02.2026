const dateDiv = document.querySelector(".date");
const oclockDiv = document.querySelector(".oclock");
const humidityDiv = document.querySelector(".humidity");
const pressureDiv = document.querySelector(".pressure");
const windDiv = document.querySelector(".wind");
const iconDiv = document.querySelector(".icon");
const tempDiv = document.querySelector(".temp");
const feelsLikeDiv = document.querySelector(".feels-like");
const btnUpdate = document.querySelector("button");

function getWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=50.45&lon=30.52&appid=b4958f30509ecec26b1f766f5062a2ab&lang=uk&units=metric"
  )
    .then((response) => response.json())
    .then((results) => {
      const date = new Date(results.dt * 1000);

      const formattedDate = date.toLocaleDateString("uk-UA", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "Europe/Kyiv",
      });

      const weekday = date
        .toLocaleDateString("uk-UA", {
          weekday: "short",
          timeZone: "Europe/Kyiv",
        })
        .toUpperCase();

      dateDiv.textContent = `${formattedDate} - ${weekday}`;

      const time = date.toLocaleTimeString("uk-UA", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Kyiv",
      });

      oclockDiv.textContent = time;

      tempDiv.textContent = `${Math.round(results.main.temp)}°C`;

      feelsLikeDiv.textContent = `Feels like: ${Math.round(
        results.main.feels_like
      )}°C`;

      humidityDiv.textContent = `Humidity: ${results.main.humidity}%`;

      pressureDiv.textContent = `Pressure: ${results.main.pressure} hPa`;

      windDiv.textContent = `Wind: ${results.wind.speed} m/s`;

      const icon = results.weather[0].icon;
      iconDiv.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    })
    .catch((error) => {
      console.log("Ошибка:", error);
    });
}

getWeather();

btnUpdate.addEventListener("click", () => {
  getWeather();
});