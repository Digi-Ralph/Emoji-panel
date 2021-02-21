const tabtitle = document.querySelectorAll('.tab-title')
const tabs_array = document.querySelectorAll('.flex-tab');
const Emoji_set = document.querySelector('.Emoji-set')
const Emoji_list = document.querySelector('.Emoji-list')
const search_input = document.querySelector('.input_search_emoji');
const buttons = document.querySelectorAll('[data-btn]')
const content_data = document.querySelectorAll('[data-content]')
const trigger = document.querySelector('#trigger')
const Emoji_panel = document.querySelector('.Emoji-panel')

const api = './node_modules/emoji-datasource-twitter/emoji.json'
// Fetching Data
function searchCharacter() {
        fetch(api)
        .then(function(e){
        return e.json()
        })
        .then(function(data) {
        let Emojicharacters = [];
        Emojicharacters.push(...data)
        newEmoji(Emojicharacters)
        setUpToolTip()
    })
    .catch( err => console.error(err)) 
}
searchCharacter();

// EMOJY DEPLOY

let newEmoji = (Emojicharacters) => {
    let charactersEmoji = [];
    Emojicharacters.filter(e => {
        for (let i = 0 ; i < Emojicharacters.length; i++) { 
            i = {
                name:e.name,
                short_name:e.short_name,
                short_names:e.short_names,
                category:e.category,
                image:e.image,
                unified:e.unified,
                sort_order:e.sort_order
            }
            if ((e.name && e.short_name && e.short_names && e.category && e.image && e.unified) !== null) {
                return charactersEmoji.push(i)
            }
        }
    })
    // Sorting by order
    function compare(a, b) {
        const bandA = a.sort_order;
        const bandB = b.sort_order;
        let comparison = 0;
        if (bandA < bandB) {
            comparison = 1;
        } else if (bandA > bandB) {
            comparison = -1;
        }
            return comparison;
    }
    
    charactersEmoji.sort(compare);

    Emoji_icons(charactersEmoji)
    Search_Emoji(charactersEmoji)
    


}



// Template HTML
function content(e) {
    const name = e.name.toLowerCase()
    return `<div class="Emoji-flex">
    <div class="Emoji" data-tooltip="${name}">
    <img class="Emoji-img" src="./node_modules/emoji-datasource-twitter/img/twitter/64/${e.image}" >
    </div>  
    <div class="Emoji-tooltip"></div>
    </div>`;
    
}

// Default Emoji icons 
const Emoji_icons = (charactersEmoji) => {
    charactersEmoji.filter( e => {
            if (e.category === ('Skin Tones' && 'Smileys & Emotion')) {
                tabs_array[1].insertAdjacentHTML("afterbegin" , content(e))
                return content(e);
                }
            } 
        )
        
        const Animals  =  document.querySelector('#Animals')
        const Food     =  document.querySelector('#Food')
        const Activities =  document.querySelector('#Activities')
        const Travel   =  document.querySelector('#Travel')
        const Objects  =  document.querySelector('#Objects')
        const Symbols   =  document.querySelector('#Symbols')
        const Flags     =  document.querySelector('#Flags')

    Emoji_list.addEventListener("scroll",function(event){
            if((event.target.scrollTop === event.target.scrollTopMax) && Animals.style.display === "none" ){
                animals(charactersEmoji)
                setUpToolTip()
            } else if((event.target.scrollTop === event.target.scrollTopMax) && Food.style.display === "none" ){
                food(charactersEmoji)
                setUpToolTip()
            } else if((event.target.scrollTop === event.target.scrollTopMax) && Activities.style.display === "none" ){
                activity(charactersEmoji)
                setUpToolTip()
            } else if((event.target.scrollTop === event.target.scrollTopMax) && Travel.style.display === "none" ){
                travel(charactersEmoji) 
                setUpToolTip()
            } else if((event.target.scrollTop === event.target.scrollTopMax) && Objects.style.display === "none" ){
                object(charactersEmoji) 
                setUpToolTip()
            } else if((event.target.scrollTop === event.target.scrollTopMax) && Symbols.style.display === "none" ){
                symbol(charactersEmoji) 
                setUpToolTip()
            } else if((event.target.scrollTop === event.target.scrollTopMax) && Flags.style.display === "none" ){
                flag(charactersEmoji) 
                setUpToolTip()
            } else {
                return console.log('CHOME DOESN4T WORK')
            }
        }
    )
}


const animals = (charactersEmoji) => {
        charactersEmoji.filter( e => {
                if (e.category === 'Animals & Nature') {
                    Animals.style.display = "block"
                    tabs_array[2].insertAdjacentHTML("afterbegin" , content(e))
                    return content(e);
                    
                    }  
                }
            )
        }

const food = (charactersEmoji) => {
        charactersEmoji.filter( e => {
                if (e.category === 'Food & Drink') {
                    Food.style.display = "block"
                    tabs_array[3].insertAdjacentHTML("afterbegin" , content(e))
                    return content(e);
                    
                    }  
                }
            )
        }

const activity = (charactersEmoji) => {
        charactersEmoji.filter( e => {
                if (e.category === 'Activities') {
                    Activities.style.display = "block"
                    tabs_array[4].insertAdjacentHTML("afterbegin" , content(e))
                    return content(e);
                    
                    }  
                }
            )
        }

