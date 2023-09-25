// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // these get a handle on my tags in HTML
  var nine = $('#hour-9');
  var ten = $('#hour-10');
  var eleven = $('#hour-11');
  var twelve = $('#hour-12');
  var one = $('#hour-1');
  var two = $('#hour-2');
  var three = $('#hour-3');
  var four = $('#hour-4');
  var five = $('#hour-5');

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Each one of these is a click event listener for the save button to save whatever is in the textarea to the localstorage.
  $(nine).children().eq(2).on('click', function () {
    var localText = $(nine).children().eq(1).val();
    localStorage.setItem("hour-9", localText);
  })
  $(ten).children().eq(2).on('click', function () {
    var localText = $(ten).children().eq(1).val();
    localStorage.setItem("hour-10", localText);
  })
  $(eleven).children().eq(2).on('click', function () {
    var localText = $(eleven).children().eq(1).val();
    localStorage.setItem("hour-11", localText);
  })
  $(twelve).children().eq(2).on('click', function () {
    var localText = $(twelve).children().eq(1).val();
    localStorage.setItem("hour-12", localText);
  })
  $(one).children().eq(2).on('click', function () {
    var localText = $(one).children().eq(1).val();
    localStorage.setItem("hour-1", localText);
  })
  $(two).children().eq(2).on('click', function () {
    var localText = $(two).children().eq(1).val();
    localStorage.setItem("hour-2", localText);
  })
  $(three).children().eq(2).on('click', function () {
    var localText = $(three).children().eq(1).val();
    localStorage.setItem("hour-3", localText);
  })
  $(four).children().eq(2).on('click', function () {
    var localText = $(four).children().eq(1).val();
    localStorage.setItem("hour-4", localText);
  })
  $(five).children().eq(2).on('click', function () {
    var localText = $(five).children().eq(1).val();
    localStorage.setItem("hour-5", localText);
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // this is the hour of the day
  var hour = dayjs().format('H');
  console.log(hour)
  // each function calls a the same function with different arguments.
  colorClass(nine, 9);
  colorClass(ten, 10);
  colorClass(eleven, 11);
  colorClass(twelve, 12);
  colorClass(one, 13);
  colorClass(two, 14);
  colorClass(three, 15);
  colorClass(four, 16);
  colorClass(five, 17);
  //Changes the color of the background for each time slot based on past,present and future.
  function colorClass(x,y) {
    if (hour < y) {
      x.removeClass("past present").addClass("future");
    }
    if (hour == y) {
      $(x).removeClass("past future").addClass("present");
    }
    if (hour > y) {
      x.removeClass("future present").addClass("past");
    }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //Gets the localstorage of each time slot.
  $(nine).children().eq(1).val(localStorage.getItem('hour-9'));
  $(ten).children().eq(1).val(localStorage.getItem('hour-10'));
  $(eleven).children().eq(1).val(localStorage.getItem('hour-11'));
  $(twelve).children().eq(1).val(localStorage.getItem('hour-12'));
  $(one).children().eq(1).val(localStorage.getItem('hour-1'));
  $(two).children().eq(1).val(localStorage.getItem('hour-2'));
  $(three).children().eq(1).val(localStorage.getItem('hour-3'));
  $(four).children().eq(1).val(localStorage.getItem('hour-4'));
  $(five).children().eq(1).val(localStorage.getItem('hour-5'));
  // TODO: Add code to display the current date in the header of the page.

  //adds the name of day, the month and what day of the month it is.
  var date = dayjs();
  $('#currentDay').text(date.format('dddd, MMMM D'));

});


//example of date at top of page
//day, month day
//thursday, september 5th
