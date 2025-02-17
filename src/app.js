const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const mediaScreen = window.matchMedia('(max-width: 1200px)')
const btnModal = document.getElementById("openModal")
const modal = document.getElementById("contactModal")
const span = document.getElementsByClassName("close")[0];
function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

mediaScreen.onchange = (e) => {
    if (e.matches) {
        $('.tools-container .tools-card').hide()
        $('.tools-container .tools-card:first-child').show()
        
    } else {
        $('.tools-container .tools-card').show()
    }
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}

function openModal() {
    modal.style.display = "block";
    disableScroll()
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    enableScroll()
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      enableScroll()
    }
  }


  window.addEventListener('scroll', reveal);

  function reveal() {
      var reveals = document.querySelectorAll('.reveal');

      for (var i = 0; i < reveals.length; i++) {
          
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
      }
  }