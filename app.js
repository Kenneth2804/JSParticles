const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
	constructor(x,y,color){
		this.x = x;
		this.y = y;
		this.color = color;
		this.size = Math.random() * 5 + 1;
		this.speedX = Math.random() * 3 - 1.5;
		this.speedY = Math.random() * 3 - 1.5;
	}
	update(){
		this.x += this.speedX;
		this.y += this.speedY;
		if (this.size > 0.2) this.size -= 0.1;
			}
		draw(){
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fill();
		}
}

function createParticles(x,y) {
	const particleCount = 20;
	const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

	for (let i = 0; i< particleCount; i++) {
		particles.push(new Particle(x,y,color));
	}
}

function animate() {
	
	ctx.clearRect(0,0, canvas.width, canvas.height);
	for (const particle of particles) {
		particle.update();
		particle.draw();
	}
	particles.forEach((particle, index) =>{
		if (particle.size <= 0.3) {
			particles.splice(index, 1);
		}
	})
	requestAnimationFrame(animate);
}
	canvas.addEventListener("mousemove", (event) =>{
		createParticles(event.clientX, event.clientY)
	})


animate();


