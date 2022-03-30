var myLibrary = [];

function Book(user) {
  this.user=user;
}
//Add Book
document.getElementById('button').addEventListener('click', () => {
 let userInput= document.getElementById('user');
 let book = new Book(userInput.value);
 const div= document.getElementById('bookdis');
 myLibrary.push(book);
 div.innerHTML += `<div>${book.user} <span id="x" class="x">+</span><div>`;
 userInput.value=''
})
//Delete Book
document.querySelector('#bookdis').addEventListener('click', (e) => {
 if (e.target.classList.contains('x')) {
e.target.parentElement.remove();
}
})




