const choices=document.querySelectorAll(".box");
    const msg=document.querySelector("#result");
    const AI=document.querySelector("#AIScore");
    const Your=document.querySelector("#YourScore");
    const resetbtn=document.querySelector(".reset");
    let Ycount=0;
    let Acount=0;

    resetbtn.addEventListener("click",()=>{
        msg.innerText="Start Your Game";
        Your.innerText=0;
        AI.innerText=0;
        msg.style.backgroundColor="black";
        Ycount=0;
        Acount=0;
    });

    choices.forEach((choice)=>{
        choice.addEventListener("click",()=>
    {
        const your=choice.getAttribute("id");
        Playgame(your);
    })
    });

    const Playgame=(your)=>{
        let options=["rock","paper","scissor"];
        let AI=options[CompChoice()];
        if(your===AI)
        {
            Drawgame();
        }
        else
        {
            let status=true;
            if(your==="rock")
            {
                status=AI==="paper" ? false:true;
            }
            else if(your==="paper")
            {
                status=AI==="scissor" ? false:true;
            }
            else
            {
                status=AI==="rock" ? false:true; 
            }
            
            Display(status);
        }
    };

    const Display=(state)=>{
        if(state)
        {
            Ycount++;
            Your.innerText=Ycount;
            msg.innerText="You Win";
            msg.style.backgroundColor="green";
        }
        else
        {
            Acount++;
            AI.innerText=Acount;
            msg.innerText="You Loose";
            msg.style.backgroundColor="red";
        }
    }

    const CompChoice=()=>{
        let rand=Math.floor(Math.random()*3);
        return rand;
    };

    const Drawgame=()=>{
        msg.innerText="Your Game is Draw";
        msg.style.backgroundColor="black";
    }