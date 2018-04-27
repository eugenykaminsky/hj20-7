let inputall = document.querySelectorAll('input'),
    undone = document.querySelector('.undone'),
    done = document.querySelector('.done');

Array.from(inputall).forEach(item => item.addEventListener('click', testLabel));

function testLabel() { 
  (this.checked) ? done.appendChild(this.parentNode) : undone.appendChild(this.parentNode);
} 