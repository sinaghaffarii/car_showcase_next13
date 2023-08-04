export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "cb25725031msh250ea297e57b236p12f7b4jsn878947c591e9",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
    headers: headers,
  });

  const result = await response.json();

  return result;
}
