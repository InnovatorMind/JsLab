import EventEmitter from 'events';

class ChatRoom extends EventEmitter {
  constructor(roomName) {
    super();
    this.roomName = roomName;
  }

  join(user) {
    console.log(`${user} joined ${this.roomName}`);
    this.emit('join', user);
  }

  message(user, text) {
    console.log(`${user}: ${text}`);
    this.emit('message', { user, text });
  }

  leave(user) {
    console.log(`${user} left ${this.roomName}`);
    this.emit('leave', user);
  }
}

export default ChatRoom;