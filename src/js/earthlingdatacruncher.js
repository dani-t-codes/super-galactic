export default function EarthlingData (earthAge) {
  this.earthAge = earthAge;
  // this.smokerStatus = smokerStatus;
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

EarthlingData.prototype.lifeExpectancy = function() {
  let earthLifeExpectancy = 78.7;
  // eslint-disable-next-line no-constant-condition
  // if ('smoker' === true) {
  //   return "smoker";
  // //   return earthLifeExpectancy - this.earthAge - 8;
  // } else ('smoker' === false); {
  //   return "not a smoker";
  return earthLifeExpectancy - this.earthAge;
  // }
};

EarthlingData.prototype.mercuryLifeExpectancy = function() {
  return "You're dead!";
};

EarthlingData.prototype.venusLifeExpectancy = function() {
  return "You're ALSO dead!";
};

EarthlingData.prototype.marsLifeExpectancy = function() {
  return "You might last a couple minutes, but inevitably, you'll die here too.";
};

EarthlingData.prototype.jupiterLifeExpectancy = function() {
  return "Quadruple dead. You'll be consumed by gas as soon as you enter the planet's atmosphere.";
};

EarthlingData.prototype.mercuryYrsPast = function() {
  return "You are " + (this.earthAge * 0.24) + " Mercury years past your life expectancy";
};

EarthlingData.prototype.venusYrsPast = function() {
  return "You are " + (this.earthAge * 0.62) + " Venus years past your life expectancy";
};

EarthlingData.prototype.marsYrsPast = function() {
  return "You are " + (this.earthAge * 1.88) + " Venus years past your life expectancy";
};