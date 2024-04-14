// function plus(a,b) {
//     return a + " " + b
// }

// let result = plus("Tien", "Tran")
// console.log(result);

fetch("https://jsonplaceholder.typicode.com/photos")
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        let newArray = data.slice(0, 5)
        // console.log(newArray[0].title);
        // console.log(newArray[1].title);
        // console.log(newArray[2].title);
        // console.log(newArray[3].title);
        // console.log(newArray[4].title);
        // for (let i = 0; i < newArray.length; i++) {
        //     let newDiv = document.createElement("div")
        //     document.body.appendChild(newDiv)
        //     newDiv.innerHTML = newArray[i].title
        // }

        // for (let i = 0; i < newArray.length; i++) {
        //     let img = document.createElement("img")
        //     document.body.appendChild(img)
        //     img.src = newArray[i].thumbnailUrl
            
        // }

        for (let i = 0; i < newArray.length; i++) {
            let divBox = `
            <div class="box">
                <img src="${newArray[i].thumbnailUrl}" alt="">
                <h1>${newArray[i].title}</h1>
            </div>`
            container.innerHTML += divBox        
        }

    })

    let a = 10;
    console.log("a = "+ a);
    console.log(`a = ${a}`);

    let s1 = "Hello"
    let s2 = "Vu Dzai 123"

    let example = document.querySelector(".example");
    example.innerHTML = `<h1>${s1}</h1> <p>${s2}</p>`

    let container = document.querySelector(".container")















