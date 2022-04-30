const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

c.fillRect(0,0, canvas.width, canvas.height);

class Sprite {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
        this.width = 50;
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height >= canvas.height || this.position.y <= 0)
        {
            this.velocity.y = -this.velocity.y;
        }

        if (this.position.x + this.width >= canvas.width || this.position.x <= 0)
        {
            this.velocity.x = -this.velocity.x;
        }
    }
}


const player = new Sprite({
    position:{
        x: 0,
        y: 0
    },
    velocity:{
        x: 0,
        y: 10
    }
})

const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity:{
        x: 10,
        y: 0
    }
})




/* c.beginPath();
c.moveTo(0,0);
c.lineTo(600,200);
c.lineWidth = 2;
c.strokeStyle = 'green';
c.stroke();*/


console.log(player);

function clearCanvas(){
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
}


function animate()
{
    window.requestAnimationFrame(animate);

    clearCanvas();

    player.update();
    enemy.update();
}

animate();
