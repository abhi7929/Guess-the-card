let cards=[
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:1,
        status:"opened"
    },
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:1,
        status:"opened"
    },
    {
        image:"https://i.pinimg.com/originals/7c/70/3f/7c703ff95934b0094c5be9994f1998c5.jpg",
        value:2,
        status:"opened"
    },
    {
        image:"https://i.pinimg.com/originals/7c/70/3f/7c703ff95934b0094c5be9994f1998c5.jpg",
        value:2,
        status:"opened"
    },
    {
        image:"https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        value:3,
        status:"opened"

    },
    {
        image:"https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        value:3,
        status:"opened"

    },
    {
        image:"https://starbaseatlanta.com/wp-content/uploads/smab71976.jpg",
        value:4,
        status:"opened"
    },
    {
        image:"https://starbaseatlanta.com/wp-content/uploads/smab71976.jpg",
        value:4,
        status:"opened"
    },
    {
        image:"https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/111121/Baby-Groot-Profile-HD-Tip-iphone-8-wallpaper-ilikewallpaper_com_750.jpg",
        value:5,
        status:"opened"
    },
    {
        image:"https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/111121/Baby-Groot-Profile-HD-Tip-iphone-8-wallpaper-ilikewallpaper_com_750.jpg",
        value:5,
        status:"opened"
    },

  
]
// durnsten shuffling alogorithm 

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;


function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}


displayCards(cards);


let cardCount=1;
let val1=null,val2=null;
let score=0;
let lifeline=5;
function openCard(index){

    cards[index].status="opened";
    displayCards(cards);
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
       // displayCards(cards); //
    }
    else if(
        cardCount===2){
        val2=cards[index].value;
       // displayCards(cards); //
        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;
            
            val1=null;
            val2=null;
            cardCount=1;
            
        }
        else{
            
            lifeline--;
            document.getElementById("lifeline").innerText=lifeline;
            cards[index].status="closed";
            if(lifeline === 0)
            {
                alert("Game Over!!!");
                location.reload();
            }
        }        
    }
    

    // displayCards(cards);
    
}

function close()
{
    for(i=0;i<cards.length;i++)
    {
        cards[i].status="closed";
    }
}

var time=5;
var x=setInterval(function(){
    // document.getElementById("timer").innerHTML=" "+time+" Seconds";
    time=time-1;
    if(time<0)
    {
        clearInterval(x);
        close();
        displayCards(cards);
    }
},1000);


