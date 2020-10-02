$(document).ready(function () {

    var timeEl = $("<p>");
    var dayEl = $("<p>");
    var row1 = $("#div1");
    var row2 = $("#div2");
    var row3 = $("#div3");
    var row4 = $("#div4");
    var row5 = $("#div5");
    var row9 = $("#div9");
    var row10 = $("#div10");
    var row11 = $("#div11");

    // row1.val(localStorage.getItem("Entry1"));
    // row2.val(localStorage.getItem("Entry2"));
    // row3.val(localStorage.getItem("Entry3"));
    // row4.val(localStorage.getItem("Entry4"));
    // row5.val(localStorage.getItem("Entry5"));
    // row9.val(localStorage.getItem("Entry9"));
    // row10.val(localStorage.getItem("Entry10"));
    // row11.val(localStorage.getItem("Entry11"));
    // row12.val(localStorage.getItem("Entry12"));

    var button1 = $("#btn1");
    var button2 = $("#btn2");
    var button3 = $("#btn3");
    var button4 = $("#btn4");
    var button5 = $("#btn5");
    var button9 = $("#btn9");
    var button10 = $("#btn10");
    var button11 = $("#btn11");
    var button12 = $("#btn12");
    var clearBtn = $("#clearBtn");

    var timeNow = parseInt(moment().format('HMMMM Do YYYY, h:mm:ss a'));
    console.log(timeNow);
    function clear() {
        localStorage.clear();

        row1.val("");
        row2.val("");
        row3.val("");
        row4.val("");
        row5.val("");
        row9.val("");
        row10.val("");
        row11.val("");
        row12.val("");
    }

    function tick() {

        dayEl.text(moment().format("LL"));
        timeEl.text(moment().format('hh:mm:ssA'));
        $("#currentDay").text(moment().format("LL"));
        $("#currentTime").text(moment().format("hh:mm:ssA"));
        // if(localStorage.getItem(task.attr("data-hour"))!="")

    }

    function checkTime() { }

    //     if (parseInt(row12.attr("data-hour")) > timeNow) {
    //         row12.removeClass("past present future");
    //         row12.addClass("future");

    //     } else if (parseInt(row12.attr("data-hour")) === timeNow) {
    //         row12.removeClass("past present future");
    //         row12.addClass("present");


    //     } else {

    //         row12.removeClass("past present future");
    //         row12.addClass("past");

    //     }

    //     if (parseInt(row1.attr("data-hour")) > timeNow) {
    //         row1.removeClass("past present future");
    //         row1.addClass("future")

    //     } else if (parseInt(row1.attr("data-hour")) === timeNow) {
    //         row1.removeClass("past present future");
    //         row1.addClass("present");


    //     } else {

    //         row1.removeClass("past present future");
    //         row1.addClass("past");

    //     }

    //     if (parseInt(row2.attr("data-hour")) > timeNow) {
    //         row2.removeClass("past present future");
    //         row2.addClass("future");

    //     } else if (parseInt(row2.attr("data-hour")) === timeNow) {
    //         row2.removeClass("past present future");
    //         row2.addClass("present");


    //     } else {

    //         row2.removeClass("past present future");
    //         row2.addClass("past");

    //     }

    //     if (parseInt(row3.attr("data-hour")) > timeNow) {
    //         row3.removeClass("past present future");
    //         row3.addClass("future");

    //     } else if (parseInt(row3.attr("data-hour")) === timeNow) {
    //         row3.removeClass("past present future");
    //         row3.addClass("present");


    //     } else {
    //         row3.removeClass("past present future");
    //         row3.addClass("past");

    //     }

    //     if (parseInt(row4.attr("data-hour")) > timeNow) {
    //         row4.removeClass("past present future");
    //         row4.addClass("future");

    //     } else if (parseInt(row4.attr("data-hour")) === timeNow) {
    //         row4.removeClass("past present future");
    //         row4.addClass("present");

    //     } else {
    //         row4.removeClass("past present future");
    //         row4.addClass("past");

    //     }

    //     if (parseInt(row5.attr("data-hour")) > timeNow) {
    //         row5.removeClass("past present future");
    //         row5.addClass("future");
    //     } else if (parseInt(row5.attr("data-hour")) === timeNow) {
    //         row5.removeClass("past present future");
    //         row5.addClass("present");


    //     } else {
    //         row5.removeClass("past present future");
    //         row5.addClass("past");

    //     }

    //     if (parseInt(row9.attr("data-hour")) > timeNow) {
    //         row9.removeClass("past present future");
    //         row9.addClass("future");
    //     } else if (parseInt(row9.attr("data-hour")) === timeNow) {
    //         row9.removeClass("past present future");
    //         row9.addClass("present");


    //     } else {
    //         row9.removeClass("past present future");
    //         row9.addClass("past");

    //     }

    //     if (parseInt(row10.attr("data-hour")) > timeNow) {
    //         row10.removeClass("past present future");
    //         row10.addClass("future");
    //     } else if (parseInt(row10.attr("data-hour")) === timeNow) {
    //         row10.removeClass("past present future");
    //         row10.addClass("present");


    //     } else {
    //         row10.removeClass("past present future");
    //         row10.addClass("past");
    //     }

    //     if (parseInt(row11.attr("data-hour")) > timeNow) {
    //         row11.removeClass("past present future");
    //         row11.addClass("future");
    //     } else if (parseInt(row11.attr("data-hour")) === timeNow) {
    //         row11.removeClass("past present future");
    //         row11.addClass("present");


    //     } else {
    //         row11.removeClass("past present future");
    //         row11.addClass("past");

    //     }

    // }

    tick();
    setInterval(tick, 1000);
    setInterval(checkTime, 600000);
    clearBtn.on("click", clear);

    $(".saveBtn").click(function () {
        $("textarea").each(function () {
            var task = $(this).val();
            console.log(task);
            localStorage.setItem($(this).attr("data-hour"), task);
        })
    })
    // button9.on("click", function () {
    //     console.log(row1.children());
    //     if (row1.val() !== "") {
    //         localStorage.setItem("Entry1", row1.val());
    //     }
    // });

    checkTime();
});