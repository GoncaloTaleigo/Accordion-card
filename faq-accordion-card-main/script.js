let arrows=document.querySelectorAll(".arrow"); //Setas para revelar o conteudo
let answers=document.querySelectorAll(".answer");
let questions=document.querySelectorAll(".question-content p");




for(let i=0;i<arrows.length;i++){
    arrows[i].addEventListener("click",function(){
        arrows[i].classList.toggle("clicked");
        answers[i].classList.toggle("show");
        questions[i].classList.toggle("bold");
    })
}





/*

arrows.forEach(clicked);





function clicked(a,i){
    a.addEventListener("click",function(){
        arrows[i].classList.toggle("clicked");
        answers[i].classList.toggle("show");
        questions[i].classList.toggle("bold");
    })
}


*/