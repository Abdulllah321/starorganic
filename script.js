function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
}
loco();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    https://zelt.app/assets/img/home/hero/sequence/1.webp
  https://zelt.app/assets/img/home/hero/sequence/2.webp
  https://zelt.app/assets/img/home/hero/sequence/3.webp
  https://zelt.app/assets/img/home/hero/sequence/4.webp
  https://zelt.app/assets/img/home/hero/sequence/5.webp
  https://zelt.app/assets/img/home/hero/sequence/6.webp
  https://zelt.app/assets/img/home/hero/sequence/7.webp
  https://zelt.app/assets/img/home/hero/sequence/8.webp
  https://zelt.app/assets/img/home/hero/sequence/9.webp
  https://zelt.app/assets/img/home/hero/sequence/10.webp
  https://zelt.app/assets/img/home/hero/sequence/11.webp
  https://zelt.app/assets/img/home/hero/sequence/12.webp
  https://zelt.app/assets/img/home/hero/sequence/13.webp
  https://zelt.app/assets/img/home/hero/sequence/14.webp
  https://zelt.app/assets/img/home/hero/sequence/15.webp
  https://zelt.app/assets/img/home/hero/sequence/16.webp
  https://zelt.app/assets/img/home/hero/sequence/17.webp
  https://zelt.app/assets/img/home/hero/sequence/18.webp
  https://zelt.app/assets/img/home/hero/sequence/19.webp
  https://zelt.app/assets/img/home/hero/sequence/20.webp
  https://zelt.app/assets/img/home/hero/sequence/21.webp
  https://zelt.app/assets/img/home/hero/sequence/22.webp
  https://zelt.app/assets/img/home/hero/sequence/23.webp
  https://zelt.app/assets/img/home/hero/sequence/24.webp
  https://zelt.app/assets/img/home/hero/sequence/25.webp
  https://zelt.app/assets/img/home/hero/sequence/26.webp
  https://zelt.app/assets/img/home/hero/sequence/27.webp
  https://zelt.app/assets/img/home/hero/sequence/28.webp
  https://zelt.app/assets/img/home/hero/sequence/29.webp
  https://zelt.app/assets/img/home/hero/sequence/30.webp
  https://zelt.app/assets/img/home/hero/sequence/31.webp
  https://zelt.app/assets/img/home/hero/sequence/32.webp
  https://zelt.app/assets/img/home/hero/sequence/33.webp
  https://zelt.app/assets/img/home/hero/sequence/34.webp
  https://zelt.app/assets/img/home/hero/sequence/35.webp
  https://zelt.app/assets/img/home/hero/sequence/36.webp
  https://zelt.app/assets/img/home/hero/sequence/37.webp
  https://zelt.app/assets/img/home/hero/sequence/38.webp
  https://zelt.app/assets/img/home/hero/sequence/39.webp
  https://zelt.app/assets/img/home/hero/sequence/40.webp
  https://zelt.app/assets/img/home/hero/sequence/41.webp
  https://zelt.app/assets/img/home/hero/sequence/42.webp
  https://zelt.app/assets/img/home/hero/sequence/43.webp
  https://zelt.app/assets/img/home/hero/sequence/44.webp
  https://zelt.app/assets/img/home/hero/sequence/45.webp
  https://zelt.app/assets/img/home/hero/sequence/46.webp
  https://zelt.app/assets/img/home/hero/sequence/47.webp
  https://zelt.app/assets/img/home/hero/sequence/48.webp
  https://zelt.app/assets/img/home/hero/sequence/49.webp
  https://zelt.app/assets/img/home/hero/sequence/50.webp
  https://zelt.app/assets/img/home/hero/sequence/51.webp
  https://zelt.app/assets/img/home/hero/sequence/52.webp
  https://zelt.app/assets/img/home/hero/sequence/53.webp
  https://zelt.app/assets/img/home/hero/sequence/54.webp
  https://zelt.app/assets/img/home/hero/sequence/55.webp
  https://zelt.app/assets/img/home/hero/sequence/56.webp
  https://zelt.app/assets/img/home/hero/sequence/57.webp
  https://zelt.app/assets/img/home/hero/sequence/58.webp
  https://zelt.app/assets/img/home/hero/sequence/59.webp
  https://zelt.app/assets/img/home/hero/sequence/60.webp
  https://zelt.app/assets/img/home/hero/sequence/61.webp
  https://zelt.app/assets/img/home/hero/sequence/62.webp
  https://zelt.app/assets/img/home/hero/sequence/63.webp
  https://zelt.app/assets/img/home/hero/sequence/64.webp
  https://zelt.app/assets/img/home/hero/sequence/65.webp
  https://zelt.app/assets/img/home/hero/sequence/66.webp
  https://zelt.app/assets/img/home/hero/sequence/67.webp
  https://zelt.app/assets/img/home/hero/sequence/68.webp
  https://zelt.app/assets/img/home/hero/sequence/69.webp
  https://zelt.app/assets/img/home/hero/sequence/70.webp
  https://zelt.app/assets/img/home/hero/sequence/71.webp
  https://zelt.app/assets/img/home/hero/sequence/72.webp
  https://zelt.app/assets/img/home/hero/sequence/73.webp
  https://zelt.app/assets/img/home/hero/sequence/74.webp
  https://zelt.app/assets/img/home/hero/sequence/75.webp
  https://zelt.app/assets/img/home/hero/sequence/76.webp
  https://zelt.app/assets/img/home/hero/sequence/77.webp
  https://zelt.app/assets/img/home/hero/sequence/78.webp
  https://zelt.app/assets/img/home/hero/sequence/79.webp
  https://zelt.app/assets/img/home/hero/sequence/80.webp
  https://zelt.app/assets/img/home/hero/sequence/81.webp
  https://zelt.app/assets/img/home/hero/sequence/82.webp
  https://zelt.app/assets/img/home/hero/sequence/83.webp
  https://zelt.app/assets/img/home/hero/sequence/84.webp
  https://zelt.app/assets/img/home/hero/sequence/85.webp
  https://zelt.app/assets/img/home/hero/sequence/86.webp
  https://zelt.app/assets/img/home/hero/sequence/87.webp
  https://zelt.app/assets/img/home/hero/sequence/88.webp
  https://zelt.app/assets/img/home/hero/sequence/89.webp
  https://zelt.app/assets/img/home/hero/sequence/90.webp
  https://zelt.app/assets/img/home/hero/sequence/91.webp
  https://zelt.app/assets/img/home/hero/sequence/92.webp
  https://zelt.app/assets/img/home/hero/sequence/93.webp
  https://zelt.app/assets/img/home/hero/sequence/94.webp
  https://zelt.app/assets/img/home/hero/sequence/95.webp
  https://zelt.app/assets/img/home/hero/sequence/96.webp
  https://zelt.app/assets/img/home/hero/sequence/97.webp
  https://zelt.app/assets/img/home/hero/sequence/98.webp
  https://zelt.app/assets/img/home/hero/sequence/99.webp
  https://zelt.app/assets/img/home/hero/sequence/100.webp
  https://zelt.app/assets/img/home/hero/sequence/101.webp
  https://zelt.app/assets/img/home/hero/sequence/102.webp
  https://zelt.app/assets/img/home/hero/sequence/103.webp
  https://zelt.app/assets/img/home/hero/sequence/104.webp
  https://zelt.app/assets/img/home/hero/sequence/105.webp
  https://zelt.app/assets/img/home/hero/sequence/106.webp
  https://zelt.app/assets/img/home/hero/sequence/107.webp
  https://zelt.app/assets/img/home/hero/sequence/108.webp
  https://zelt.app/assets/img/home/hero/sequence/109.webp
  https://zelt.app/assets/img/home/hero/sequence/110.webp
  https://zelt.app/assets/img/home/hero/sequence/111.webp
  https://zelt.app/assets/img/home/hero/sequence/112.webp
  https://zelt.app/assets/img/home/hero/sequence/113.webp
  https://zelt.app/assets/img/home/hero/sequence/114.webp
  https://zelt.app/assets/img/home/hero/sequence/115.webp
  https://zelt.app/assets/img/home/hero/sequence/116.webp
  https://zelt.app/assets/img/home/hero/sequence/117.webp
  https://zelt.app/assets/img/home/hero/sequence/118.webp
   `;
  return data.split("\n")[index];
}

const frameCount = 118;


const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `300% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `300% top`,
});




