const newhourWork = document.getElementById("hourWork");
const newpreviousWork = document.getElementById("previousWork");
const newhourPlay = document.getElementById("hourPlay");
const newpreviousPlay = document.getElementById("previousPlay");
const newhourStudy = document.getElementById("hourStudy");
const newpreviousStudy = document.getElementById("previousStudy")
const newhourExercise = document.getElementById("hourExercise");
const newpreviousExercise = document.getElementById("previousExercise")
const newhourSocial = document.getElementById("hourSocial");
const newpreviousSocial = document.getElementById("previousSocial");
const newhourSelfCare = document.getElementById("hourSelfCare");
const newpreviousSelfCare = document.getElementById("previousSelfCare");


function changeDaily(){
    newhourWork.innerText = "5hrs";
    newpreviousWork.innerText = "Yesterday - 7hrs";
    newhourPlay.innerText = "1hr"
    newpreviousPlay.innerText = "Yesterday - 2hrs";
    newhourStudy.innerText = "0hrs";
    newpreviousStudy.innerText ="Yesterday - 1hr";
    newhourExercise.innerText ="1hr";
    newpreviousExercise.innerText="Yesterday - 1hr";
    newhourSocial.innerText="1hr";
    newpreviousSocial.innerText="Yesterday - 3hrs";
    newhourSelfCare.innerText ="0hrs";
    newpreviousSelfCare.innerText="Yesterday - 1hr";
}


function changeWeekly(){
    newhourWork.innerText = "32hrs";
    newpreviousWork.innerText = "Last Week - 36hrs";
    newhourPlay.innerText = "10hrs"
    newpreviousPlay.innerText = "Last Week - 8hrs";
    newhourStudy.innerText = "4hrs";
    newpreviousStudy.innerText ="Last Week - 7hrs";
    newhourExercise.innerText ="4hrs";
    newpreviousExercise.innerText="Last Week - 5hrs";
    newhourSocial.innerText="5hrs";
    newpreviousSocial.innerText="Last Week - 10hrs";
    newhourSelfCare.innerText ="2hrs";
    newpreviousSelfCare.innerText="Last Week - 2hrs";
}

function changeMonthly(){
    newhourWork.innerText = "103hrs";
    newpreviousWork.innerText = "Last Month - 128hrs";
    newhourPlay.innerText = "23hrs"
    newpreviousPlay.innerText = "Last Month - 29hrs";
    newhourStudy.innerText = "13hrs";
    newpreviousStudy.innerText ="Last Month - 19hrs";
    newhourExercise.innerText ="11hrs";
    newpreviousExercise.innerText="Last Month - 18hrs";
    newhourSocial.innerText="21hrs";
    newpreviousSocial.innerText="Last Month - 23hrs";
    newhourSelfCare.innerText =" 7hrs";
    newpreviousSelfCare.innerText="Last Month - 11hrs";
}