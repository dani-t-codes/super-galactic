export default function EarthlingData(earthAge, residence, gender) {
  this.earthAge = earthAge;
  this.residence = residence;
  this.gender = gender;
}

EarthlingData.prototype.crunchNumbers = function () {
  return "Earthling numbers will eventually do things.";
}