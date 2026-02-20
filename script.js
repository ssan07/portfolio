const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
});

document.querySelector(".btn").addEventListener("click",()=>{
    document.querySelector("#projects").scrollIntoView({behavior:"smooth"});
});
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("Message sent successfully!");
});

const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress");

window.addEventListener("scroll",()=>{
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos=window.innerHeight;
    if(sectionPos < screenPos -100){
        progressBars.forEach(bar=>{
            bar.style.width=bar.classList.contains("c")?"85%":
            bar.classList.contains("python")? "90%" :
            bar.classList.contains("cpp")?"80%":"70%";
        });
    }
});
const sections= document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
    sections.forEach(section=>{
        const sectionTop =section.getBoundingClientRect().top;
        const screenHeight =window.innerHeight;
        if(sectionTop<screenHeight -100){
            section.classList.add("show");
        }
    })
})