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
let mode=document.querySelector("button");
let body=document.querySelector("body");
choice.forEach((option)=>{
    option.addEventListener("click",()=>{
        let userc=option.getAttribute("id");
        img1=option.childNodes[0].getAttribute("src");
        view.style.display="flex";
        play(userc);
    })
})
choice.forEach((option)=>{
    option.childNodes[0].addEventListener("mouseover",()=>{
        if(body.style.backgroundColor==="white"){
            option.childNodes[0].style.filter="drop-shadow(0 0 10px navy)";
            //option.childNodes[0].style.transition="0.2s ease-in;"
        }
        else{
            option.childNodes[0].style.filter="drop-shadow(0 0 10px white)";
           // option.childNodes[0].style.transition="0.5s ease-in;"
        }
    })
    option.childNodes[0].addEventListener("mouseout",()=>{
        option.childNodes[0].style.filter="";
        option.childNodes[0].style.transition="transition: 0.2s ease-in;"
    })
})

mode.addEventListener("click",()=>{
    if(body.style.backgroundColor==="white")
    {
        mode.innerHTML=`<span class="material-symbols-outlined">
        light_mode
        </span>`;
        mode.classList.remove("light");
        mode.classList.add("dark");
        mode.style.color="white";
        body.style.backgroundColor="#1a1625";
        body.style.color="white";
        //console.log("Dark");
    }
    else{
        mode.innerHTML=`<span class="material-symbols-outlined">
        dark_mode
        </span>`;
        mode.classList.add("light");
        mode.classList.remove("dark");
        mode.style.color="black";
        body.style.backgroundColor="white";
        body.style.color="black";
        //console.log("light");

    }
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
