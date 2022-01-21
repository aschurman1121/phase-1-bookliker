document.addEventListener("DOMContentLoaded", function() {

const bookData = 'http://localhost:3000/books'

const ulForBooks = document.getElementById('list')



fetch(bookData)
.then((res) => res.json())
.then(books => {
    console.log(books)
    books.forEach(book => {book.title
    let childList = document.createElement('li')
    childList.innerText = book.title
    ulForBooks.appendChild(childList)
console.log(childList)
const showDetails = document.getElementById("show-panel")
childList.addEventListener("click", (e) => {
    console.log(e)
})
    })
})




});
