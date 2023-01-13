let users = [];

const addUser = function(e) {
    e.preventDefault();

    let user = {
        name: document.getElementById("name").value + " " + document.getElementById("last-name").value,
        age: document.getElementById("number").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        animal: document.getElementById("select-animal").value,
        time: Date.now()
    }

    if (user.name.length <= 1 || user.email.length <= 1 || user.password.length <= 8) {
        alert("Fill the form");
    } else {
        users.push(user);
    }
    
    document.querySelector("form").reset();
    console.warn("added", {users});

    localStorage.setItem("userList", JSON.stringify(users));
}

document.getElementById("submit-button").addEventListener("click", addUser);
