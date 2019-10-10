function submitComment(){
    let noName = false;
    const inputField = document.getElementById("name");
    console.log("Input Field");
    let name = inputField.value;
    
    //Change first character to Uppercase
    if (name[0] !== name[0].toUpperCase()){
        
        let firstpart = name[0].toUpperCase();
        let secondPart = name.slice(1, name.length);
        let newName = firstpart.concat(secondPart);
        name = newName;
    }
    

    let noMsg = false;
    let longMsg = false;
    const msgText = document.getElementById("msg");
    console.log(msgText);
    const msg = msgText.value;
    console.log(msg)

    const processOn = doesNotPassAllValidation (name,msg)
        
    if (!processOn) {

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

    } else {
        noName ? alert('You forgot to fill in your name'): noMsg ? alert('You forgot to fill in your message!') : longMsg ? (alert("Comment is too long")) : false;
    }

    function doesNotPassAllValidation(nameVal, msgVal){

        if (nameVal === "" || nameVal === null) {
            noName = true;
            return true;
        } 
        if (msgVal === "" || msgVal === null){
            noMsg = true;
            return true;
            
        } else if (msgVal.length > 50){
            longMsg = true;
            return true;
        }
    }

}


