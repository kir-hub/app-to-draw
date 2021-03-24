function setup() {
    createCanvas(400, 500);
  }

let color = 'black'
let weight = 5

document.querySelector('.w1').addEventListener('click',function(){
    weight = 1
})
document.querySelector('.w2').addEventListener('click',function(){
    weight = 2
})
document.querySelector('.w5').addEventListener('click',function(){
    weight = 5
})
document.querySelector('.w10').addEventListener('click',function(){
    weight = 10
})
document.querySelector('.red').addEventListener('click',function(){
    color = 'red'
})
document.querySelector('.blue').addEventListener('click',function(){
    color = 'blue'
})
document.querySelector('.green').addEventListener('click',function(){
    color = 'green'
})
document.querySelector('.purple').addEventListener('click',function(){
    color = 'purple'
})
document.querySelector('.yellow').addEventListener('click',function(){
    color = 'yellow'
})
document.querySelector('.orange').addEventListener('click',function(){
    color = 'orange'
})
document.querySelector('.black').addEventListener('click',function(){
    color = 'black'
})
document.querySelector('.white').addEventListener('click',function(){
    color = 'white'
})
document.querySelector('.clear').addEventListener('click',function(){
    window.location.reload();
    return false;
})
  
  function draw() {
    if (mouseIsPressed) {
      stroke(color)//rgb
      strokeWeight(weight);
      line(mouseX, mouseY, pmouseX, pmouseY);      
    } 
  }