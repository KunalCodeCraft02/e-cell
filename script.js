var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section1",
      // markers:true,
      // scroller:"body",
      start: "top 80%",
  
      scrub: true,
    }
  })
  
  
  
  
  
  tl1.from("#section1", {
    x: -300,
    opacity: 0,
    duration: 0.4,
  
  })
  
  
  
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      // markers: true,
      // scroller:"body",
      start: "top 80%",
      scrub: true,
    }
  })
  
  tl2.from("#section2", {
    x: -300,
    opacity: 0,
    duration: 0.4,
  })
  
  
  var t3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      // markers: true,
      // scroller:"body",
      start: "top 80%",
      scrub: true,
    }
  })
  
  
  
  tl2.from("#section3", {
    x: -300,
    opacity: 0,
    duration: 0.4,
  })
  
  
  
  var tl4 = gsap.timeline();
  
  
  tl4.from(".nav-list li",{
    y:20,
    opacity:0,
    duration:1,
    stagger:0.2
  },'same')
  
  tl4.from(".logo img",{
    opacity:0,
    duration:0.9
  },'same')
  
  
  tl4.from(".firsthalf p",{
  x:-300,
  duration:1,
  opacity:0,
  
  },'same')
  
  tl4.from(".secondhalf img",{
  duration:2,
  opacity:0,
  
  },'same')
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // window.addEventListener('load', () => {
  //   const fixedDiv = document.querySelector('.fixed');
    
  //   setTimeout(() => {
  //       fixedDiv.style.display = 'none';
  //   }, 5000); 
  // });
  
  
  
  
  
  