window.addEventListener("load", () => {
    document.querySelector("#userDataBtn").addEventListener("click", async () => {
        const res = await fetch('http://localhost:3000/users');
        const userData = await res.json();
        console.log(userData.data)
        // fetch("http://localhost:3000/users") //?name=8642
        //     .then(res => res.json())
        //     .then(userData=> console.log(userData.data))
        const userDataArr = userData.data
        
        document.querySelector("#userData").innerHTML += 
            `${userDataArr.map(user =>
                `<li><a href="#">${user.username}</a></li>`
                ).join('')}`
    })

    document.querySelector("#addUserBtn").addEventListener("click", async () => {
        const username = document.querySelector('input[name="username"]').value
        const name = document.querySelector('input[name="name"]').value
        const image = document.querySelector('input[name="image"]').files[0]
        console.log("Done0000!", username, name, image);
        
        // create form data
        const form = new FormData();
        form.append("username", username)
        form.append("name", name)
        form.append("image", image.name)
        console.log("Done111!", form)
        
        const res = await fetch('http://localhost:3000/users', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: form,
        });
        const userData = await res.json();        
        console.log("Done2222!",userData)       
    })

})