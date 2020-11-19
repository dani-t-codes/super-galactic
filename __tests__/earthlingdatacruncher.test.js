import EarthlingData from './../src/earthlingdatacruncher.js';

describe('EarthlingData', () => {

  test('should correctly return EarthlingData age', () => {
    const earthling = new EarthlingData('12');
    expect(earthling.earthAge).toEqual('12'); 
  });
});