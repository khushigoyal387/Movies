const int = document.querySelector("input")
const btn = document.querySelector("button")
const form = document.querySelector("form")
let box=document.querySelector(".result")

// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     fetch("https://api.themoviedb.org/3/search/movie?api_key=" + "fc8b58d611ee34244488bb7ca0727919" +"&query=" +int.value +"&include_adult=false&language=en-US&page=1F")
//     .then((response)=>{return response.json()})
//     .then ((result)=>{console.log(result)});
// });
btn.onclick = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=fc8b58d611ee34244488bb7ca0727919&language=en-US&query=${int.value}&page=1&include_adult=false`)
        .then((Response) => { return Response.json() })
        .then((res) => { console.log(res) , Showresult(res) })
}
function Showresult(res) {
    for (let i = 0; i < res.results.length; i++) { 
        let div = document.createElement("div")
        div.classList.add("img-box")
        let img = document.createElement("img")
        img.src = `https://image.tmdb.org/t/p/original${res.results[i].poster_path}`
        div.appendChild(img)
        box.appendChild(div)
    }
}


