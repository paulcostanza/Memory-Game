/////////////////////////
////// Score board /////
///////////////////////
import { getUserInfo, userInfo } from './components/scoreboard.js'

getUserInfo()


/////////////////////////
////// Game board //////
///////////////////////
const emojis = ['😀', '😀', '🥸', '🥸', '😡', '😡', '🤡', '🤡', '💩', '💩', '🤖', '🤖',
    '👽', '👽', '👻', '👻', '🍔', '🍔', '🥁', '🥁', '🧬', '🧬', '🍩', '🍩',
    '🍷', '🍷', '🚀', '🚀', '🗽', '🗽', '💾', '💾', '🚽', '🚽',
    '❤️', '❤️', '♻️', '♻️', '🎁', '🎁', '🔧', '🔧',
    '⚰️', '⚰️', '☠️', '☠️', '🐉', '🐉']

let shuffleEmojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1)
let totalClicks = 0;

// the number of clicks the user has clicked for the current round
let clickNum = document.getElementById('click-num')

// placing tiles on board
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div')
    box.className = 'item'
    box.innerHTML = shuffleEmojis[i]



    box.onclick = function () {
        totalClicks++
        clickNum.innerHTML = totalClicks

        // adds 'boxOpen' when a tile has been clicked
        this.classList.add('boxOpen')

        setTimeout(function () {

            console.log(userInfo)

            if (document.querySelectorAll('.boxOpen').length > 1) {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {

                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                    // check here if the score is less than the 10th place
                    if (document.querySelectorAll('.boxMatch').length == emojis.length) {

                        if (totalClicks < userInfo[userInfo.length - 1].score) {
                            let person = prompt("New High Score! Please enter your name: ", "Some Dude");

                            // add to array
                            userInfo.push({ name: `${person}`, score: parseInt(totalClicks) })

                            // add to local storage
                            localStorage.setItem(`${person}`, parseInt(totalClicks))
                        } else {
                            alert('winner')
                        }
                    }
                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                }
            }
        }, 750)
    }

    // find class 'game' in HTML and add the div 'box' from above
    document.querySelector('.game').appendChild(box)

}