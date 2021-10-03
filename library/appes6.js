class Book{
    constructor(names, author, type) {
        this.names = names;
        this.author = author;
        this.type = type;
    };
}
class Display{
   add(book1){
        let tabelbody = document.getElementById('tabelbody');
        let uistring = ` <tr>
    <td>${book1.names}</td>
    <td>${book1.author}</td>
    <td>${book1.type}</td>
    </tr>`
        tabelbody.innerHTML += uistring;
    }
    clear(){
        let formvalue = document.getElementById('libraryform');
        formvalue.reset();
    }
    validate(book1){
        console.log(book1.names.length,book1.author.length);
        if (book1.names.length < 2 || book1.author.length < 2) {
            return false;
        } else {
            return true;
        }
    }
    show(type,message1){
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert- ${type} alert-dismissible fade show" role="alert">
    <strong>message:!</strong>  ${message1}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`
    setTimeout(()=>{
    message.innerHTML='';
    },2000)
    }
}
// adding the event listners
let formvalue = document.getElementById('libraryform');
formvalue.addEventListener('submit', libraryformsubmit);
function libraryformsubmit(e) {
    let names = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let computerprogramming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if (fiction.checked) {
        type = fiction.Value;
    }
    else if (computerprogramming.checked) {
        type = computerprogramming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book1 = new Book(names, author, type);
    let display1 = new Display();
    if (display1.validate(book1)) {
        display1.add(book1);
        display1.clear();
        display1.show('sucess','your book has been sucessfully added');
    } else {
        display1.show('failure','sorry we cannot add this book');
    }
    e.preventDefault()
}