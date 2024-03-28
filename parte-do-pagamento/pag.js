
const gallery = document.getElementById('gallery')
window.onmousemove = e => {
    const mouseX = e.clientX,
    mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth,
          yDecimal = mouseY / window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth,
          maxY = gallery.offsetHeight - window.innerHeight;

    const panX = maxX * xDecimal * -0.3,
          panY = maxY * yDecimal * -0.3;

   gallery.animate({
       transform: `translate(${panX}px, ${panY}px)`
     }, {
         duration: 18000,
         fill: "forwards",
         easing: "ease"
   })
}

