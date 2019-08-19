// const TypeWriter = function(txtElement, words, wait = 3000){
// this.txtElement = txtElement;
// this.words = words;
// this.txt = '';
// this.wordIndex = 0;
// this.wait = parseInt(wait, 10);
// this.type();
// this.isDeleting = false;
// }

// // Type Method
// TypeWriter.prototype.type = function(){
// //current index of word
// const current= this.wordIndex % this.words.length;
// //get full text of current word
// const fullTxt = this.words[current];

// //check if deleting
// if(this.isDeleting){
// //remove char 
// this.txt = fullTxt.substring(0, this.txt.length - 1);
// }else{
// // add char
// this.txt = fullTxt.substring(0, this.txt.length + 1);
// }
// // insert txt in to element
// this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

// //Initial Type Speed
// let typeSpeed = 300;
   

// if(this.isDeleting){
//     typeSpeed /= 2;
// }

// //if word is compete
// if(!this.isDeleting && this.txt === fullTxt){
//  //make a pause at end
//  typeSpeed = this.wait;
//  //is deleting true
//  this.isDeleting = true ;
// } else if (this.isDeleting && this.txt === ''){
//  this.isDeleting = false;
//  //move on to the next word
//  this.wordIndex++;
//  //pause before start typing 
//  typeSpeed = 500; 

//  }

// setTimeout(()=> this.type(), 500);
// }

//es6 class
class TypeWriter {
constructor(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
 }
  type(){
    //current index of word
    const current= this.wordIndex % this.words.length;
    //get full text of current word
    const fullTxt = this.words[current];

    //check if deleting
    if(this.isDeleting){
        //remove char 
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else{
        // add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // insert txt in to element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

    //Initial Type Speed
    let typeSpeed = 300;
    
    if(this.isDeleting){
        typeSpeed /= 2;
    }

    //if word is compete
    if(!this.isDeleting && this.txt === fullTxt){
        //make a pause at end
        typeSpeed = this.wait;
        //is deleting true
        this.isDeleting = true ;
    } else if (this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        //move on to the next word
        this.wordIndex++;
        //pause before start typing 
        typeSpeed = 500; 

    }
    setTimeout(()=> this.type(), 350); 
  }
}

//Init On Dom load
document.addEventListener('DOMContentLoaded', init);

// init App
function init(){
 const txtElement = document.querySelector('.txt-type');
 const words = JSON.parse(txtElement.getAttribute('data-words'));
 const wait  = txtElement.getAttribute('data-wait');
// Init TypeWriter

new TypeWriter(txtElement, words, wait);
} 