const luckynum = document.getElementById("luckynum");
const dob = document.getElementById("dob");
const check = document.getElementById("check");
const output = document.getElementById("output");
function checkvalue(ln, dob, output) {
    if (ln.length === 0 || dob.length === 0) {
        output.innerText = "Please fill all fields";
        output.style.color = "crimson";
        return 0;
    }
    if(Number(ln)<0)
    {
        output.innerText = "Enter valid numbers";
        output.style.color = "crimson";
        return 0;
    }
    const newdob=dob.replaceAll("-","0");
    let sum=0
    for(let i of newdob)
      sum=sum+Number(i);
    if(sum%Number(ln)===0) 
    {
        output.innerText = `Hurrey your birthday is Lucky !! 🥳🥳 `;
        output.style.color = "green"; 
        output.style.fontWeight="bold"
    }
    else{
        output.innerText = `Sorry your birthday is not Lucky !! 😔😌 `;
        output.style.color = "orange";
        output.style.fontWeight="bold" 
    }
}
check.addEventListener("click", () => checkvalue(luckynum.value, dob.value, output)) 