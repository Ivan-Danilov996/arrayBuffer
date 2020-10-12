import Daemon from '../Daemon'
import Magician from '../Magician'



test.each([
    [1,10],
    [2,9],
    [3,8],
    [4,7],
    [5,6],
    [6,0],
    [0,0],
])('get attack Magician', (range, expected) => {
    const magician = new Magician('mag');
    magician.attack = range;
    expect(magician.attack).toEqual(expected);
  });

  test.each([
    [1,40],
    [2,36],
    [3,32],
    [4,28],
    [5,24],
    [6,0],
    [0,0],
])('get attack Daemon', (range, expected) => {
    const daemon = new Daemon('daemon');
    daemon.attack = range;
    expect(daemon.attack).toEqual(expected);
  });

  test.each([
    [1,10],
    [2,4],
    [3,0],
    [4,0],
    [5,0],
    [6,0],
    [0,0],
])('get attack this stoned Magician', (range, expected) => {
    const magician = new Magician('mag');
    magician.attack = range;
    magician.stoned = true;
    magician.attack = range;
    expect(Math.floor(magician.attack)).toEqual(expected);
  });

  test.each([
    [1,40],
    [2,31],
    [3,24],
    [4,18],
    [5,12],
    [6,0],
    [0,0],
])('get attack Daemon', (range, expected) => {
    const daemon = new Daemon('daemon');
    daemon.attack = range;
    daemon.stoned = true;
    daemon.attack = range;
    expect(Math.floor(daemon.attack)).toEqual(expected);
  });