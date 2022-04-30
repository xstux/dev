const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

c.fillRect(0,0, canvas.width, canvas.height);

class Sprite {
    constructor(position){
        this.position = position;
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 50, 150);
    }
}


const player = new Sprite({
    x: 0,
    y: 0,
})

const enemy = new Sprite({
    x: 400,
    y: 100,
})

player.draw();
enemy.draw();


c.beginPath();
c.moveTo(0,0);
c.lineTo(600,200);
c.lineWidth = 2;
c.strokeStyle = 'green';
c.stroke();


console.log(player);
