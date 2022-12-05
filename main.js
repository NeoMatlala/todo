// add items to list
var newItem = document.querySelector('#item')
var submitButton = document.querySelector('#submit')
var itemList = document.querySelector('.item-list')

// itemList count 
var listCount = document.querySelector('#list-count')
var count = itemList.childElementCount
listCount.innerHTML = `${count}`

submitButton.addEventListener('click', addNewItem)

function addNewItem() {
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



