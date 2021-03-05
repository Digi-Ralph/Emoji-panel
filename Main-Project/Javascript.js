const sidebar = document.querySelector('.sidebar-container')
const content = document.querySelector('.content-container')
const header = document.querySelector('.header')


header.addEventListener('click', () => {
    sidebar.classList.toggle('active')
    content.classList.toggle('close')
})


// PlaceHolders 
const placeholder = document.querySelectorAll('.container-data')
placeholder.forEach(e => {
    e.addEventListener('input', () => {
        if (e.innerHTML.trim() === '<br>') e.innerHTML = ''
    })
})
const titleholder = document.querySelector('.title')
titleholder.addEventListener('input', () => {
    if (titleholder.innerHTML.trim() === '<br>') titleholder.innerHTML = ''
})
// END
// Creat new Editable Blocks 
