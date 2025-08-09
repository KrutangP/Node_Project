const EventEmitter = require('events');
class MyEmitter extends EventEmitter {
    // constructor() {
    //     super();
    //     this.on('event', () => {
    //     console.log('An event occurred!');
    //     });
    // }
}

// Init Object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => {
    console.log('An event occurred!');
});

// Init Event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');