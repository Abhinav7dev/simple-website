const triangle = document.querySelector('.ri-play-large-line');
let rotation = 0;

triangle.addEventListener('mouseover', () => {
  rotation += 120;
  triangle.style.transform = `rotate(${rotation}deg)`;
});
