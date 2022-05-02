// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar")
nav.innerHTML = navbar();


import { searchnews,append } from "../components/fetch.js";

let search = (e) => {
    if (e.key === "Enter") {
        let value = document.getElementById("search").value
        searchnews(value).then((data) => {
            console.log(data);

            let results = document.getElementById("results")
            results.innerHTML = null
            append(data.articles, results)
        })


    }

}

document.getElementById("navbar").addEventListener("keydown", search)
// window.location.href = "index.html"