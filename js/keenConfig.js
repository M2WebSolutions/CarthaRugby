var sliderElement = document.getElementById("my-keen-slider")

var slider = new KeenSlider(sliderElement, {
    spacing: 0,
    slidesPerView: 1,
    centered: true,
    vertical: true,
    // AUTO PLAY
    loop: true, 
      dragStart: () => {
        autoplay(false)
      },
      dragEnd: () => {
        autoplay(true)
      },
    created: function (instance) {

        // GET ARROWS
      document
        .getElementById("arrow-left")
        .addEventListener("click", function () {
          instance.prev()
        })
  
      document
        .getElementById("arrow-right")
        .addEventListener("click", function () {
          instance.next()
        })

        // GET DOTS
      var dots_wrapper = document.getElementById("dots")
      var slides = document.querySelectorAll(".keen-slider__slide")
      slides.forEach(function (t, idx) {
        var dot = document.createElement("button")
        dot.classList.add("dot")
        dots_wrapper.appendChild(dot)
        dot.addEventListener("click", function () {
          instance.moveToSlide(idx)
        })
      })
      updateClasses(instance)
    },
    slideChanged(instance) {
      updateClasses(instance)
    },
  })
  
//   ARROWS & DOTS FUNCTIONS
  function updateClasses(instance) {
    var slide = instance.details().relativeSlide
    var arrowLeft = document.getElementById("arrow-left")
    var arrowRight = document.getElementById("arrow-right")
    slide === 0
      ? arrowLeft.classList.add("arrow--disabled")
      : arrowLeft.classList.remove("arrow--disabled")
    slide === instance.details().size - 1
      ? arrowRight.classList.add("arrow--disabled")
      : arrowRight.classList.remove("arrow--disabled")
  
    var dots = document.querySelectorAll(".dot")
    dots.forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("dot--active")
        : dot.classList.remove("dot--active")
    })
  }

// AUTO SLIDE FUNCTION
var interval = 0
function autoplay(run) {
  clearInterval(interval)
  interval = setInterval(() => {
    if (run && slider) {
      slider.next()
    }
    // CHANGE FOR DURATION HERE
  }, 5000)
}

// STOP AUTO SLIDE ON HOVER

sliderElement.addEventListener("mouseover", () => {
  autoplay(false)
})
sliderElement.addEventListener("mouseout", () => {
  autoplay(true)
})
autoplay(true)


