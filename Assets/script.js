$(document).ready(function() {

    $('.saveBtn').on('click', function (){
        console.log("click button")
        var textTime = $(this).siblings('.description').val();
        var textValue = $(this).parent().attr('id');
        localStorage.setItem(textValue, textTime);
        console.log(textValue);
        console.log(textTime);
    })



//using momemnt.js to get the current time for the user to see and for the developer so the computer can also know the time for it when its time to label the schedulers events
    var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do YYYY, hh:mm:ss A" ));
    
    function timeTracker() {
        //the variable that receives the current number of hours.
        var currentHour = moment().format("HH") 
        

        // the loop that goes through all the timeblocks
        $(".time-row").each(function () {
            // 
            var hourNow = ($(this).attr("id"));
            console.log( hourNow, currentHour)

            //all the if/then scenarios that creates the time scenarios that correlates with the scheduler
            //this if statement is for the past events that have occured giving it, its gray color
            if (hourNow < currentHour) {
                $(this).children().eq(1).addClass("past");
            } //this statment is  for the times that are equal and/or current  to the hour to get the current event, giving it its red color.
            else if (hourNow === currentHour) {
                $(this).children().eq(1).addClass("present");
            }
            else { //this is else statement is green for upcoming future on the scheduler
                $(this).children().eq(1).addClass("future");
            }
        })
    }
    //function that helps rerun the timer for the scheduler
    timeTracker();

   
    }) 


