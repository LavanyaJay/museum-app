function submitComment(){
    
    const inputField = document.getElementById("name");
    console.log("Input Field");
    const name = inputField.value;
    console.log(name);
    const msgText = document.getElementById("msg");
    console.log(msgText);
    const msg = msgText.value;
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
    const commentSection = document.getElementById("content");
    commentSection.appendChild(comment);
    inputField.value = null;
    msgText.value = null;


}