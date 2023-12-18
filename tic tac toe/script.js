const cells=document.querySelectorAll(".cell");
let gameactive=true;
let currentplayer="X";
let boardstate=["","","","","","","","",""];
const win=[[0,1,2],[0,3,6],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
const statusdisplay=document.querySelector(".game--status");
const restart=document.querySelector(".game--restart");
let c=0;
let getplayerturn=()=>
    `Its player${currentplayer==="X"?1:2}'s turn`;


const getcurrentplayer=()=>{
    currentplayer=currentplayer==="X"?"O":"X";
    statusdisplay.innerHTML=getplayerturn();
}
const winorloose=()=>{
    win.forEach((e)=>{
       
        if(boardstate[e[0]]!="" && boardstate[e[1]]!="" && boardstate[e[2]]!="" && boardstate[e[0]]===boardstate[e[1]] && boardstate[e[1]]===boardstate[e[2]]){
            gameactive=false;
            statusdisplay.innerHTML=`Player ${boardstate[e[0]]==="X"?1:2} has won`;
        console.log(e[0],boardstate[e[0]],e[1],boardstate[e[1]],e[2],boardstate[e[2]])
        console.log(boardstate)
        }
        else if(c>=8){
            statusdisplay.innerHTML="Draw!";
        }
    })
}

cells.forEach((e)=>{
    e.addEventListener("click",(eve)=>{

        let cell=eve.target;
        //console.log(eve);
        let cellid=cell.id-1;
        if(gameactive && boardstate[cellid]==="" ){
            cell.innerHTML =currentplayer;
            boardstate[cellid]=currentplayer;
            getcurrentplayer();
            winorloose();c++;
        }
    })
})


const restartgame=()=>{
    cells.forEach((e)=>{e.innerHTML="";})
    boardstate.forEach((e,i)=>{boardstate[i]="";console.log(i,e)})
   
    currentplayer="X";
    statusdisplay.innerHTML=getplayerturn();
    gameactive=true;c=0;
}
restart.addEventListener("click",restartgame);