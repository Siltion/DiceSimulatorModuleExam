document.getElementById('play-btn').addEventListener('click', play)
document.getElementById('purchase-btn').addEventListener('click', purchase)
   
//Initiates when the Play button is pressed
function play() {
    //Variable Declaration
    let bet = Number(document.getElementById('bet-input').value);
    let numHouse = Math.round(Math.random()*6);
    let numPlayer = Math.round(Math.random()*6);
    let funds = Number(document.getElementById('funds').innerHTML);
    //Sets the Bet and Funds as a number rather than a string
    let wins = Number(document.getElementById('wins').innerHTML);
    let ties = Number(document.getElementById('ties').innerHTML);
    let losses = Number(document.getElementById('losses').innerHTML);

    //Checks if the user is wishing to bet more then they actually have
    if (bet <= funds) {

        //Rolls House's Die
        if (numHouse == 1) {
            document.getElementById('house-die').src= 'images/1.png';
        } else if (numHouse == 2) {
            document.getElementById('house-die').src= 'images/2.png';
        } else if (numHouse == 3) {
            document.getElementById('house-die').src= 'images/3.png';
        } else if (numHouse == 4) {
            document.getElementById('house-die').src= 'images/4.png';
        } else if (numHouse == 5) {
            document.getElementById('house-die').src= 'images/5.png';
        } else if (numHouse == 6) {
            document.getElementById('house-die').src= 'images/6.png';
        }
    
        //Rolls Player's Die
        if (numPlayer == 1) {
            document.getElementById('player-die').src= 'images/1.png';
        } else if (numPlayer == 2) {
            document.getElementById('player-die').src= 'images/2.png';
        } else if (numPlayer == 3) {
            document.getElementById('player-die').src= 'images/3.png';
        } else if (numPlayer == 4) {
            document.getElementById('player-die').src= 'images/4.png';
        } else if (numPlayer == 5) {
            document.getElementById('player-die').src= 'images/5.png';
        } else if (numPlayer == 6) {
            document.getElementById('player-die').src= 'images/6.png';
        }
    
    
    //Checks for the winner
        if (numPlayer > numHouse) {
            wins++
            document.getElementById('funds').innerHTML = funds + bet;
            document.getElementById('wins').innerHTML = wins;
        } else if (numPlayer < numHouse) {
            losses++
            document.getElementById('funds').innerHTML = funds - bet;
            document.getElementById('losses').innerHTML = losses;
        } else {
            ties++
            document.getElementById('ties').innerHTML = ties;
        }
        
    } else {
    alert("You cannot bet more money then you have");
    }

}

    //Purchase Luxury Items
function purchase() {
    let funds = Number(document.getElementById('funds').innerHTML);

    
    //Outputs Socks
    if (funds < 1000) {
    document.getElementById('loot').innerHTML += '<img src="images/socks.png">';
    //Checks for within 1000 & 5000: Outputs either a Bike, Trip, or Ring
    } else if (funds >= 1000 && funds < 5000) {
        loot1 = Math.random();
        if (loot1 <= 0.33) {
            document.getElementById('loot').innerHTML += '<img src="images/bike.jpg">';
            document.getElementById('funds').innerHTML = funds - 1000;
        } else if (loot1 > 0.33 && loot1 <= 0.66) {
            document.getElementById('loot').innerHTML += '<img src="images/ring.png">';
            document.getElementById('funds').innerHTML = funds - 1000;
        } else {
            document.getElementById('loot').innerHTML += '<img src="images/trip.jpg">';
            document.getElementById('funds').innerHTML = funds - 1000;
        }

    //Checks for over 5000: Outputs either a Car, Motorcycle, House, or Boat 
    } else if(funds >= 5000) {
    loot2 = Math.random();
        if (loot2 <= 0.25) {
            document.getElementById('loot').innerHTML += '<img src="images/car.png">'
            document.getElementById('funds').innerHTML = funds - 5000;
        } else if (loot2 > 0.25 && loot2 <= 0.50) {
            document.getElementById('loot').innerHTML += '<img src="images/house.png">';
            document.getElementById('funds').innerHTML = funds - 5000;
        } else if (loot2 > 0.50 && loot2 <= 0.75) {
            document.getElementById('loot').innerHTML += '<img src="images/motorcycle.jpg">';
            document.getElementById('funds').innerHTML = funds - 5000;
        } else {
            document.getElementById('loot').innerHTML += '<img src="images/boat.png">';
            document.getElementById('funds').innerHTML = funds - 5000;
        }
    }
}

if (funds <= 0) {
    alert("You have drained all of your money!");
}


