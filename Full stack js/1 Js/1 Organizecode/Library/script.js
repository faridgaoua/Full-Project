var myLibrary = [];

function Book(user) {
  this.user=user;
}
//Add Book
function addBookToLibrary() {
  // do stuff here
  let userInput= document.getElementById('user');
 let book = new Book(userInput.value);
 const div= document.getElementById('bookdis');
 myLibrary.push(book);
 div.innerHTML += `<div>${book.user} <span id="x" class="x">+</span><div>`;
 userInput.value=''
}

//Delete Book
function removeBookFromLibrary(e) {
  if (e.target.classList.contains('x')) {
    e.target.parentElement.remove();
    }}


document.getElementById('button').addEventListener('click', addBookToLibrary);
document.querySelector('#bookdis').addEventListener('click', (e) => removeBookFromLibrary(e))




