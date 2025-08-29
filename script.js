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

const serviceNamesBn = document.getElementsByClassName('service-name-bn')

const serviceNames = document.getElementsByClassName('service-name');

const serviceNumbers = document.getElementsByClassName('service-number');

const callHistoryContainer = document.getElementById('call-history-container');

for(let i =0; i< callButtons.length;i++){
    callButtons[i].addEventListener('click',function(){
        if(coins<20){
           return alert('Do not have sufficient coin. Need at least 20 coin to make a call');
        }
        coins -= 20;
        document.getElementById('coin-number').innerText = coins;
        const serviceNameBn = serviceNamesBn[i].innerText;
        const serviceName = serviceNames[i].innerText;
        const serviceNumber = serviceNumbers[i].innerText;
        alert('📞 calling ' + serviceName +' '+ serviceNumber);

        // call history create 

        const time = new Date().toLocaleTimeString();
        const div =document.createElement('div')
        div.innerHTML = `
          <div class="flex justify-between items-center mt-2 p-2 bg-[#FAFAFA] rounded-lg">
                    <div>
                        <h1>${serviceNameBn}</h1>
                        <p class="text-gray-500">${serviceNumber}</p>
                    </div>
                    <div>${time}</div>
                </div>
        `
        callHistoryContainer.appendChild(div);
    })
}

// clear history functionality

document.getElementById('history-clear-btn').addEventListener('click',function(){
  callHistoryContainer.innerHTML = '';
})

// copy functionality 

let copyCount = parseInt(document.getElementById('copy-count').innerText);

const copyButtons = document.getElementsByClassName('copy-btn');

for(let i = 0; i<copyButtons.length; i++){
  copyButtons[i].addEventListener('click',function(){
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
    navigator.clipboard.writeText(serviceNumbers[i].innerText);
    alert('Number copied '+ serviceNumbers[i].innerText);
  })
}

