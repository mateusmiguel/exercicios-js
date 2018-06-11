//IIFE (Immediately Invoked Function Expression) 
(function() {
    console.log('Será executado na hora que a função for declarada!')
    console.log('Foge do escopo mais abrangente')
    var a = 'a';
    console.log(a)
})()
