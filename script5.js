const sound1 = document.getElementById('sound1');
const sound2 = document.getElementById('sound2');
const sound3 = document.getElementById('sound3');

const hoverDiv1 = document.getElementById('div1');
const hoverDiv2 = document.getElementById('div2');
const hoverDiv3 = document.getElementById('div3');

hoverDiv1.addEventListener('mouseenter', () => {
    sound1.currentTime = 0;
    sound1.play();
});
hoverDiv1.addEventListener('mouseleave', () => {
    sound1.pause();
});

hoverDiv2.addEventListener('mouseenter', () => {
    sound2.currentTime = 0;
    sound2.play();
});
hoverDiv2.addEventListener('mouseleave', () => {
    sound2.pause();
});

hoverDiv3.addEventListener('mouseenter', () => {
    sound3.currentTime = 0;
    sound3.play();
});
hoverDiv3.addEventListener('mouseleave', () => {
    sound3.pause();
});