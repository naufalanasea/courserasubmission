$(document).ready(function() {
  $("#book-table-button").click(function() {
    var name = $("#name").val();
    var date = $("#date").val();
    var time = $("#time").val();
    var numberOfPeople = $("#number-of-people").val();

    // Validate the form data
    if (name === "") {
      alert("Please enter your name.");
      return false;
    }

    if (date === "") {
      alert("Please select a date.");
      return false;
    }

    if (time === "") {
      alert("Please select a time.");
      return false;
    }

    if (numberOfPeople === "") {
      alert("Please enter the number of people in your party.");
      return false;
    }

    // Save the reservation information to the database

    // Display a confirmation message to the user
    alert("Your table has been booked successfully!");
  });
});