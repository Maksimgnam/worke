let host = '127.0.0.1';
let port =  8000;

let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser')





let app = express();

app.use(bodyParser.urlencoded({extended: true}))


app.use(express.static(__dirname+'/public'))

app.get('/',function(rerequest,response){
    response.sendFile(__dirname+'/index.html')
})




app.listen(port, host);
console.log('server listen on port'+ port)
let card = document.querySelectorAll('.card');
for(let i = 0; i < cards.length; i++){
    card[i].addEventListener('mousemove', startRotate)
    card[i].addEventListener('mouseout', stopRotate)

  
}
function stopRotate(event){
    const cardItem  = this.querySelector('.card-item')
    cardItem.style.transform = 'rotate(0)'
}
function startRotate(event){
    const cardItem  = this.querySelector('.card-item')
    const halfHeight =  cardItem.offsetHeight/2;
    const halfWidth =  cardItem.offsetWidth/2;

    cardItem.style.transform = 'rotateX('+-(event.offsetY -  halfHeight)/5+'deg) rotateY('+(event.offsetX -  halfWidth)/5+'deg)'



}
startRotate()
stopRotate()



