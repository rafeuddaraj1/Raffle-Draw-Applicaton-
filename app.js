window.onload = function(){
    const inp = document.getElementById('inp')
    const listShow = document.getElementById('list-show')
    const listItem = document.getElementById('list-item')
    const display = document.getElementById('display')
    const giveATry = document.getElementById('give-a-try')
    const winnerOne = document.getElementById('winner-one')
    const winnerTwo = document.getElementById('winner-two')
    const winnerThree = document.getElementById('winner-three')
    let participantName = []
    inp.addEventListener('keypress',function(event){
        if (event.key === 'Enter') {
            let newNames = event.target.value.split(', ')
            if (event.target.value !== '') {
                newNames.forEach((name,ind)=>{
                    participantName.push(name)
                    listShow.addEventListener('click',function(){
                        if (!name) {
                            alert('There are no entry')
                        }
                        else{
                            let li = createElement(name,ind)
                            listItem.appendChild(li)
                            event.target.value =''
                        }
                    })
                })
            }
            event.target.value =''
        }
    })
    listShow.addEventListener('click',function(){
        if (participantName.length === 0) {
            alert('There are no entry')
        }
    })
    giveATry.addEventListener('click',function(){
        if (participantName.length === 0) {
            alert('there are no entry')
        }else{
            let shuffleNames = shuffle(participantName)
            shuffleNames.forEach((name,ind)=>{

                (function(i,count){

                    setTimeout(()=>{
                        // let rand = Math.floor(Math.random()*shuffleNames.length)
                        let displayText = display.textContent
                        display.innerHTML = shuffleNames[ind]
                        if (shuffleNames.length-1 === count) {
                            if (!winnerOne.innerHTML) {
                                winnerOne.innerHTML = shuffleNames[ind]
                                let indx = shuffleNames.indexOf(ind)
                                participantName.splice(indx,1)
                            }else  if (!winnerTwo.innerHTML) {
                                winnerTwo.innerHTML = shuffleNames[ind]
                                let indx = shuffleNames.indexOf(ind)
                                participantName.splice(indx,1)
                            }else if (!winnerThree.innerHTML) {
                                winnerThree.innerHTML = shuffleNames[ind]
                                let indx = shuffleNames.indexOf(ind)
                                participantName.splice(indx,1)
                                display.innerHTML = 'Completed Your Raffle'
                            }
                        }
                    },i)
                })(ind*100,ind)

            })
        }
    })

}

function createElement(name,ind){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `${ind+1}. ${name}`
    return li
}
function shuffle(arr){
    let shuffleArr = [...arr]
    for(let i = shuffleArr.length-1; i > 0; i--){
        let rand = Math.floor(Math.random()*(i+1))
        let temp = shuffleArr[rand]
        shuffleArr[rand] = shuffleArr[i]
        shuffleArr[i] = temp
    }
    return shuffleArr
}