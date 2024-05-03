document.addEventListener("DOMContentLoaded", function() {
    var cl2 = document.querySelector(".cl2");
    var cl3 = document.querySelector(".cl3");
    var cl4 = document.querySelector(".cl4");
    var subcl1 = document.querySelector(".subcl1");

    cl2.addEventListener("click", function() {
        subcl1.textContent = "Mtro. Suchiapa";
    });

    cl3.addEventListener("click", function() {
        subcl1.textContent = "Mtra. Meli";
    });

    cl4.addEventListener("click", function() {
        subcl1.textContent = "Mtra. Abigail Villa";
    });
});
