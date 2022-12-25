


// ===========aos  animation on scroll library===============

// Aos.init()



// ==========typing ===========

let type = new Typed(".auto-type", {
    strings: ["Coding ", "Freelancer ", "Developer "],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

// ================= progress ===================

let progress = document.querySelectorAll("progress");
let aboutSection = document.getElementById("about");
let initial = false;

function increaseProg(el) {
    let target = el.textContent;
    console.log(target);
    console.log(el.value);

    let increased = setInterval(() => {
        el.value++;

        if (el.value == target) {
            el.setAttribute("value", el.value);
            console.log(el.value);
            clearInterval(increased);
        }
    }, 10);
}

// ============= counter on scroll ==============

let elemants = document.querySelectorAll(".counter h3 ");
let section = document.getElementById("services");
let start = false;

function counter(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 100);
}

// ===========Scroll to to button============
let arrow = document.getElementById("arrow");
console.log(arrow);




// ***********change on Scroll ************

window.onscroll = function () {
    if (window.scrollY >= aboutSection.offsetTop) {
        if (!initial) {
            progress.forEach((prog) => {
                increaseProg(prog);
            });
        }

        initial = true;
    }

    if (window.scrollY >= section.offsetTop) {
        if (!start) {
            elemants.forEach((element) => {
                counter(element);
            });
            console.log("eeeeeeee")
        }

        start = true;
    }


    if (window.scrollY >= aboutSection.offsetTop) {
        arrow.classList.add("show")
    }
};

arrow.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


