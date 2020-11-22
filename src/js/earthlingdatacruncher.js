export default function EarthlingData (earthAge, residence, gender) {
  this.earthAge = earthAge;
  this.residence = residence;
  this.gender = gender;
}

EarthlingData.prototype.mercuryAge = function() {
  return this.earthAge * 0.24;
};

EarthlingData.prototype.venusAge = function() {
  return this.earthAge * 0.62;
};

EarthlingData.prototype.marsAge = function() {
  return this.earthAge * 1.88;
};

EarthlingData.prototype.jupiterAge = function() {
  return this.earthAge * 11.86;
};