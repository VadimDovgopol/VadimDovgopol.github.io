$(document).ready(function () {

    let ua = navigator.userAgent.toLowerCase();
    let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    let trigger = false;
    let nightMode = localStorage.getItem('nightMode');
    let triggerForspecificationBtn = false;

    var fontSize = localStorage.getItem('font-size');

    if (isAndroid || iOS === true) {
        $("body").addClass("mobile")
    }
    if (nightMode === "true") {
        trigger = true;

    } else {
        trigger = false;
    }


    $(".email").on("click", function () {
        $(".input-item").addClass("active")
    })

    $(".slide1 .next-btn").on("click", function () {
        let myTl = new TimelineMax();
        myTl
            .to(".section1 .slide1", .20, {autoAlpha: 0})
            .to(".section1 .slide1", 0, {display: "none"})
            .to(".section1 .slide2", .20, {display: "block", autoAlpha: 1});
    });

    $(".slide2 .next-btn").on("click", function () {
        let myTl = new TimelineMax();
        myTl
            .to(".section1 .slide2", .20, {autoAlpha: 0})
            .to(".section1 .slide2", 0, {display: "none"})
            .to(".section1 .slide3", .20, {display: "block", autoAlpha: 1});
    });

    $(".slide2 .prev-btn").on("click", function () {
        let myTl = new TimelineMax();
        myTl
            .to(".section1 .slide2", .20, {autoAlpha: 0})
            .to(".section1 .slide2", 0, {display: "none"})
            .to(".section1 .slide1", .20, {display: "block", autoAlpha: 1});
    })

    $(".slide3 .next-btn").on("click", function () {
        let myTl = new TimelineMax();
        myTl
            .to(".section1 .slide3", .20, {autoAlpha: 0})
            .to(".section1 .slide3", 0, {display: "none"})
            .to(".section1 .slide4", .20, {display: "block", autoAlpha: 1});
    });

    $(".slide3 .prev-btn").on("click", function () {
        let myTl = new TimelineMax();
        myTl
            .to(".section1 .slide3", .20, {autoAlpha: 0})
            .to(".section1 .slide3", 0, {display: "none"})
            .to(".section1 .slide2", .20, {display: "block", autoAlpha: 1});
    });

    $(".slide4 .next-btn").on("click", function () {
        let myTl = new TimelineMax();
        myTl
            .to(".section1 .slide4", .20, {autoAlpha: 0})
            .to(".section1 .slide4", 0, {display: "none"})
            .to(".section1 .slide5", .20, {display: "block", autoAlpha: 1});
    });

    $(".slide4 .prev-btn").on("click", function () {
        let myTl = new TimelineMax();
        myTl
            .to(".section1 .slide4", .20, {autoAlpha: 0})
            .to(".section1 .slide4", 0, {display: "none"})
            .to(".section1 .slide3", .20, {display: "block", autoAlpha: 1});
    })

    $(".slide5 .next-btn").on("click", function () {
        let myTl = new TimelineMax();
        myTl
            .to(".section1 .slide5", .20, {autoAlpha: 0})
            .to(".section1 .slide5", 0, {display: "none"})
            .to(".section1 .slide6", .20, {display: "block", autoAlpha: 1});
    });

    $(".slide5 .prev-btn").on("click", function () {
        let myTl = new TimelineMax();
        myTl
            .to(".section1 .slide5", .20, {autoAlpha: 0})
            .to(".section1 .slide5", 0, {display: "none"})
            .to(".section1 .slide4", .20, {display: "block", autoAlpha: 1});
    })

    $(".slide6 .next-btn").on("click", function () {
        let myTl = new TimelineMax();
        myTl
            .to(".section1 .slide6", .20, {autoAlpha: 0})
            .to(".section1 .slide6", 0, {display: "none"})
            .to(".section1 .slide1", .20, {display: "block", autoAlpha: 1});
    });

});

