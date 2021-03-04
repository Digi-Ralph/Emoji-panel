const sidebar = document.querySelector('.sidebar-container')
const content = document.querySelector('.content-container')
const header = documnet.querySelector('.header')


header.addEventListener('click' , e => {
    sidebar.classList.toggle('active')
    content.classList.toggle('close')
})


const add = document.querySelector('.add-list');
const mainList = document.querySelector('.main-list')
console.log(mainList)

add.addEventListener('click' , creatList)

function creatList() {
    const li = document.createElement('li')
    const a = document.createElement('a')
    const icon = `<i id="emoji-trigger" class="fas fa-file"></i>`
    li.classList.add('add-list')
    a.textContent = " Untitled"
    mainList.insertAdjacentElement('Afterbegin' , li)
    li.innerHTML = icon
    li.append(a)
}

// PlaceHolders 
const placehold = document.querySelectorAll('contenteditable')