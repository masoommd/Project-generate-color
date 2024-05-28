let btn=document.querySelector('button');
btn.addEventListener('click', function(){
    let randomColor=generateRandomColor();
    let h3=document.querySelector('h3');
    let div=document.querySelector('div');
    h3.innerText=randomColor;
    div.style.backgroundColor=randomColor;
});

function generateRandomColor(){
    let red= Math.floor(Math.random()*256);
    let green= Math.floor(Math.random()*256);
    let blue= Math.floor(Math.random()*256);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}