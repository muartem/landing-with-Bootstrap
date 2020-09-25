function getTop(elem) {
    const box = elem.getBoundingClientRect();
    return  box.top + pageYOffset;
  }
  const scroll = window.addEventListener('scroll', function(){
    const nav = document.getElementById('nav');
    let main = document.getElementById('main');
    let contact = document.getElementById('contact');
      if( (pageYOffset > getTop(main)) && (pageYOffset < getTop(contact))){  
        nav.classList.add('scrolled')
      } else{
        nav.classList.remove('scrolled')
      }

  })