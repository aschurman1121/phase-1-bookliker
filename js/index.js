document.addEventListener("DOMContentLoaded", function() {

const bookData = 'http://localhost:3000/books'

const ulForBooks = document.getElementById('list')



fetch(bookData)
.then((res) => res.json())
.then(books => {
    // console.log(books)
    books.forEach(book => {book.title
    let childList = document.createElement('li')
    childList.innerText = book.title
    ulForBooks.appendChild(childList)
// console.log(childList)
const showDetails = document.getElementById("show-panel")
childList.addEventListener("click", (e) => {
    console.log(e)
    let imageContainer = document.createElement("img")
    const bookImage = book.img_url
    let titleContainer = document.createElement("h1")
    const bookTitle = book.title
    titleContainer.innerText = bookTitle
    imageContainer.src = bookImage
    // const bookUsers = book.users.keys

    // console.log(bookTitle)
    console.log(bookImage)
    // console.log(bookUsers)
    showDetails.appendChild(imageContainer)
    showDetails.appendChild(titleContainer)


})
    })
})




});
