const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");


function resize(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize",resize);



/* STARS */

let stars=[];

for(let i=0;i<350;i++){

stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
alpha:Math.random()
});

}


/* METEORS */

let meteors=[];

function createMeteor(){

meteors.push({
x:Math.random()*canvas.width,
y:-20,
len:Math.random()*80+20,
speed:8
});

}

setInterval(createMeteor,2000);



/* CURSOR SPARKLES */

let particles=[];

window.addEventListener("mousemove",(e)=>{

for(let i=0;i<4;i++){

particles.push({
x:e.clientX,
y:e.clientY,
size:Math.random()*2+1,
life:40
});

}

});



/* ANIMATION */

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);


/* STARS */

stars.forEach(s=>{

ctx.beginPath();
ctx.arc(s.x,s.y,s.size,0,Math.PI*2);
ctx.fillStyle=`rgba(150,220,255,${s.alpha})`;
ctx.fill();

});


/* METEORS */

for(let i=0;i<meteors.length;i++){

let m=meteors[i];

ctx.strokeStyle="white";
ctx.lineWidth=2;

ctx.beginPath();
ctx.moveTo(m.x,m.y);
ctx.lineTo(m.x-m.len,m.y-m.len);
ctx.stroke();

m.x+=m.speed;
m.y+=m.speed;

if(m.y>canvas.height){
meteors.splice(i,1);
i--;
}

}


/* CURSOR PARTICLES */

for(let i=0;i<particles.length;i++){

let p=particles[i];

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

ctx.fillStyle="white";
ctx.shadowColor="#6be9ff";
ctx.shadowBlur=15;

ctx.fill();

p.life--;
p.size*=0.96;

if(p.life<=0){
particles.splice(i,1);
i--;
}

}


requestAnimationFrame(animate);

}

animate();



/* BUTTON SPARKLE EFFECT */

document.querySelectorAll(".premium-btn").forEach(button=>{

button.addEventListener("click",(e)=>{

for(let i=0;i<20;i++){

const sparkle=document.createElement("span");
sparkle.classList.add("sparkle");

const x=(Math.random()*140-70)+"px";
const y=(Math.random()*140-70)+"px";

sparkle.style.setProperty("--x",x);
sparkle.style.setProperty("--y",y);

sparkle.style.left=e.offsetX+"px";
sparkle.style.top=e.offsetY+"px";

button.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},700);

}

});

});

window.onload = () => {
showCategory("education");   // default tab
};
/* SHOW ALL RESUME SECTIONS (NO TABS) */

window.onload = () => {
const cards = document.querySelectorAll(".resume-card");
cards.forEach(card=>{
card.style.display = "block";
});
};
///// Moving skills
const container = document.querySelector(".skills-container");

const scrollAmount = 300;

document.querySelector(".arrow.right").addEventListener("click", () => {

if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
container.scrollTo({
left: 0,
behavior: "smooth"
});
} else {
container.scrollBy({
left: scrollAmount,
behavior: "smooth"
});
}

});

document.querySelector(".arrow.left").addEventListener("click", () => {

if (container.scrollLeft <= 0) {
container.scrollTo({
left: container.scrollWidth,
behavior: "smooth"
});
} else {
container.scrollBy({
left: -scrollAmount,
behavior: "smooth"
});
}

});
// contact me
document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("R80jhN8g2_hCvk0Ri");

  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_39ue8up", "template_5mmb0q4", this)
      .then(() => {

        // ✅ show toast
        toast.classList.add("show");

        // hide after 3 sec
        setTimeout(() => {
          toast.classList.remove("show");
        }, 3000);

        form.reset();

      })
      .catch(err => {
        console.log(err);
        alert("Failed to send message ❌");
      });
  });

});
// scroll to top
document.getElementById("backToTop").addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});