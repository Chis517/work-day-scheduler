// element which displays the current date
var date = moment().format("dddd, MMMM, Do, YYYY")
$('#currentDay').text(date) 

// variables to call the time-block, save the users tasks and call moment for the current hour for the setColors function
var timeBlock = $(".time-block")
var currentTime = moment().hour()
var saveTask = $('.saveTask')

// function that changes the timeBlock color based on the current time
function setColors() {
  timeBlock.each(function() {
    var hour = $(this).attr("id")

    if (currentTime > hour) {
      $(this).addClass('past')
    }
    if (currentTime == hour) {
      $(this).removeClass('past')
      $(this).addClass('present')
    }
    if (currentTime < hour) {
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')
    }
  })
};

// on click function to save tasks written within the time-block
saveTask.on('click', function(event) {
  event.preventDefault()
  var timeId = $(this).attr('id')
  var task = $(this).siblings(".time-block").val()
  localStorage.setItem(timeId, task)
  showTask()
});

// function that saves tasks to localStorage
function showTask() {
  for (var i = 9; i < 18; i++) {
    var getTask = localStorage.getItem(i)
    $("#" + i).text(getTask)
  }
};

showTask();
setColors();