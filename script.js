
    const swiper = new Swiper('.main-swiper', {
      
      slidesPerView:1,
      spaceBetween : 10,
      pagination: {
      el: '.swiper-pagination',
    },
    
    breakpoints: {
        
          744: {
            slidesPerView: 3, 
          },
          375: {
            slidesPerView: 2,  
          },
    },
});