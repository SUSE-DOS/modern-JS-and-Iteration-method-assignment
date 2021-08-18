/* This array represents a weekly weather forecast.
  Each object in the array represents a day in the week.

  Below are exercises which use this array for modern javascript
  and iteration methods practice.

  Please don't change weeklyForecast array.
*/

const weeklyForecast = [
  { day: "Monday", temperature: 20, cloudCoverage: "broken", wind: 16 },
  { day: "Thuesday", temperature: 22, cloudCoverage: "few", wind: 10 },
  { day: "Wednesday", temperature: 26, cloudCoverage: "clear", wind: 5 },
  { day: "Thursday", temperature: 24, cloudCoverage: "clear", wind: 5 },
  { day: "Friday", temperature: 24, cloudCoverage: "few", wind: 18 },
  { day: "Saturday", temperature: 19, cloudCoverage: "broken", wind: 25 },
  { day: "Sunday", temperature: 17, cloudCoverage: "overcast", wind: 30 }
];

/* Map 

In weeklyForecast array, the temperature properties are in Celcius
Please write an arrow function which takes weeklyForecast as an argument and returns a new array. The new array should include day objects like in
weeklyForecast array but the temperature value should be converted to Faherenheit.

the value of the first item in the new array should be 

{day: "Monday", temperature: 68, cloudCoverage: "broken", wind: 16}

The formula for converting Celcius to Faherenheit is: 
Divide by 5, then multiply by 9, then add 32

*/
const fahrenheitForecast = weeklyForecast.map((n) => ({
  day: n.day,
  temperature: (n.temperature / 5) * 9 + 32,
  cloudCoverage: n.cloudCoverage,
  wind: n.wind
}));
console.log(fahrenheitForecast);

/* Filter

  We would like to know which days of the week are sunny. 
  Please write an arrow function which accepts weeklyForecast as an argument and returns an array of day obejcts. It should only contain days
  where cloud coverage is "clear" or "few". 

  when successful the return value should looks like this:

  [
    {day: "Thuesday", temperature: 22, cloudCoverage: "few", wind: 10},
    {day: "Wednesday", temperature: 26, cloudCoverage: "clear", wind: 5},
    {day: "Thursday", temperature: 24, cloudCoverage: "clear", wind: 5},
    {day: "Friday", temperature: 24, cloudCoverage: "few", wind: 18},
  ]

*/
const clearDays = weeklyForecast.filter((d) => {
  if (d.cloudCoverage === "clear" || d.cloudCoverage === "few") {
    return {
      day: d.day,
      temperature: d.temperature,
      cloudCoverage: d.cloudCoverage,
      wind: d.wind
    };
  }
});
console.log(clearDays);

/*
  Destructuring array -
  Refactor the code below to use destructuring to assign values to these 7 variables
*/

// const monday = weeklyForecast[1];
// const tuesday = weeklyForecast[2];
// const wednesday = weeklyForecast[3];
// const thursday = weeklyForecast[4];
// const friday = weeklyForecast[5];
// const saturday = weeklyForecast[6];
// const sunday = weeklyForecast[7];

const [
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
] = weeklyForecast;

/*
  Destructuring objects - 
  Refactor the code below to use destructuring to assign values to these 3 variables
*/

// const temperature = monday.temperature;
// const cloudCoverage = monday.cloudCoverage;
// const wind = monday.wind;

const { temperature, cloudCoverage, wind } = weeklyForecast;

console.log(`${monday.temperature}, ${monday.cloudCoverage}, ${monday.wind}`);
