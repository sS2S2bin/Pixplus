const depthZeroTrigger = document.querySelector('.depth0 .direcbox');
const depthOneTrigger = document.querySelectorAll('.depth1 .direcbox');
const depthOneEls = document.querySelector('.depth1');
const depthTwoEls = document.querySelector('.depth2');
const add_newproj = document.querySelector('.add_newproj');
// const add_newpixple = document.querySelector('.add_newpixple');


let isHideOne = false;
let isHideTwo = false;
depthZeroTrigger.addEventListener('click', function(){
  isHideOne = !isHideOne;
  if(isHideOne){
    depthOneEls.style.display = 'none';
  }else{
    depthOneEls.style.display = 'block';
  }
})
depthOneTrigger[1].addEventListener('click', function(){
  isHideTwo = !isHideTwo;
  if(isHideTwo){
    depthTwoEls.style.display = 'none';
  }else{
    depthTwoEls.style.display = 'block';
  }
})
add_newproj.addEventListener('click',function (){
  console.log('click add new!');
})
// add_newpixple.addEventListener('click',function () {

// })
