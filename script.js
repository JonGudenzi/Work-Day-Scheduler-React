const rows = $(".row");
const hours = $(".hour");
const past = $(".past");
const present = $(".present");
const future = $(".future");
const timeBlock = $(".time-block");
const saveButton = $(".saveBtn");
const hourTask = $("id");
const userText = $(".hour-task");

$(document).ready(function () {
  var today = moment();
  $("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm a"));
  var hours = today.hours();
});

var parent = $(this).parents(".row");
var timeId = parseInt(parent.attr("id"));
var currentHour = parseInt(moment().format("H"));

timeBlock.each(function () {

    var parent = $(this).parents(".row");
    var timeId = parseInt(parent.attr("id"));
    var currentHour = parseInt(moment().format("H"));
    console.log(timeId);

    if (timeId < currentHour) {
      $(this).addClass("past");

    } else if (timeId === currentHour) {
        $(this).removeClass("past");
      $(this).addClass("present");
      
    } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
  }
  $(this).val(localStorage.getItem(parent.attr("id")));
})

$(".saveBtn").on("click", function() {
 
  var userText = $(this).siblings(".time-block").val();
  
  var hourTask = $(this).parents(".row").attr("id");
 
localStorage.setItem(hourTask, userText);

console.log("+++ Get Item from Local Storage: ", localStorage.getItem(hourTask))
})