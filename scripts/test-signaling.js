/* eslint-disable @typescript-eslint/no-require-imports */
const { io } = require('socket.io-client');

async function runTest() {
  const s1 = io('http://localhost:4000');
  const s2 = io('http://localhost:4000');

  s1.on('connect', () => {
    console.log('s1 connected', s1.id);
    s1.emit('find');
  });
  s2.on('connect', () => {
    console.log('s2 connected', s2.id);
    s2.emit('find');
  });

  s1.on('matched', (m) => {
    console.log('s1 matched', m);
    s1.close();
    s2.close();
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Test timed out');
    s1.close();
    s2.close();
    process.exit(2);
  }, 3000);
}

runTest();
