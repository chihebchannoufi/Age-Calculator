const dobInput = document.getElementById("dob");
const claculateBtn = document.getElementById("calculate");
const Result = document.getElementById("result");

claculateBtn.addEventListener("click", function(){
    const dob = new Date(dobInput.value);
    const ageInMs = Date.now()- dob.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear()-1970);

    Result.innerHTML=`Your age is ${age} years`;
});