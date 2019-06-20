const {fetch,alert}=window

const getarticle=_=>{
    fetch('/articles')
    .then(r=>r.json())
    .then(article=>{
        document.querySelector('.articleContainer').innerHTML=``
        console.log('article gerftim')
        article.forEach(element => {
            let piece=document.createElement('div')
            piece.innerHTML=`
            <p> ${element.title}</p>
            <button> Save Article</button>

            `
            document.querySelector('.articleContainer').append(piece)
        })
    })
    .catch(e=>console.log(e))
}
getarticle()