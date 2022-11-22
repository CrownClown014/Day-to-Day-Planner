// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

/*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist*/

//Use a getElemtnbyId to display the current date and time at the top of the page.  
//use id current day to display date on webpage.  
let currentDateTime = moment().format('dddd, MMMM Do YYYY, H:mm:ss a');//change h to H to apply the code using military time.  Makes more sense.  
// console log what showing that moment what not defined.  Discovered that i needted to add the script src in the html from the moment.  

console.log(currentDateTime);
//$('$currentDay').append(currentDateTime);
//Date.now() not working- console.log informing that variable currentDateTime is not a function?;//built in method to diplay date.  
//console.log(currentDateTime);//logging 1668475715492- not date.  use different method.  
$('#currentDay').html(currentDateTime); 

//Pseudo Code
  //Section will color-code each time block to indicate the past, present, or future
  //use iterations and if/else statement to present the past, present, or future
  //add event listener using something like $('p').click(fucntion(){});--> passing a function to the event
  

$(function () {

  //event listener using .click() since it is shorthand for .on("click", function()[source: https://api.jquery.com/click/]
  $(".saveBtn").click(function() {
 //use localStorage.setItem()[source: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage]
 //using setItem method since it is used to add data to a web storage object [source: https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/#:~:text=In%20summary%2C%20we%20can%20store,parse%20method.]
 //use localStorage.setItem(key,value); to set
// use localStorage.getItem(key); to get later on in the code
// localStorage.getItem needs a key and a value 
//Keyname is what we want the value of
let keyName = $(this).parent().attr('id'); //key i want to update is the id of the time box? should be putting text in localstorage; source: https://stackoverflow.com/questions/10260667/jquery-get-parent-parent-id#:~:text=on%20this%20post.-,%24(this).,id%20of%20the%20parent's%20parent.-->testing to see if it works
let keyValue = $(this).siblings("textarea").val();//contain the value of the key created;  want to store in the description
console.log($(this));
console.log(this);

console.log("keyName", keyName);// console.log is showing keyName hour-9;  not storing test:cooking class?

console.log("keyValue", keyValue);
 localStorage.setItem(keyName, keyValue);

  

});
 
 


  //section will allow the past, present, future to be displayed on web page.   using getElementById to interact with the hour-9.  Instead of hour-9 using hour-+(i+9)
  //will allow us to iterate and difine our past, present, future by color code.  starting at 0 will be 9 then at 8 it will be 17 or 5 pm.  
  //future research to find method of not using i+9 and not using military time
  for (var i=0; i<9; i++){
    var timeBlock = document.getElementById('hour-'+(i+9))
    var hour = moment().hour()
    if(hour<(i+9)){
      timeBlock.style.backgroundColor= "grey";
    } else if (hour > (i+9)){
      timeBlock.style.backgroundColor= "red";
    } else if (hour === (i+9)){
      timeBlock.style.backgroundColor= "green";
    }
  };
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
