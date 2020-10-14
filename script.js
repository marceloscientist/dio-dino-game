const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let position = 0;

let isJumping = false;
function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if(!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20)
    } else {
        position += 20;
        dino.style.bottom = position + 'px';
    }
    }, 20)
}


function createCactus() {
    const cactus = document.createElement('div');
    let cactusPos = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = cactusPos + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(()=> {
        if(cactusPos < -60) {
            clearInterval(leftInterval)
            background.removeChild(cactus)
        } else if(cactusPos > 0 && cactusPos < 60 && position < 60) {
            clearInterval(leftInterval)
            document.body.innerHTML = '<h1>Fim de Jogo</h1>'
        } 
        else {
            cactusPos -= 10;
            cactus.style.left = cactusPos + 'px';          
        }
    }, 20)

    setTimeout(createCactus, randomTime)
}

createCactus();
document.addEventListener('keyup', handleKeyUp)