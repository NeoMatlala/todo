var newItem = document.querySelector('#item')
var submitButton = document.querySelector('#submit')
var itemList = document.querySelector('.item-list')

// itemList count 
var listCount = document.querySelector('#list-count')
var count = itemList.childElementCount
listCount.innerHTML = `${count}`

// error message: entering empty todo
var displayError = document.querySelector('.error')

// add items to list
submitButton.addEventListener('click', addNewItem)

function addNewItem() {
    console.log(newItem.value.length)

    if(newItem.value.length === 0) {
        displayError.style.display = 'block'
    } else {
        displayError.style.display = 'none'
        var li = document.createElement('li')
        var removeSpan = document.createElement('span')

        li.classList = 'item'
        li.innerText = newItem.value

        removeSpan.innerText = 'remove'
        removeSpan.className = 'delete'

        li.appendChild(removeSpan)
        itemList.appendChild(li)

        count++
        listCount.innerHTML = `${count}`
    }
}

// remove item
itemList.addEventListener('click', removeItem) 

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        var li = e.target.parentElement
        itemList.removeChild(li)
        count--
        listCount.innerHTML = `${count}`
    }
}

