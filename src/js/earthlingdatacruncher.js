export default function EarthlingData (earthAge, smokerStatus) {
  this.earthAge = earthAge;
  this.smokerStatus = smokerStatus;
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

// eslint-disable-next-line no-constant-condition
// if ('smoker' === true) {
//   return "smoker";
// //   return earthLifeExpectancy - this.earthAge - 8;
// } else ('smoker' === false); {
//   return "not a smoker";
EarthlingData.prototype.lifeExpectancy = function() {
  let earthLifeExpectancy = 78.7;
  if ((earthLifeExpectancy > this.earthAge) && (this.smokerStatus === true)) {
    return (earthLifeExpectancy - this.earthAge - 8 + " years left to live.");
  } else if ((earthLifeExpectancy > this.earthAge) && (this.smokerStatus === false)) {
    return (earthLifeExpectancy - this.earthAge + " years left to live.");
  } else if ((earthLifeExpectancy < this.earthAge) && (this.smokerStatus === true)) {
    return (this.earthAge - earthLifeExpectancy - 8 + " years past average US life expectancy.");
  } else if ((earthLifeExpectancy < this.earthAge) && (this.smokerStatus === false)) {
    return (this.earthAge -earthLifeExpectancy + " years past average US life expectancy.");
  }
};

EarthlingData.prototype.mercuryLifeExpectancy = function() {
  return "You're dead!" + "You are " + (this.earthAge * 0.24) + " Mercury years past your life expectancy.";
};

EarthlingData.prototype.venusLifeExpectancy = function() {
  return "You're ALSO dead!" + "You are " + (this.earthAge * 0.62) + " Venus years past your life expectancy.";
};

EarthlingData.prototype.marsLifeExpectancy = function() {
  return "You might last a couple minutes, but inevitably, you'll die here too." + "You are " + (this.earthAge * 11.86) + " Mars years past your life expectancy";
};

EarthlingData.prototype.jupiterLifeExpectancy = function() {
  return "Quadruple dead. You'll be consumed by gas as soon as you enter the planet's atmosphere.";
};

EarthlingData.prototype.jupiterYrsPast = function() {
  return "You are " + (this.earthAge * 11.86) + " Jupiter years past your life expectancy";
};