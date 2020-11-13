import EarthlingData from './../src/earthlingdatacruncher.js';

describe('EarthlingData', () => {

  test('should correctly return data with three demographics', () => {
    const earthling = new EarthlingData('12','USA','F');
    expect(earthling.earthAge).toEqual('12'); 
    expect(earthling.residence).toEqual('USA');
    expect(earthling.gender).toEqual('F'); 
  });
});