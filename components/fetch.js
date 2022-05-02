let searchnews = async (value) =>{

try{

    let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)

    let data = res.json()

    console.log(data)

    return data;

}catch(err){
    console.log(err)
  }

}
// *********get data completed******

let append = (data,results) =>{

    data.forEach(({description,title,urlToImage})=>{

      let div = document.createElement("div")

      let image = document.createElement("img")
      image.setAttribute("class","image")

      let titlee = document.createElement("h3")
      let desc = document.createElement("p")

     image.src = urlToImage

     titlee.innerText = title

     desc.innerText = description

     div.append(image,titlee,desc)
     results.append(div)

    })
}

export {searchnews,append}


