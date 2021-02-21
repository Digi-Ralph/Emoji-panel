// const api = './node_modules/emoji-datasource-twitter/emoji.json'
// const Emoji_set = document.querySelector('.Emoji-set')
// function searchCharacter() {
//         fetch(api)
//         .then(function(e){
//         return e.json()
//         })
//         .then(function(data) {
//         let Emojicharacters = [];
//         Emojicharacters.push(...data)
//         test(Emojicharacters)
//     })
//     .catch( err => console.error(err)) 
// }
// searchCharacter();


// let test = (Emojicharacters) => {
//     let charactersEmoji = [];
//     Emojicharacters.filter(e => {
//         for (let i = 0 ; i < Emojicharacters.length; i++) { 
//             i = {
//                 name:e.name,
//                 short_name:e.short_name,
//                 short_names:e.short_names,
//                 category:e.category,
//                 image:e.image,
//                 unified:e.unified
//             }
//             if ((e.name && e.short_name && e.short_names && e.category && e.image && e.unified) !== null) {
//                 return charactersEmoji.push(i)
//             }
//         }
//     })
// Array_Emoji(charactersEmoji)
// }

let Array_Emoji = (charactersEmoji) => {
    console.log(charactersEmoji[4])
}

