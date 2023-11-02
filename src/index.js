//✅ 1. fork and sync git

//✅ 2. Review data.js and order of script tags in HTML <head> 

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

// ✅ 3. explore the debugger

//✅ 4. update the store name with "easley's technical books"

function renderHeader() {
  let storeName = bookStore.name// 1. Get the info we need
  let storeNameNode = document.querySelector('#store-name') // 2. Get the node we need
  //Will return <h1 id="store-name" /h1>
  storeNameNode.textContent = storeName //update the node
}
renderHeader()


//✅ 5. create a function for render footer

function renderFooter() {
  let storeName = bookStore.name
  let storeNumber = bookStore.number
  let storeAddress = bookStore.address

  let storeNameNode = document.querySelector('#store')
  let storeNumberNode = document.querySelector('#number')
  let storeAddressNode = document.querySelector('#address')

  storeNameNode.textContent = storeName
  storeNumberNode.textContent = storeNumber
  storeAddressNode.textContent = storeAddress


}
renderFooter()



//✅ 6. create a function called renderBook(book)


/*
<li class="card">
  <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
  <p>Marjin Haverbeke</p>
  <p>$10.00</p>
  <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
  <button>Delete</button>
</li>
*/

/***
function: create HTML structure for single book and append to page
input: a book object
output: none
***/

let book = bookStore.inventory[1]

const li = document.createElement('li')
li.classList.add('card') //add a class of card to li 

let h3 = document.createElement('h3')
h3.textContent = book.title

let pAuthor = document.createElement('p')
pAuthor.textContent = book.author

let pPrice = document.createElement('p')
pPrice.textContent = formatPrice(book.price)

let img = document.createElement('img')
img.src = book.imageUrl

let button = document.createElement('button')
button.textContent = "delete"

let bookList = document.querySelector('#book-list')
bookList.appendChild(li)
li.appendChild(h3)
li.appendChild(pAuthor)
li.appendChild(pPrice)
li.appendChild(img)
li.appendChild(button)



//✅ 7. iterate over all the books in data and show book on page

//Outside of the fuction to delete
const handleDelete = (e) => {
  e.target.parentElement.remove() // handleDelete gets us the target which is the button, then we get it's parents 
}

function renderBook(book) {
  const li = document.createElement('li')
  li.classList.add('card') //add a class of card to li 

  let h3 = document.createElement('h3')
  h3.textContent = book.title

  let pAuthor = document.createElement('p')
  pAuthor.textContent = book.author

  let pPrice = document.createElement('p')
  pPrice.textContent = formatPrice(book.price)

  let img = document.createElement('img')
  img.src = book.imageUrl

  let deleteBtn = document.createElement('button')
  deleteBtn.textContent = "delete"


  // Inside the functinon
  // const handleDelete = (e) => {
  //   li.remove()
  // }

  deleteBtn.addEventListener('click', handleDelete)



  let bookList = document.querySelector('#book-list')
  bookList.appendChild(li)
  li.appendChild(h3)
  li.appendChild(pAuthor)
  li.appendChild(pPrice)
  li.appendChild(img)
  li.appendChild(deleteBtn)




};


let bookArray = bookStore.inventory
bookArray.forEach(renderBook) // Takes all of the values in bookArray and uses it as the param for renderBook



//.map 
let arr = [1, 2, 3, 4, 5]
let tens = arr.map((el) => { return el * 10 })
//console.log(tens)

let arrTwo = ['billy', 'bobby', 'brown']
let his = arrTwo.map((el) => { return 'Hi ' + el })
//console.log(his)


// Saving a funtion and calling it later in map or forEach could be on the code challenge!!!
let objects = [
  { name: "dutch", pet: "dog" },
  { name: "finn", pet: "lab" },
  { name: "bodhi", pet: "dog" },
  { name: "moon", pet: "cat" },
]

//long way of anonymous function created in .map 
let petsLong = objects.map((el) => {
  return el.name + " the " + el.pet

})
console.log(petsLong)

//Name a function and calling it using .map
const petsHelper = (el) => {
  return el.name + " the " + el.pet
}
let pets = objects.map(petsHelper) // Take the values in "object" and passes them into the petsHelper function one by one 
console.log(pets)


//Getting an individual key and value
let finn = petsHelper(objects[1])
console.log(finn)



//.forEach
const a = ['billy', 'bobby', 'brown'];
a.forEach((element) => {
  //console.log(element)
  return (element);
});
