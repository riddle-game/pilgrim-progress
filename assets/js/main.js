/**
* Template Name: UpConstruction
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
  
  /**
   * Scroll top button
   */
    const scrollTop = document.querySelector('.scroll-top');
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);

  /**
   * Scroll bottom button
   */
    const scrollBottom = document.querySelector('.scroll-bottom');
    const togglescrollBottom = function() {
      window.scrollY > 100 ? scrollBottom.classList.add('active') : scrollBottom.classList.remove('active');
    }
    window.addEventListener('load', togglescrollBottom);
    document.addEventListener('scroll', togglescrollBottom);

    // const moveScroll = function(position) {
    //   this.addEventListener('click', window.scrollTo(0, position));
    // }
