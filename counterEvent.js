// get the reference of EventEmitter class of events module
var events = require('events');

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();
var count = 0;
//Subscribe for FirstEvent
em.on('countAdd', function (data) {
    return count;
});

// count Add
em.emit('countAdd', () => {
    count++;
});

// count subtract
em.emit('countSubtract', () => {
    count--;
})