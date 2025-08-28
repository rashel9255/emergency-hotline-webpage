// heart count update 

const heartCount = document.getElementById("heart-counter");
const cardHearts = document.getElementsByClassName("card-heart");

let count = 0;

for (let heart of cardHearts) {
  heart.addEventListener("click", function() {
    count++;
    heartCount.innerText = count;
  });
}

// call button functionality

const callButtons = document.getElementsByClassName("call-button");

let coins = parseInt(document.getElementById('coin-number').innerText);

const serviceNames = document.getElementsByClassName('service-name');

const serviceNumbers = document.getElementsByClassName('service-number');

const callHistoryContainer = document.getElementById('call-history-container');

for(let i =0; i< callButtons.length;i++){
    callButtons[i].addEventListener('click',function(){
        if(coins<20){
           return alert('Do not have sufficient coin');
        }
        coins -= 20;
        document.getElementById('coin-number').innerText = coins;
        const serviceName = serviceNames[i].innerText;
        const serviceNumber = serviceNumbers[i].innerText;
        alert('📞 calling ' + serviceName +' '+ serviceNumber);

        // call history create 

        const time = new Date().toLocaleTimeString();
        const div =document.createElement('div')
        div.innerHTML = `
          <div class="flex justify-between items-center mt-2 p-2 bg-[#FAFAFA] rounded-lg">
                    <div>
                        <h1>${serviceName}</h1>
                        <p class="text-gray-500">${serviceNumber}</p>
                    </div>
                    <div>${time}</div>
                </div>
        `
        callHistoryContainer.appendChild(div);
    })
}