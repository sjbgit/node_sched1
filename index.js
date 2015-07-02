
var schedule = require('node-schedule');
 
var timeObject = new Date(); 

console.log(timeObject);    
timeObject.setSeconds(timeObject.getSeconds() + 60); 
console.log(timeObject); 

 var job = schedule.scheduleJob('job_call_', timeObject, function() {

 	console.log('this is the timer');
 });



function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}     