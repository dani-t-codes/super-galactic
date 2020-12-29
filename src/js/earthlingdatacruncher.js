export default class EarthlingData {
  constructor(earthAge, smokerStatus) {
    this.earthAge = earthAge;
    this.smokerStatus = smokerStatus;
    this.earthLifeExpectancy = 78.7;
  }

  //Planetary Age Methods
  mercuryAge() {
    return this.earthAge * 0.24;
  }

  venusAge() {
    return this.earthAge * 0.62;
  }

  marsAge() {
    return this.earthAge * 1.88;
  }

  jupiterAge() {
    return this.earthAge * 11.86;
  }

  //Planetary Life Expectancy Methods
  lifeExpectancy() {
    if (this.earthAge === 78 || this.earthAge === 79) {
      return ("You have reached the average U.S. life expectancy.");
    } else if (this.earthLifeExpectancy < this.earthAge) {
      return (this.earthAge - this.earthLifeExpectancy) + " years past average U.S. life expectancy.";
    } else if (this.earthLifeExpectancy > this.earthAge) {
      return (this.earthLifeExpectancy - this.earthAge) + " years left to live.";
    } else {
      return ("Uh-oh, something went wrong.");
    }
  }
  
  smokerLE() {
    if (this.smokerStatus === 'true') {
      this.earthLifeExpectancy -= 8;
    } else {
      this.earthLifeExpectancy;
    }
  }

  mercuryLifeExpectancy() {
    return `<p>... not looking so great. In two minutes or less upon arrival to Mercury, the extreme heat or extreme cold - depending on which side of the planet you land on in relation to the sun - would be far too much for the human body to handle.</p> <p>You are ${this.earthAge * 0.24} Mercury years past your Mercury life expectancy.</p>`;
  }

  venusLifeExpectancy() {
    return `<p>... yikes, you're having a rough day of interplanetary travel. Venus's extreme temperatures of at least 470 degrees Celsius would consume a human body in less than a second.</p> <p>You are ${this.earthAge * 0.62} Venus years past your Venus life expectancy.</p>`;
  }

  marsLifeExpectancy() {
    return `<p>... I hate to be the one to break it to you, but I have more bad news. While Mars has long been considered for potential human residence, without a spacesuit, a human would still die within two minutes because there is no air on Mars that we can breathe, and the silicone dust on the planet would quickly suffocate us. Double yikes! You might last a couple minutes, but inevitably, you'll die here too.</p> <p>You are ${this.earthAge * 1.88} Mars years past your Mars life expectancy.</p>`;
  }

  jupiterLifeExpectancy() {
    return `<p>...Zoinks! You are all out of luck today, my friend. Jupiter doesn't even have a surface for you to land on - just a bunch of swirling hydrogen & helium gases. If you go to Jupiter, you will be consumed by gas as soon as you enter the planet's atmosphere.</p> <p>You are ${this.earthAge * 11.86} Jupiter years past your Jupiter life expectancy.</p>`;
  }
}