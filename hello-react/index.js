// ///////////////////Plain old DOM programming
// let hello = document.createElement('h1');
// hello.textContent = "Allo there";

////////////////////////jQuery version
// let jqHello = $('<h1>', {
//     text: "Oi! Wassup"
// });




//React version
let hello = React.createElement('h1', null, 'hello react!');
ReactDOM.render(hello, document.querySelector('[data-root]'));