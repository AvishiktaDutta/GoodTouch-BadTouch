const hoverDiv1 = document.getElementById('seven2');
const hoverDiv2 = document.getElementById('three3');
const hoverDiv3 = document.getElementById('ten2');
const hoverDiv4 = document.getElementById('nine2');

const goodDiv1 = document.getElementById('good1');
const goodDiv2 = document.getElementById('good2');
const goodDiv3 = document.getElementById('good3');
const goodDiv4 = document.getElementById('good4');
const goodDiv5 = document.getElementById('good5');
const goodDiv6 = document.getElementById('good6');
const goodDiv7 = document.getElementById('good7');
const goodDiv8 = document.getElementById('good8');
const goodDiv9 = document.getElementById('good9');
const goodDiv10 = document.getElementById('good10');
const goodDiv11 = document.getElementById('good11');
const goodDiv12 = document.getElementById('good12');
const goodDiv13 = document.getElementById('good13');
const goodDiv14 = document.getElementById('good14');

const badTouchCloud = document.getElementById('cloud-message2');

const goodTouchCloud = document.getElementById('cloud-message');

const sound1 = document.getElementById('sound1');
const sound2 = document.getElementById('sound2');

// When mouse enters, hide the cloud
hoverDiv1.addEventListener('mouseenter', () => {
    badTouchCloud.style.opacity = '1';
    badTouchCloud.style.color = 'red';
    sound2.currentTime = 0;
    sound2.play();
    hoverDiv1.style.backgroundColor = 'red';
    hoverDiv1.style.opacity = '50%';
    hoverDiv1.style.borderRadius = '45%';
});

// When mouse leaves, show the cloud again
hoverDiv1.addEventListener('mouseleave', () => {
    badTouchCloud.style.opacity = '0';
    hoverDiv1.style.opacity = 0;
    sound2.pause();
});

hoverDiv2.addEventListener('mouseenter', () => {
    badTouchCloud.style.opacity = '1';
    badTouchCloud.style.color = 'red';
    sound2.currentTime = 0;
    sound2.play();
    hoverDiv2.style.backgroundColor = 'red';
    hoverDiv2.style.opacity = '50%';
    hoverDiv2.style.borderRadius = '45%';
});


hoverDiv2.addEventListener('mouseleave', () => {
    badTouchCloud.style.opacity = '0';
    hoverDiv2.style.opacity = 0;
    sound2.pause();
});

hoverDiv3.addEventListener('mouseenter', () => {
    badTouchCloud.style.opacity = '1';
    badTouchCloud.style.color = 'red';
    sound2.currentTime = 0;
    sound2.play();
    hoverDiv3.style.backgroundColor = 'red';
    hoverDiv3.style.opacity = '50%';
    hoverDiv3.style.borderRadius = '45%';
});


hoverDiv3.addEventListener('mouseleave', () => {
    badTouchCloud.style.opacity = '0';
    hoverDiv3.style.opacity = 0;
    sound2.pause();
});

hoverDiv4.addEventListener('mouseenter', () => {
    badTouchCloud.style.opacity = '1';
    badTouchCloud.style.color = 'red';
    sound2.currentTime = 0;
    sound2.play();
    hoverDiv4.style.backgroundColor = 'red';
    hoverDiv4.style.opacity = '50%';
    hoverDiv4.style.borderRadius = '45%';
});


hoverDiv4.addEventListener('mouseleave', () => {
    badTouchCloud.style.opacity = '0';
    hoverDiv4.style.opacity = 0;
    sound2.pause();
});

//-----------------------------------------------------------


goodDiv1.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv1.style.backgroundColor = 'green';
    goodDiv1.style.opacity = '50%';
    goodDiv1.style.borderRadius = '45%';
});
goodDiv1.addEventListener('mouseleave', () => {
     goodTouchCloud.style.opacity = '0';
     goodDiv1.style.opacity = 0;
     sound1.pause();
});

goodDiv2.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv2.style.backgroundColor = 'green';
    goodDiv2.style.opacity = '50%';
    goodDiv2.style.borderRadius = '45%';
});
goodDiv2.addEventListener('mouseleave', () => {
     goodTouchCloud.style.opacity = '0';
     goodDiv2.style.opacity = 0;
     sound1.pause();
});

