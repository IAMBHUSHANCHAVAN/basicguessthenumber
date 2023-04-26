const inputval = document.getElementById("inputval")
const btn = document.getElementById("btn").addEventListener("click",()=>{
    const inptno = inputval.value
    let match = 0;
    let mismatch = 0;
    const finlval = parseInt(inptno)
    let botnum = Math.floor(Math.random()*10)
    console.log("user no" + finlval);
    console.log("bot no"+botnum);
        if(botnum==finlval){
         document.getElementById("match").innerHTML=`the number is matched hurrayy !!! <i class="fa-regular fa-face-smile-wink"></i>`
        }else{
            document.getElementById("match").innerHTML=`the number is not matched <i class="fa-regular fa-face-tired"></i>`
        }
        document.getElementById("botno").innerHTML= `bot random number is ${botnum}&nbsp &nbsp`
        document.getElementById("userno").innerHTML= `  user guessed number is ${finlval}`
})