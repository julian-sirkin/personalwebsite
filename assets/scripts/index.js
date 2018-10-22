// Clear main display
const clearView = function () {
  $('#aboutMePage, #workoutPage, #trial, #capstonePage, #groupProjectPage, #ticPage').addClass('hidden')
}
const showResume = function ()
 {
   clearView()
 }
const showTicTacToe = function () {
  clearView()
$('#ticPage').removeClass('hidden')
}
const showWorkoutTracker = function () {
  console.log('show workout tracker')
  clearView()
  $('#workoutPage').removeClass('hidden')
}

const showAboutMe = function () {
  console.log('show About me')
  clearView()
  $('#aboutMePage').removeClass('hidden')
}

const showCapstone = function () {
  clearView()
  $('#capstonePage').removeClass('hidden')
}

const showGroupProject = function () {
  clearView()
  $('#groupProjectPage').removeClass('hidden')
}


// Sidebar event handler
const sidebarEventHandler = function () {
$('#tic-tac-toe').on('click', showTicTacToe)
$('#showWorkoutTracker').on('click', showWorkoutTracker)
$('#aboutMe').on('click', showAboutMe)
$('#show-capstone').on('click', showCapstone)
$('#resume').on('click', showResume)
$('#showGroupProject').on('click', showGroupProject)
$('.fa-file').on('click', showAboutMe)
}

// Run functions
$(() => {
sidebarEventHandler()
})
