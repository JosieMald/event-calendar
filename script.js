$(document).ready(function (){
    var currentDateTime = moment().format("MMMM Do YYYY");
    console.log(currentDateTime);
    var dateDisplay = $("<h5>").text(currentDateTime);
    // Displays Current Date on Jumbotron
    $(".jumbotron").append(dateDisplay);
    $(".saveBtn").on("click", function(){
        var activity = $(this).siblings(".description").val();
        console.log(activity);
        var hour = $(this).parent().attr("id");
        console.log(hour);
        localStorage.setItem(hour, activity)
    });
    colorCode();
// <-- Color Time Blocks -->

    function colorCode () {
        var momentHour = moment().hours();
        console.log(momentHour);
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            console.log(blockHour);
            if (blockHour < momentHour) {
                $(this).addClass("past");
            } else if (blockHour === momentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
        console.log("refresh");
    };
    setInterval(colorCode, 60000);

    // <-- Local Storage -->

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
})