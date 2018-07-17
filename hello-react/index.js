// ///////////////////Plain old DOM programming
// let hello = document.createElement('h1');
// hello.textContent = "Allo there";

////////////////////////jQuery version
// let jqHello = $('<h1>', {
//     text: "Oi! Wassup"
// });


const h = React.createElement;

//React version
let hello = React.createElement('h1', null, 'Kebabs!');

let item = React.createElement('li', null, 'chicken hearts');
let list = React.createElement('ul', null, item);

let main = React.createElement('div', null, [
    hello,
    list
]);



ReactDOM.render(main, document.querySelector('[data-root]'));