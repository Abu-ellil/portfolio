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

  // ===================== Sticky NavBar ====================
  const header = document.querySelector('header')
header.classList.toggle('sticky', window.scrollY>100)



menuIcon.classList.remove('fa-x')
  navbar.classList.remove('active')
}

// ===================== Scroll reveal ====================

ScrollReveal({
  reset:true,
  distance:'80px',
  duration:2000,
  delay:200
})

ScrollReveal().reveal('.home-content, .heading',{origin:'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'bottom'})
ScrollReveal().reveal('.about-img, .home-content h1',{origin:'left'})
ScrollReveal().reveal('.home-content p, .about-content ',{origin:'right'})


// =================== certifications ===================


const certifications = [
  {
    name: "Certification 3",
    image:
      "https://github.com/Abu-ellil/AbuEllil/blob/main/src/img/certf/1670172004596.png?raw=true",
    issuer: "Programming Foundations: Beyond the Fundamentals",
    date: "December, 2022",
    link: "https://www.linkedin.com/learning/certificates/7e74ef7e58ab08aa3be9d7ab3cf3cb237a2d9527bb68b87b871905c225e6996b",
  },
  {
    name: "Certification 1",
    image:
      "https://github.com/Abu-ellil/AbuEllil/blob/main/src/img/certf/code.png?raw=true",
    issuer: " Build Responsive Real-World Websites with HTML and CSS",
    date: "December 2022",
    link: "https://www.udemy.com/certificate/UC-a731ae10-edd2-4291-906b-0b148d8703f0/",
  },
  {
    name: "Certification 2",
    image:
      "https://github.com/Abu-ellil/AbuEllil/blob/main/src/img/certf/js.png?raw=true",
    issuer: "JavaScript - The Complete Guide 2023 (Beginner + Advanced)",
    date: "February 2023",
    link: "https://www.udemy.com/certificate/UC-11cd8a7a-da8d-4ec4-8dd7-c9545f0edebb/",
  },
  {
    name: "Certification 2",
    image:
      "https://github.com/Abu-ellil/AbuEllil/blob/main/src/img/certf/reactjs.png?raw=true",
    issuer: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    date: "April 2023",
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux",
  },
  {
    name: "Certification 3",
    image:
      "https://github.com/Abu-ellil/AbuEllil/blob/main/src/img/certf/node.png?raw=true",
    issuer: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    date: "May 2023",
    link: "https://www.udemy.com/course/nodejs-the-complete-guide/",
  },
];
      certifications.map((certification) => {
        const certificationCard = document.createElement("div");
        certificationCard.classList.add("certification-card");

        const certificationCardInner = document.createElement("div");
        certificationCardInner.classList.add("certification-card-inner");

        const certificationCardFront = document.createElement("div");
        certificationCardFront.classList.add("certification-card-front");

        const certificationImage = document.createElement("img");
        certificationImage.src = certification.image;
        certificationImage.alt = certification.name;
        certificationCardFront.appendChild(certificationImage);

        const certificationName = document.createElement("h3");
        certificationName.innerText = certification.name;
        certificationCardFront.appendChild(certificationName);

        const certificationCardBack = document.createElement("div");
        certificationCardBack.classList.add("certification-card-back");

        const issuerName = document.createElement("h3");
        issuerName.innerText = certification.issuer;
        certificationCardBack.appendChild(issuerName);

        const certificationDate = document.createElement("p");
        certificationDate.innerText = "Date: " + certification.date;
        certificationCardBack.appendChild(certificationDate);

        const certificationLink = document.createElement("a");
        certificationLink.classList.add('btn')
        certificationLink.href = certification.link;
        certificationLink.target = "_blank";
        certificationLink.rel = "noreferrer";
        certificationLink.innerText = "View Certificate";
        certificationCardBack.appendChild(certificationLink);

        certificationCardInner.appendChild(certificationCardFront);
        certificationCardInner.appendChild(certificationCardBack);
        certificationCard.appendChild(certificationCardInner);
        document.querySelector(".certifications-container").appendChild(certificationCard);
      });

