// Animation sidebar
const nav = document.querySelector('nav');
const main = document.querySelector('main')
const hamburgar = document.querySelector('.hamburgar ')


hamburgar.addEventListener('click' , () => {
        nav.classList.toggle('open')
        main.classList.toggle('close')});

    


        //sidebar options 

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

//Emoji Picker
// const Emoji = fetch()
// const tag = [];
// const v = Emoji.then(data => data.json()).then( data => Object.entries(data))

// console.log(tag)





