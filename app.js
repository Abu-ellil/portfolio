// ===================== Scrolling effict ====================
const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle('fa-x')
  navbar.classList.toggle('active')
}
// ===================== Type effict ====================

var typed = new Typed("#element", {
  strings: ["MERN Stack Developer", "Web Developer.", "Coder."],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
});
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
      name: "HTML&CSS",
      image: `./assets/code.png`,
      issuer: " Build Responsive Real-World Websites with HTML and CSS",
      date: "December 2022",
      link: "https://drive.google.com/file/d/1rUQQgkE6BG0yyrmEUQkPgqeZUTSCuDK4/view?usp=sharing",
    },
    {
      name: "JavaScript-the complete guide",
      image: `./assets/js.png`,
      issuer: "JavaScript - The Complete Guide 2023 (Beginner + Advanced)",
      date: "February 2023",
      link: "https://drive.google.com/file/d/10n6FlNxcbwbqfYRuJfe6i5FRP8JzYc_8/view?usp=sharing",
    },

    {
      name: "React Certification",
      image: `./assets/reactjs.png`,
      issuer: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      date: "May 2023",
      link: "https://drive.google.com/file/d/1-KoVotMEpnenKBM0sfy8fv6AeBqT8qI5/view?usp=sharing",
    },
    {
      name: "NodeJS Certification",
      image: `./assets/node.png`,
      issuer: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      date: "July 2023",
      link: "https://drive.google.com/file/d/18hOHTuJmQqhBXYdekO1LpjIK41EZ2cPN/view?usp=sharing",
    },
    {
      name: "20 JavaScript Projects",
      image: `./assets/UC-d39716ad-be3a-4d23-9b0b-e8c039dd882e.jpg`,
      issuer: "20 web projects with vanilla javascript",
      date: "March 2023",
      link: "https://drive.google.com/file/d/1ErdMDznMUC0rVXVYvldJfe5CmdHeRxVF/view?usp=sharing",
    },

    {
      name: "MERN Stack",
      image: `./assets/UC-7665bdcb-5d90-4b97-8c13-347e181bc047.jpg`,
      issuer: "MERN Stack Course - MongoDB, Express, React and NodeJS",
      date: "July, 2023",
      link: "https://drive.google.com/file/d/1Jgq-LmHeD5DUxtB3GvW7hsNxuHn0AQ6J/view?usp=sharing",
    },
    {
      name: "Beyond the Fundamentals",
      image: `./assets/1670172004596.png`,
      issuer: "Programming Foundations: Beyond the Fundamentals",
      date: "December, 2022",
      link: "https://drive.google.com/file/d/1B19ssRiWd9aIYg20eMv_pVnBToEAi8gS/view?usp=sharing",
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



      // SERVICES
      // SERVICES
      // SERVICES
      // SERVICES

function toggleShowMore(e) {
  e.preventDefault();
  const content = e.target.parentElement.querySelector("p");
  const btn = e.target;
  const isExpanded = content.dataset.expanded === "true";

  if (isExpanded) {
    content.innerText = content.dataset.partialText;
    btn.textContent = "Read More";
    content.dataset.expanded = "false";
  } else {
    content.innerText = content.dataset.fullText;
    btn.textContent = "Read Less";
    content.dataset.expanded = "true";
  }
}

function renderServices() {
  const servicesContainer = document.querySelector(".services-container");
  servicesContainer.innerHTML = "";

  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Full-Stack Web Application Development",
      content: `Provide end-to-end web application development services using the MERN stack. This includes creating scalable and responsive web applications with a strong backend and dynamic frontend. Services would include tasks such as database design and integration, API development, server-side logic implementation, user interface development, and deployment.`,
    },
    {
      icon: "fa-solid fa-paintbrush",
      title: "RESTful API Development",
      content: `Specialize in developing RESTful APIs using the MERN stack. This involves creating server-side endpoints that facilitate communication between the frontend and backend of an application. Services would include designing the API structure, implementing CRUD operations, handling authentication and authorization, and ensuring data security.`,
    },
    {
      icon: "fa-solid fa-chart-simple",
      title: "Single-Page Application (SPA) Development",
      content: `Focus on developing Single-Page Applications using the MERN stack. SPAs provide a seamless user experience by dynamically updating content on a single web page without requiring page reloads. Services would involve leveraging React to create interactive user interfaces, handling client-side rendering, and utilizing Express.js and Node.js to build a robust backend that supports the SPA.`,
    },
  ];

  services.forEach((service) => {
    const serviceBox = document.createElement("div");
    serviceBox.classList.add("services-box");
    serviceBox.setAttribute("data-aos", "flip-left");

    const icon = document.createElement("i");
    service.icon.split(" ").forEach((className) => {
      icon.classList.add(className);
    });
    serviceBox.appendChild(icon);

    const title = document.createElement("h3");
    title.innerText = service.title;
    serviceBox.appendChild(title);

    const content = document.createElement("p");
    content.innerText = service.content.slice(0, 100) + "...";
    content.dataset.partialText = service.content.slice(0, 100) + "...";
    content.dataset.fullText = service.content;
    content.dataset.expanded = "false";
    serviceBox.appendChild(content);

    const btn = document.createElement("a");
    btn.href = "#";
    btn.classList.add("btn");
    btn.addEventListener("click", toggleShowMore);
    btn.textContent = "Read More";
    serviceBox.appendChild(btn);

    servicesContainer.appendChild(serviceBox);
  });
}

let showMore = false;
renderServices();
