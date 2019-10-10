function submitComment(){
    
    const inputField = document.getElementById("name");
    console.log("Input Field");
    const name = inputField.value;
    console.log(name);
    const msgtext = document.getElementById("msg");
    console.log(msgtext);
    const msg = msgtext.value;
    console.log(msg)
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add("comment");
    comment.appendChild(h3);
    comment.appendChild(p);
    console.log(comment);


}