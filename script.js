const div1 = document.getElementById('libary1');
const div2 = document.getElementById('libary2');

function mudar() {
     div1.style.transform = 'translate(-100%, 0)';
     div2.style.transform = 'translate(0%, 0%)';
     div1.style.pointerEvents = 'none';
     div2.style.pointerEvents = 'initial';
}

function voltar() {
     div1.style.transform = "translate(0, 0)";
     div2.style.transform = "translate(100%, 0)";
     div2.style.pointerEvents = 'none';
     div1.style.pointerEvents = 'initial';
}
