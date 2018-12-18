makeSound ({
    weight: 23,
    sound: 'woof'
})

// 01 - default way
function makeSound(options) {
    var species = options.species || 'animal'
    var sound = options.sound
    console.log('The ' + species + ' says ' + sound + '!')
}

// 02 - Using destructuring
function makeSound(options) {
    var { species, sound } = options
    species = species || 'animal'
    console.log('The ' + species + ' says ' + sound + '!')
}

// 03 - call options in function signature
function makeSound({ species = 'animal', sound}) {
    console.log('The ' + species + ' says ' + sound + '!')
}