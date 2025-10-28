import ChatRoom from "./chatroom.js";


// Create a chat room
const room = new ChatRoom('DevTalk');

// Set up listeners
room.on('join', (user) => {
  console.log(`👋 Welcome ${user}!`);
});

room.on('message', ({ user, text }) => {
  console.log(`💬 ${user} says: "${text}"`);
});

room.on('leave', (user) => {
  console.log(`👋 Goodbye ${user}!`);
});

// Simulate chat activity
room.join('Alice');
room.message('Alice', 'Hey everyone!');
room.leave('Alice');
