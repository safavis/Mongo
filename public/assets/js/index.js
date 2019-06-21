const {fetch,alert}=window

const getarticle=_=>{
    fetch('/articles')
    .then(r=>r.json())
    .then(article=>{
        document.querySelector('.articleContainer').innerHTML=``
        console.log('article gerftim')
        article.forEach(element => {
            let piece=document.createElement('div')
            piece.className="piece"
            piece.innerHTML=`
            <p class="par"> ${element.title}</p>
            <button class="add"> Save Article</button>
            <br></br>
            `
            document.querySelector('.articleContainer').append(piece)
        })
    })
    .catch(e=>console.log(e))
}
getarticle()