const menuBtn=document.getElementById("menuBtn");
const navMenu=document.getElementById("navMenu");
menuBtn.addEventListener("click",()=>navMenu.classList.toggle("open"));
document.querySelectorAll("#navMenu a").forEach(a=>a.addEventListener("click",()=>navMenu.classList.remove("open")));

const photos=["images/meenakshi-1.jpg","images/meenakshi-2.jpg","images/meenakshi-3.jpg","images/meenakshi-4.jpg","images/meenakshi-5.jpg"];
let current=0;
const lightbox=document.getElementById("lightbox"), image=document.getElementById("lightboxImage");
function showPhoto(i){current=(i+photos.length)%photos.length;image.src=photos[current];lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false")}
document.querySelectorAll(".gallery-item").forEach(item=>item.addEventListener("click",()=>showPhoto(Number(item.dataset.index))));
document.getElementById("closeLightbox").addEventListener("click",()=>{lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true")});
document.getElementById("prevPhoto").addEventListener("click",()=>showPhoto(current-1));
document.getElementById("nextPhoto").addEventListener("click",()=>showPhoto(current+1));
lightbox.addEventListener("click",e=>{if(e.target===lightbox)lightbox.classList.remove("open")});
document.addEventListener("keydown",e=>{if(!lightbox.classList.contains("open"))return;if(e.key==="Escape")lightbox.classList.remove("open");if(e.key==="ArrowLeft")showPhoto(current-1);if(e.key==="ArrowRight")showPhoto(current+1)});

document.querySelectorAll("[data-coming]").forEach(btn=>btn.addEventListener("click",()=>alert("Project photos and detailed information will be added soon.")));
document.querySelectorAll(".view-project").forEach(btn=>btn.addEventListener("click",()=>document.getElementById("gallery").scrollIntoView({behavior:"smooth"})));

emailjs.init({ publicKey: "OCQwLVk_FoW4bpXZ-" });

document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  const form=e.target;
  const msgEl=document.getElementById("formMessage");
  const name=form.name.value.trim();
  const phone=form.phone.value.trim();
  const email=form.email.value.trim();
  const message=form.message.value.trim();

  msgEl.textContent="Sending...";

  emailjs.send("service_vi6jl4m","template_lt6shzl",{
    name:name,
    phone:phone,
    email:email||"-",
    message:message
  })
  .then(()=>{
    msgEl.textContent="Thank you! Your enquiry has been sent. We will get back to you soon.";
    form.reset();
  })
  .catch(()=>{
    msgEl.textContent="Sorry, something went wrong. Please call or WhatsApp us directly.";
  });
});
