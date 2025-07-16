var myBtn = document.getElementById("btn");
var displayer = document.getElementById("dis");
var displayer2 = document.getElementById("dis2");
var QArr = [
  '"Death is like the wind always by my side"',
  '"Love ruines All"',
  '"I Am Not Your Enemy, I Am The Enemy!"',
  '"The Cycle Of Life And Death Continues. We Will Live, They Will Die."',
  '“Do not fear the shrouded path.”',
  '“You only live once. If you do it right, that’s all you need.”',
  '“Wear A Mask Long Enough, And You Forget The Face Beneath.”'

];
var author = ['--Yassou','--viego','--Atrox','--Nasus','--Zed','--Ezreal','--Yone'];

var usedNum= [];

function randNum(){
  
    if(usedNum.length === QArr.length) usedNum = [];
  do{
    var randomNumb = Math.floor(Math.random() * QArr.length,author.length);

    if(!usedNum.includes(randomNumb)){
      return randomNumb;
    }
    
  }while(true)
 

}

function getQuote(){
  var rando =randNum()
  console.log(rando)
  usedNum.push(rando);
  console.log(usedNum);
    displayer.innerHTML= QArr[rando];
    displayer2.innerHTML= author[rando];
   
    
    // console.log('hello')
}