function animation() {
  if (window.matchMedia("(min-width: 930px)").matches) {

    gsap.registerPlugin(ScrollTrigger);
    gsap.from('#page .page h1,#page .page h4,#page canvas', {
      y: 300,
      duration: 1.5,
      opacity: 0,
      stagger: 0.1,
      delay: 1
    })
  
    gsap.from('#page7>#center>h1 , #page7 .left h1 , #page7 .left h4', {
      scrollTrigger: {
        trigger: "#page7",
        scroller: `#main`,
        start: `top 80%`,
        end: `80% top`,
      },
      y: 50,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
    })
  
    gsap.from(' #page7 video', {
      scrollTrigger: {
        trigger: "#page7",
        scroller: `#main`,
        start: `top 80%`,
        end: `80% top`,
      },
      y: 50,
      duration: 1,
      opacity: 0,
      stagger: 0.5,
      delay: 0
    })
  
    gsap.from('#page8 .left video', {
      scrollTrigger: {
        trigger: "#page8",
        scroller: `#main`,
        start: `top 80%`,
        end: `80% top`,
      },
      x: -100,
      y: 50,
      duration: 1.5,
      opacity: 0,
      stagger: 0.5
    })
  
    gsap.from('#page8 .right h1,#page8 .right h4', {
      scrollTrigger: {
        trigger: "#page8",
        scroller: `#main`,
        start: `top 80%`,
        end: `80% top`,
        toggleActions: 'restart pause restart none'
      },
      y: 50,
      duration: 1,
      opacity: 0,
      stagger: 0.2
    })
    gsap.from('#page9 .left h1, #page9 .left h4', {
      scrollTrigger: {
        trigger: "#page9",
        scroller: `#main`,
        start: `top 50%`,
        end: `80% top`,
        toggleActions: 'restart pause restart none'
      },
      y: 50,
      duration: 1,
      opacity: 0,
      stagger: 0.2
    })
  
    gsap.from('#page9 .right video', {
      scrollTrigger: {
        trigger: "#page9",
        scroller: `#main`,
        start: `top 80%`,
        end: `80% top`,
        toggleActions: 'restart pause restart none'
      },
      x: 100,
      y: -50,
      duration: 1.5,
      opacity: 0,
      stagger: 0.5
    })
  
    gsap.from('#page10 .left .box', {
      scrollTrigger: {
        trigger: '#page10',
        scroller: `#main`,
        start: `top 80%`,
        end: `80% top`,
        toggleActions: 'restart pause restart none'
      },
      x: -500,
      duration: 1,
      stagger: 0.2
    })
  
    gsap.from('#page10 .right h1, #page10 .right h4', {
      scrollTrigger: {
        trigger: "#page10",
        scroller: `#main`,
        start: `top 50%`,
        end: `80% top`,
        toggleActions: 'restart pause restart none'
      },
      y: 50,
      duration: 1,
      opacity: 0,
      stagger: 0.2
    })
  
  
    gsap.from('#page11 .left h1, #page11 .left h4', {
      scrollTrigger: {
        trigger: "#page11",
        scroller: `#main`,
        start: `top 50%`,
        end: `80% top`,
        toggleActions: 'restart pause restart none'
      },
      y: 50,
      duration: 1,
      opacity: 0,
      stagger: 0.2
    })
  
    gsap.from('#page11 .right svg', {
      scrollTrigger: {
        trigger: "#page11",
        scroller: `#main`,
        start: `top 80%`,
        end: `80% top`,
        toggleActions: 'restart pause restart none'
      },
      x: 100,
      duration: 1.5,
      opacity: 0,
      stagger: 0.5
    })
  
    gsap.from('#page12', {
      scrollTrigger: {
        trigger: "#page12",
        scroller: `#main`,
        start: `top 80%`,
        end: `80% top`,
        toggleActions: 'restart pause restart none'
      },
      x: 500,
      duration: 1,
      opacity: 0,
      stagger: 0.5
    })
  
    gsap.from('#page13 h1, #page13 .image', {
      scrollTrigger: {
        trigger: "#page13",
        scroller: `#main`,
        start: `top 80%`,
        end: `80% top`,
        toggleActions: 'restart pause restart none'
      },
      y: 50,
      duration: 1,
      opacity: 0,
      stagger: 0.5
    })
  
    gsap.from('#page14 .item', {
      scrollTrigger: {
        trigger: "#page14",
        scroller: `#main`,
        start: `top 80%`,
        end: `80% top`,
        toggleActions: 'restart pause restart none'
      },
      y: 50,
      duration: .5,
      opacity: 0,
      stagger: 0.1,
      delay: 1
    })
    gsap.from(' #page15 .top', {
      scrollTrigger: {
        trigger: "#page15",
        scroller: `#main`,
        start: `top 80%`,
        end: `80% top`,
        toggleActions: 'restart pause restart none'
      },
      y: -500,
      duration: 1.5,
      opacity: 0,
      stagger: 0.2,
  
    })
    gsap.from('#page15 .left img, #page15 .left i, #page15 .bottom .part, #page15 .right .qr, #page15 .right p', {
      scrollTrigger: {
        trigger: "#page15",
        scroller: `#main`,
        start: `top 80%`,
        end: `80% top`,
        toggleActions: 'restart pause restart none'
      },
      y: 500,
      duration: 1,
      delay:.5,
      opacity: 0,
      stagger: 0.1,
    })
  
    }
}

