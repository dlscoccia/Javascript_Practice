
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1
    const title = document.querySelector('.title')

    title.onclick = function() {

    }
for (var i = 0, len = squares.length; i < len; i++)
(function(index){
    squares[i].onclick = function(){
        console.log(index)}
})
        
        

})