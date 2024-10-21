document.addEventListener("DOMContentLoaded", function () {
  const bookAppointment = document.querySelector(".book-appointment-container");
  const bookAppointmentBtn = document.querySelectorAll(".appointment-btn");
  const virtBtn = document.querySelector(".book-appointment");
  const inPersonOption = document.getElementById("in-person-option");
  const virtualOption = document.getElementById("virtual-option");
  const virtualInputs = document.getElementById("virtual-inputs");
  const bookinPerson = document.querySelector(".book-in-person");
  const bookinVir = document.querySelector(".book-virtual");

  function scrollFunction(targetEle, value = true) {
    console.log(targetEle);
    targetEle.scrollIntoView({ behavior: "smooth" });
    if (value) {
      inPersonOption.classList.add("selected");
      virtualOption.classList.remove("selected");
      virtualInputs.classList.remove("visible");
    } else {
      virtualOption.classList.add("selected");
      inPersonOption.classList.remove("selected");
      virtualInputs.classList.add("visible");
    }
  }

  //   function scrollFunction(targetEle, duration = 2000, value = true) {
  //     const startPosition = window.pageYOffset;
  //     const targetPosition =
  //       targetEle.getBoundingClientRect().top + startPosition;
  //     const distance = targetPosition - startPosition;
  //     let startTime = null;

  //     function animation(currentTime) {
  //       if (startTime === null) startTime = currentTime;
  //       const timeElapsed = currentTime - startTime;
  //       const run = ease(timeElapsed, startPosition, distance, duration);
  //       window.scrollTo(0, run);
  //       if (timeElapsed < duration) requestAnimationFrame(animation);
  //     }

  //     function ease(t, b, c, d) {
  //       t /= d / 2;
  //       if (t < 1) return (c / 2) * t * t + b;
  //       t--;
  //       return (-c / 2) * (t * (t - 2) - 1) + b;
  //     }

  //     requestAnimationFrame(animation);

  //     // Handling the additional functionality based on the `value` parameter
  //     if (value) {
  //       inPersonOption.classList.add("selected");
  //       virtualOption.classList.remove("selected");
  //       virtualInputs.classList.remove("visible");
  //     } else {
  //       virtualOption.classList.add("selected");
  //       inPersonOption.classList.remove("selected");
  //       virtualInputs.classList.add("visible");
  //     }
  //   }

  //   bookAppointmentBtn.addEventListener("click", function (e) {
  //     scrollFunction(bookAppointment);
  //   });

  bookAppointmentBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      console.log(bookAppointment);
      scrollFunction(bookAppointment);
    });
  });

  //book virtual appointment
  virtBtn.addEventListener("click", function () {
    scrollFunction(bookAppointment, false);
  });
  bookinVir.addEventListener("click", function () {
    scrollFunction(bookAppointment, false);
  });

  bookinPerson.addEventListener("click", function () {
    scrollFunction(bookAppointment);
  });

  inPersonOption.addEventListener("click", () => {
    inPersonOption.classList.add("selected");
    virtualOption.classList.remove("selected");
    virtualInputs.classList.remove("visible");
  });

  virtualOption.addEventListener("click", () => {
    virtualOption.classList.add("selected");
    inPersonOption.classList.remove("selected");
    virtualInputs.classList.add("visible");
  });

  const menuBtn = document.querySelector(".menu-btn");
  const navbar = document.querySelector(".navbar");

  menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
  // document.getElementById("menuBtn").addEventListener("click", function () {
  //   const navLinks = document.getElementById("navLinks");
  //   navLinks.classList.toggle("show");
  // });

  document.getElementById("menuBtn").addEventListener("click", function () {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
  });

  // Close the menu when any link is clicked
  const navLinkItems = document.querySelectorAll(
    "#navLinks li a, .appointment-btn"
  );
  navLinkItems.forEach((item) => {
    item.addEventListener("click", function () {
      const navLinks = document.getElementById("navLinks");
      navLinks.classList.remove("show");
    });
  });
});