animation();

//toggle

let toggle = document.querySelector('.toggle');
let link = document.querySelector('.links');
toggle.onclick = function() {
  toggle.classList.toggle('active');
  link.classList.toggle('active');
}

let drop = document.querySelectorAll('.links a');

drop.forEach(function(element) {
  element.onclick = function() {
    element.classList.toggle('active');
    let links = document.querySelector('.links');
    let ul = links.querySelector('ul');
    if (element.classList.contains('active')) {
      ul.style.display = 'block';
      ul.style.height = '0px'; // set initial height to zero
      let height = ul.scrollHeight + 'px'; // get the full height of the element
      ul.style.height = height; // set the height to the full height to trigger the transition
    } else {
      ul.style.height = '0px'; // set the height to zero to trigger the transition
      ul.addEventListener('transitionend', function() {
        ul.style.display = 'none'; // set display to none after transition ends
      }, {once: true});
    }
  }
});



//button hover

let buttons = document.querySelectorAll(".btn");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseenter", (e) => {
    let overlay = document.createElement('b'); //creating a tag(span)
    overlay.classList.add("overlay"); //adding a class inside the span
    e.target.appendChild(overlay); //adding overlay tag inside the anchor tag at in HTML
    let xValue = e.clientX - e.target.offsetLeft; //by this we get perfect value where we will click
    let yValue = e.clientY - e.target.offsetTop; //by this we get perfect value where we will click
    overlay.style.left = xValue + "px"; //changing the position of the overlay according to our clicks on the button
    overlay.style.top = yValue + "px"; //changing the position of the overlay according to our clicks on the button

    // Remove the overlay when the mouse leaves the button
    e.target.addEventListener("mouseleave", () => {
      overlay.remove();
    });
  });
}







