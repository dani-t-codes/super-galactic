function EarthlingData(earthage, residence, gender) {
  this.earthage = earthage;
  this.residence = residence;
  this.gender = gender;
}

EarthlingData.prototype.crunchNumbers = function () {
  return "Earthling numbers will eventually do things.";
}