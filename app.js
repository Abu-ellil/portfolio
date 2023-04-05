// ===================== Scrolling effict ====================
const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle('fa-x')
  navbar.classList.toggle('active')
}
// ===================== Scrolling effict ====================

const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('header nav a')

window.onscroll = ()=>{
  sections.forEach((sec)=>{
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if(top >= offset && top < offset + height){
      navLinks.forEach(link=>{
        link.classList.remove('active')
        document.querySelector(`header nav a[href='#${id}']`)?.classList.add('active')


      })
    }

  })
  const header = document.querySelector('header')
header.classList.toggle('sticky', window.scrollY>100)
menuIcon.classList.remove('fa-x')
  navbar.classList.remove('active')
}

// ===================== Sticky NavBar ====================
