function openTab(evt, tabName) {
  var i, tabcontent, tablinks, bullets;
  tabcontent = document.getElementsByClassName("tab-pane");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  bullets = document.getElementsByClassName("bullet");
  for (i = 0; i < bullets.length; i++) {
    bullets[i].className = bullets[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.className += " active";
  var activeBullet = evt.currentTarget.querySelector('.bullet');
  activeBullet.className += " active";
}






//video
const tabLinks = document.querySelectorAll('.tablink');

for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener('click', function () {
    const activePane = document.querySelector('.tab-pane.active');
    const video = activePane.querySelector('video');
    video.currentTime = 0;
    video.play();
  });
}





const video = document.querySelector('.right video');

// Set autoplay to false initially
video.autoplay = false;

// Wait for 2 seconds before setting autoplay to true
setTimeout(() => {
  video.autoplay = true;
}, 2000);






// ----------corsor MouseFollower
const cursor = new MouseFollower({
  el: null,
  container: document.body,
  className: "mf-cursor",
});







$(".items").draggable({
  axis: "x", // only allow horizontal dragging
  scroll: true, // enable auto-scrolling when dragging near the edge
  stop: function (event, ui) {
    var container = $(this).parent(); // get the container element
    var containerWidth = container.width(); // get the container width
    var maxPosition = 0; // set the maximum position to 0
    var minPosition = containerWidth - $(this).outerWidth(); // calculate the minimum position
    if (ui.position.left > maxPosition) {
      // if the dragged element is positioned after the maximum position, reset its position to the maximum position with transition using GSAP
      gsap.to($(this), { duration: 0.2, left: maxPosition, ease: "power2.out" });
    } else if (ui.position.left < minPosition) {
      // if the dragged element is positioned before the minimum position, reset its position to the minimum position with transition using GSAP
      gsap.to($(this), { duration: 0.2, left: minPosition, ease: "power2.out" });
    }
  }
});




var swiper = new Swiper(".mySwiper", {});



