"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
      Author: Chad Williams
      Date:   2.13.19

   Filename:   ph_clock.js     

*/
// big help from Ethan and Micah for helping me understand the underlying foundation of the logic and how it functions
/* ------------------------------------------------- */
// step5 sets mins to 30
var minsLeft = 30;
// step6 sets secsLeft to 0
var secsLeft = 0;
// step7 does equation, multiples minsleft by 60 adds secsleft
var timeLeft = minsLeft * 60 + secsLeft;
// sets interval for the function countdown, triggers every 1 second
var clockID = setInterval("countDown()", 1000);
//code goes here that will be run every 1 seconds.    

//  step8 function countdown is used to do basic calculations and display the values for time
// adds zeros if single digits, inserts the values into html, calls the checktimer function which calls the stopClock func and stops it
function countDown() {
    // stepA, rounds down the integer from the quation, dividing timeleft by 60
    minsLeft = Math.floor(timeLeft / 60);
    // stepB, secsleft is equal to minsleft times 60 minus timeleft
    secsLeft = timeLeft - 60 * minsLeft;
    // calls addleading zero function for var minsleft, sets equal to minsstring
    var minsString = addLeadingZero(minsLeft);
    // calls addleading zero function for var secsleft, sets equal to secsstring
    var secsString = addLeadingZero(secsLeft);
    // replaces html content with id minutes to display value of minsstring
    document.getElementById("minutes").textContent = minsString;
    // replaces html content with id seconds to display value of secsstring
    document.getElementById("seconds").textContent = secsString;
    // calls function checkTimer, runs its calculations
    checkTimer();
    // decreases value of timeleft by one with decrement operations
    timeLeft--;
}

// function stopClock
function stopClock() {
    // gets html with Id TimeHead, inserts html before the end tag
    document.getElementById("TimeHead").insertAdjacentHTML('beforeend', "<br> (Order Expired)");
    // removes the interval from the function it's placed it, stopped it from running every second
    clearInterval();
}

// Given Functions Below

/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

// stepC confused, use minsLeft as parameter, set new var minsString to value returned by addleadingzero function
function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}