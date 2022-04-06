var myLibrary = [];
let userInput= document.getElementById('user');

function Book(user) {
  this.user=user;
}

//Add Book
function addBookToLibrary() {
  // do stuff here
  
  let book = new Book(userInput.value);
  myLibrary.push(book);
  displayBook();
}
function displayBook() {
  let divss='';
  myLibrary.map(bookdis => {
  if ( userInput.value!=''){ 
    divss+= `<div>${bookdis.user} <span id="x" class="x">+</span><div>`;
   }
  });
  document.getElementById('bookdis').innerHTML=divss;
  userInput.value='' 
}

//Delete Book
function removeBookFromLibrary(e) {
  
    if (e.target.classList.contains("x")) {
      myLibrary.map(bookdis => {
      myLibrary.filter(c => c != bookdis.user)  
    }); 
     }
  
  
  displayBook();  
}

document.getElementById('button').addEventListener('click', addBookToLibrary);
document.querySelector('#bookdis').addEventListener('click', (e) => removeBookFromLibrary(e))