goodDiv3.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv3.style.backgroundColor = 'green';
    goodDiv3.style.opacity = '50%';
    goodDiv3.style.borderRadius = '45%';
});
goodDiv3.addEventListener('mouseleave', () => {
    goodTouchCloud.style.opacity = '0';
    goodDiv3.style.opacity = 0;
    sound1.pause();
});

goodDiv4.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv4.style.backgroundColor = 'green';
    goodDiv4.style.opacity = '50%';
    goodDiv4.style.borderRadius = '45%';
});
goodDiv4.addEventListener('mouseleave', () => {
    goodTouchCloud.style.opacity = '0';
    goodDiv4.style.opacity = 0;
    sound1.pause();
});

goodDiv5.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv5.style.backgroundColor = 'green';
    goodDiv5.style.opacity = '50%';
    goodDiv5.style.borderRadius = '45%';
});
goodDiv5.addEventListener('mouseleave', () => {
     goodTouchCloud.style.opacity = '0';
    goodDiv5.style.opacity = 0;
    sound1.pause();
});

goodDiv6.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv6.style.backgroundColor = 'green';
    goodDiv6.style.opacity = '50%';
    goodDiv6.style.borderRadius = '45%';
});
goodDiv6.addEventListener('mouseleave', () => {
    goodTouchCloud.style.opacity = '0';
    goodDiv6.style.opacity = 0;
    sound1.pause();
    
});

goodDiv7.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv7.style.backgroundColor = 'green';
    goodDiv7.style.opacity = '50%';
    goodDiv7.style.borderRadius = '45%';
});
goodDiv7.addEventListener('mouseleave', () => {
     goodTouchCloud.style.opacity = '0';
     goodDiv7.style.opacity = 0;
     sound1.pause();
});

goodDiv8.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv8.style.backgroundColor = 'green';
    goodDiv8.style.opacity = '50%';
    goodDiv8.style.borderRadius = '45%';
});
goodDiv8.addEventListener('mouseleave', () => {
     goodTouchCloud.style.opacity = '0';
     goodDiv8.style.opacity = 0;
     sound1.pause();
});

goodDiv9.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv9.style.backgroundColor = 'green';
    goodDiv9.style.opacity = '50%';
    goodDiv9.style.borderRadius = '45%';
});
goodDiv9.addEventListener('mouseleave', () => {
     goodTouchCloud.style.opacity = '0';
     goodDiv9.style.opacity = 0;
      sound1.pause();
});

goodDiv10.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv10.style.backgroundColor = 'green';
    goodDiv10.style.opacity = '50%';
    goodDiv10.style.borderRadius = '45%';
});
goodDiv10.addEventListener('mouseleave', () => {
     goodTouchCloud.style.opacity = '0';
     goodDiv10.style.opacity = 0;
      sound1.pause();
});
goodDiv11.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv11.style.backgroundColor = 'green';
    goodDiv11.style.opacity = '50%';
    goodDiv11.style.borderRadius = '45%';
});
goodDiv11.addEventListener('mouseleave', () => {
     goodTouchCloud.style.opacity = '0';
     goodDiv11.style.opacity = 0;
      sound1.pause();
});
goodDiv12.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv12.style.backgroundColor = 'green';
    goodDiv12.style.opacity = '50%';
    goodDiv12.style.borderRadius = '45%';
});
goodDiv12.addEventListener('mouseleave', () => {
     goodTouchCloud.style.opacity = '0';
     goodDiv12.style.opacity = 0;
      sound1.pause();
});
goodDiv13.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv13.style.backgroundColor = 'green';
    goodDiv13.style.opacity = '50%';
    goodDiv13.style.borderRadius = '45%';
});
goodDiv13.addEventListener('mouseleave', () => {
     goodTouchCloud.style.opacity = '0';
      goodDiv13.style.opacity = 0;
       sound1.pause();
});

goodDiv14.addEventListener('mouseenter', () => {
    goodTouchCloud.style.opacity = '1';
    goodTouchCloud.style.color = 'green';
    sound1.currentTime = 0;
    sound1.play();
    goodDiv14.style.backgroundColor = 'green';
    goodDiv14.style.opacity = '50%';
    goodDiv14.style.borderRadius = '45%';
});
goodDiv14.addEventListener('mouseleave', () => {
     goodTouchCloud.style.opacity = '0';
      goodDiv14.style.opacity = 0;
       sound1.pause();
});