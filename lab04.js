function msg() {
    var name = document.getElementById("fullname").value;
    alert(`Hello ${name}!`);
}

function validateText(){
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let text = document.getElementById("validate").value;
    if (validation.test(text)){
        alert('ERROR: I SEE A SPECIAL CHARACTER');
    }
}
var counter = 0;
function color(){
    if (++counter % 2 == 0){
        document.body.style.backgroundColor = 'cadetblue';
    } else{
        document.body.style.backgroundColor = 'slateblue';
    } 
}

function addText(){
    const heading = document.getElementById('heading');
    if (!heading.innerHTML.includes(' - Adding Text')) {
        heading.innerHTML += ' - Adding Text';
    }
}