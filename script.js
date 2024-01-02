let userscore=0,compscore=0;
let img1,img2;
let computers=document.querySelector(".compscore");
let users=document.querySelector(".userscore");
let choice=document.querySelectorAll(".image");
let output=document.querySelector(".output");
let message=document.querySelector(".message");
let your=document.querySelector(".your");
let compu=document.querySelector(".computers");
let view=document.querySelector(".view");

choice.forEach((option)=>{
    option.addEventListener("click",()=>{
        let userc=option.getAttribute("id");
        img1=option.childNodes[0].getAttribute("src");
        view.style.display="flex";
        play(userc);
    })
})

const getcompc=()=>{
    const a=["rock","paper","scissor"];
    return(a[Math.floor(Math.random()*3)]);
}
const play=(userc)=>{
    let computerc=getcompc();
    img2=computerc+".png";
    

    if(userc===computerc)
    {
        draw(userc,computerc);
    }
    else{
        notdraw(userc,computerc);
    }
    
}
const draw=(userc,computerc)=>{
    output.innerText="Its a Draw! Play Again"
    message.style.backgroundColor="rgb(5, 80, 118)";
    your.setAttribute("src",img1);
    compu.setAttribute("src",img2);
    //document.querySelector("uc").append(im1);
}
const userwin=()=>{
    userscore++;
    users.innerText=userscore;
    output.innerText="Congratulation! You won";
    message.style.backgroundColor="Green";
    your.setAttribute("src",img1);
    compu.setAttribute("src",img2);
}
const compwin=()=>{
    compscore++;
    computers.innerText=compscore;
    output.innerText="OHH!!You Lost"
    message.style.backgroundColor="Red";
    your.setAttribute("src",img1);
    compu.setAttribute("src",img2);
}
const notdraw=(userc,computerc)=>{
    if(userc==="rock"&&computerc==="paper")
    compwin();
    if(userc==="rock"&&computerc==="scissor")
    userwin();
    if(userc==="paper"&&computerc==="rock")
    userwin();
    if(userc==="paper"&&computerc==="scissor")
    compwin();
    if(userc==="scissor"&&computerc==="paper")
    userwin();
    if(userc==="scissor"&&computerc==="rock")
    compwin();
}
