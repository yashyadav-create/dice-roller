
function diceydice(){
    let diceResult =  document.getElementById("diceResult");
    let diceImages = document.getElementById("diceImages")
    let inputValue = document.getElementById("inputValue").value;
    let images=[];
    let temp=[];
    for(let i=0;i<inputValue;i++){
     let rolled=Math.floor(Math.random()*6)+1;
     temp.push(rolled);
     images.push(`<img src="dice_images/${rolled}.png">`);
    }
    diceResult.textContent = `dice :${temp.join(",")}`;
    diceImages.innerHTML = images.join(" ");
}