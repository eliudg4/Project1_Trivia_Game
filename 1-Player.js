    

     let questions = ['A sporting event is held every year on Memorial Day. What is it?', 'What color is the tongue of a giraffe?', 'Which state is known as the Beehive State?', 'Nintendo began as a company that sold which products?', 'How many NBA championships did Michael Jordan win with the Chicago Bulls?', 'What is the name of the fastest land animal?', 'What is the only state flag that is two-sided?', 'What was the first video game in the world called?', 'What is the only team in the NFL to neither host nor play in the Super Bowl?', 'A baby goat is called what?','What is the smallest state in terms of land area?', 'What is the highest grossing game of all time?', 'Which baseball player holds the record for the most home runs in a single season?', 'What is the only mammal that cannot jump?', 'Which state has the most lakes?','The most popular sports video game of all time is named after which former professional coach?', 'In which sport was Muhammad Ali popular?', 'What is the only mammal that is able to fly?', 'What is the least populated state?', 'Mario originated in which video game?' ]

    let answers = ['Indianapolis 500', 'Purple', 'Utah', 'Playing cards', '6', 'Cheetah', 'Oregon', 'Pong', 'Cleveland Browns', 'Kid', 'Rhode Island', 'Pokemon', 'Barry Bonds', 'Elephant', 'Minnesota', 'John Madden', 'Boxing', 'Bat', 'Wyoming', 'Donkey Kong']

    let score = 0
    
   
    const startingTime = 8
    let time = startingTime * 60
    const clock = document.querySelector('#clock')

    setInterval(updateClock, 1000)
    function updateClock() {
        let seconds = time % 60
        const minutes = Math.floor(time / 60)

        seconds = seconds < 8 ? '0' + seconds : seconds

        clock.innerHTML = `${minutes}:${seconds}`
        time--

        if(time === 0) {
            alert('Time is up!')
            time.clearInterval()
        }
        
    }

    let button = document.querySelector('#submit')
    let modal = document.querySelector('.modal')
    let trivia = document.querySelector('.trivia')
    let grid = document.querySelector('#grid')
    let scoreText = document.querySelector('#scoreText')
    let timer = document.querySelector('#timer')
    
    
    let boxs = document.querySelectorAll('.box')
    boxs.forEach((box, i) => {


        box.addEventListener('click', () => {
            document.querySelector('#questions').innerText = questions[i]
            button.dataset.i = i
            modal.classList.add('open')
            let new_element = box.cloneNode(true);
            new_element.innerHTML = ''
            box.parentNode.replaceChild(new_element, box);
        
        })
         
    })
    button.addEventListener('click', (e) => {
        e.stopPropagation()
        e.preventDefault()
        let answer = document.querySelector('#answer') 
        let i = button.dataset.i
        console.dir(answer)

        modal.classList.remove('open')
        if(questions[i] && answers[i]) {
            if(answers[i] === answer.value ) {
                score = score + parseInt(boxs[i].innerText)
                scoreText.innerText = score.toString().padStart(4, 0)
                alert(`CORRECT! Your score is ${score}`)
            }else {
                alert(`INCORRECT! The answer is ${answers[i]}`)
            }
            }
        if(score >= 1500) {
            location.replace('/1-Player.html')
               
            
        }
            document.querySelector('#answer').value = ''
    })
    
let reset = document.querySelector('#reset').addEventListener('click', function restart() {
   location.reload()
   return false

})