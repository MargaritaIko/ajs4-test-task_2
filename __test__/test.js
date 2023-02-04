import getHealthStatus from '../index';


test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 45 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
])('Состояние персонажа', (input, expected) => {
  const received = getHealthStatus(input);

  expect(received).toBe(expected);
});