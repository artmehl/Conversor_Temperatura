function convertTemp (tipo, temp, conversor) {
  let resultado;
  if(conversor == 'C') resultado = toCelsius(temp, tipo);
  else if(conversor == 'F') resultado = toFahrenheit(temp, tipo);
  else if (conversor  == 'K') resultado = toKelvin(temp, tipo);
  return resultado;
}

function toCelsius (temp, tipo) {
  let celsius;
  if (tipo == 'F') celsius = (temp - 32) / 1.8;
  else if (tipo == 'K') celsius = temp - 273;
  else celsius = temp;
  return celsius;
}

function toFahrenheit (temp, tipo) {
  let fahrenheit;
  if (tipo == 'C') fahrenheit = (temp * 1.8) + 32;
  else if (tipo == 'K') fahrenheit = (toCelsius(temp, 'K') * 1.8) + 32;
  else fahrenheit  = temp;
  return fahrenheit;
}

function toKelvin (temp, tipo) {
  let kelvin;
  if (tipo == 'C') kelvin = Number(temp) + 273;
  else if (tipo == 'F') kelvin = toCelsius(temp, 'F') + 273;
  else kelvin = temp;
  return kelvin;
}

exports.convertTemp = convertTemp;