const travel = (charactersEmoji) => {
        charactersEmoji.filter( e => {
                if (e.category === 'Travel & Places') {
                    Travel.style.display = "block"
                    tabs_array[5].insertAdjacentHTML("afterbegin" , content(e))
                    return content(e);
                    
                    }  
                }
            )
        }

const object = (charactersEmoji) => {
        charactersEmoji.filter( e => {
                if (e.category === 'Objects') {
                    Objects.style.display = "block"
                    tabs_array[6].insertAdjacentHTML("afterbegin" , content(e))
                    return content(e);
                    
                    }  
                }
            )
        }

const symbol = (charactersEmoji) => {
        charactersEmoji.filter( e => {
                if (e.category === 'Symbols') {
                    Symbols.style.display  = "block"
                    tabs_array[7].insertAdjacentHTML("afterbegin" , content(e))
                    return content(e);
                    
                    }  
                }
            )
        }

const flag = (charactersEmoji) => {
        charactersEmoji.filter( e => {
                if (e.category === 'Flags') {
                    Flags.style.display = "block"
                    tabs_array[8].insertAdjacentHTML("afterbegin" , content(e))
                    return content(e);
                    
                    }  
                }
            )
        }


// Search Method
const Search_Emoji = (charactersEmoji) => {
        // creat input search event
        search_input.addEventListener('input' , (e) => {
            const input_string = e.target.value;
            const input_Uppercase = input_string.toLowerCase()
            const filterEmoji = charactersEmoji.filter( e => {
                return e.name.toLowerCase().includes(input_Uppercase)
        }) 
            displayEmoji(filterEmoji) 
    })
}



// positioning Search
const displayEmoji = (filterEmoji) => {
    if (filterEmoji.length !== 0) {
        const htmlString = filterEmoji
            .map(e => {
                return `<div class="tab-title">
                <div class="nav">Results</div>
                <!-- START -->
                <div class="flex-tab"><div class="Emoji-flex"><div class="Emoji" data-tooltip="${e.name}">
                <img class="Emoji-img" src="./node_modules/emoji-datasource-twitter/img/twitter/64/${e.image}" >
                </div>  
                <div class="Emoji-tooltip"></div>
                </div>
                </div>
                <!--  END  -->
                </div>`;
            })
            .join('')
            Emoji_list.innerHTML = htmlString;
        } else if (filterEmoji.length === 0)  {
                const Nostring = '<span class="empty">No Result</span>'
                Emoji_list.innerHTML = Nostring 
                
    } 
}

// tooltip spawn
let setUpToolTip = () => {
    let tooltip = " ";
    tooltipEmoji = document.querySelector('.Emoji-tooltip')
    toolTipElements = document.querySelectorAll('.Emoji')
    const tooltipElemArray = Array.from(toolTipElements)
    let timer;

    let displayTooltip = (e , step) => {
        tooltip = step
        tooltipEmoji.innerHTML = tooltip
        tooltipEmoji.style.top = e.pageY  + "px"
        tooltipEmoji.style.left = e.pageX +  "px"
        fadeIN(tooltipEmoji)
        }

        let fadeOut = function(e) {
            let op = 1;
            if (!timer) {
                timer = setInterval(() => {
                if (op <= 0.1) {
                    clearInterval(timer);
                    timer = null
                    e.style.opacity = 0;
                    e.style.display = "none";
                }
                e.style.opacity = op;
                   op -= op * 0.1
            }, 10)
                
            }
        }
        let fadeIN = function(e) {
            let op = 0.1;
            e.style.display = "block"
             var timer = setInterval(() => {
                if (op >= 1) {
                    clearInterval(timer);
                    
                }
                e.style.opacity = op;
                op += op * 0.1
            }, 10)
        }

    tooltipElemArray.forEach((e) => {
            const step = e.dataset.tooltip
            let timeout ;
            e.addEventListener('mouseenter' , (e) => {
    timeout = setTimeout(() => {
                    displayTooltip(e , step)
                },400)
            });

            e.addEventListener("mouseleave", e => {
                clearTimeout(timeout)
                fadeOut(tooltipEmoji)
        })
    })
}



// Emoji Panel functions 
buttons.forEach( e => e.addEventListener('click' , (tab) => 
        {       
                const openY = tab.target.dataset.btn
                const open = document.querySelector(openY)
                content_data.forEach( tabs => tabs.classList.remove('active'))
                open.classList.toggle('active')
        }
))


// Buttons trigger Emoji
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



// <!-- START -->
// <div class="flex-tab"><div class="Emoji-flex"><div class="Emoji" data-tooltip="${e.name}">
// <img class="Emoji-img" src="./node_modules/emoji-datasource-twitter/img/twitter/64/${e.image}" >
// </div>  
// <div class="Emoji-tooltip"></div>
// </div>
// </div>
// <!--  END  -->








// Emoji_list.addEventListener('DOMContentLoaded' , () => {
//     let options = {
//         root: Emoji_set,
//         rootMargin:"-250px 0px",
//         threshold:0.05,
//     };
//     let observer = new IntersectionObserver(beTouching, options)
// })
// function beTouching() {}


