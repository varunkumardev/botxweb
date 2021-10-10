$(document).ready(function () {

    $('.dismiss, .overlay').on('click', function () {
        $('.sidebar').addClass('notActive');
        $('.sidebar').removeClass('active');
    });

    $('.menu_text, .vector label').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.sidebar').removeClass('notActive');
    });

    var typed = new Typed(".typing", {
        strings: ["to be the change", "for you to be the change", "to be the future"],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true
    });
});

//--------------------Button JS---------------------------------------------------------//

$("#verifybutton").on("click", function () {
    setTimeout(() => {
        $(".modal-backdrop").remove(".modal-backdrop");
    }, 500)
    setTimeout(() => {
        $(".modal-content").css("width", "100%");
        $(".modal-content").css("height", "300px");
    }, 100)
});

//---------------------Newsletter----------------------------------------------//

$("#newsletter").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxHmo2-4ZyRYXLDDJaTguZ_0_CsFaOvzHeNmE1Coq9OLCLtge0/exec",
        data: $("#newsletter").serialize(),
        method: "post",
        success: function (response) {
            alert("Thank you for subscribing to our newsletter")
        },
        error: function (err) {
            alert("Something Error")
        }
    })
})