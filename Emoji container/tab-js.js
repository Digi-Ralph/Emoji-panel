// Emoji Panel functions 
const buttons = document.querySelectorAll('[data-btn]')
const content = document.querySelectorAll('[data-content]')

buttons.forEach( e => e.addEventListener('click' , (tab) => 
        {       
                const openY = tab.target.dataset.btn
                const open = document.querySelector(openY)
                content.forEach( tabs => tabs.classList.remove('active'))
                open.classList.toggle('active')
        }
))

// Buttons trigger Emoji
const trigger = document.querySelector('#trigger')
const Emoji_panel = document.querySelector('.Emoji-panel')

const click = trigger.addEventListener ('click' , function(e) {
        e.preventDefault()
        e.stopPropagation()
        let x = e.clientX
        let y = e.clientY
        Emoji_panel.style.left = x + "px";
        Emoji_panel.style.top = y + "px";
        Emoji_panel.style.display = "block";
})


document.addEventListener('mouseup', function(e) {
  var container = document.querySelector('.Emoji-panel');
  if (!container.contains(e.target)) {
    container.style.display = 'none';
  }
});

//









