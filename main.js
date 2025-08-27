/* This is a comment 
with two lines */
console.log("Hello, World!");

const greeting = "Welcome to my js tip calculator!";
console.log(greeting);

const tips = [0, 'chewing gum', 3, 5, 7, 10, 15, 20, 25, 30, 50]

const restaurant = tips.filter(tip => {
  return tip <= 10
})

const hairdresser = tips.filter(tip => {
  return tip < 20 && tip > 5
})

const pizza_delivery = tips.findIndex(tip => {
  return tip === 'chewing gum'
})

const egregious_amount = tips.every(tip => {
  return tip < 51 ? 'too much' : 'reasonable';
}) 

const too_little = tips.every(tip => {
  return tip > 2 ? 'too little' : 'generous'
})

// Always have this at the end
const millionaire = tips.map(tip => {
  return tip *= 1000
})

const millionaire_min = tips.reduce((tip, total_tip) => {
  return total_tip += tip
}, 1000)

console.log(`Just a quick headsup that it is ${too_little} that anything under 3% is too little and it is also ${egregious_amount} that anything above 50% is the same.. in Monaco.`)

console.log(`For restaurants you want to tip within this range: ${restaurant}%, it all depends on food quality`)

console.log(`For hairdressers it doesn\'t matter weather they did a good job or not, you should tip in this range ${hairdresser}`)

console.log(`Pizza delivery people only deserve ${pizza_delivery} thing and that's ${tips[pizza_delivery]}`)

//Always keep this at the end as well
console.log(`And if you are a millionaire you are required by law to tip at least ${millionaire_min}% but any of these tips shown bellow are generous \n${millionaire}%`)