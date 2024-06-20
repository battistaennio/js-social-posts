const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

//seleziono il container
const container = document.getElementById("container");

//ciclo forEach per andare a stampare in pagina un div.post per ogni obj dell'array posts
posts.forEach((obj) => {
    //creo la struttura del div.post
    let postStructure = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${obj.author.image}" alt="${obj.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${obj.author.name}</div>
                        <div class="post-meta__time">${obj.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${obj.content}</div>
            <div class="post__image">
                <img src="${obj.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${obj.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${obj.id}" class="js-likes-counter">${obj.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
    
    //inserisco i div.post nel container
    container.innerHTML += postStructure;

});

//seleziono il like button
const likeBtn = document.querySelectorAll(".like-button");

//seleziono il contatore dei like
const likeCounter = document.querySelectorAll(".js-likes-counter");
//creo un array vuoto dove salvare l'id dei post con like
const likedPosts = [];

//per ogni oggetto della lista di likeBtn seleziono un elemento e il suo indice
likeBtn.forEach((element, index) => {

    //evento su click del like
    element.addEventListener("click", function (event) {

        //la pagina non si ricarica al click
        event.preventDefault();

        //dichiaro il singolo like cliccato
        const clickedElement = likeBtn[index];
        //aggiungo/tolgo la classe liked al like cliccato
        clickedElement.classList.toggle("like-button--liked");

        //seleziono il numero dei like del post a cui ho messo like
        const likeString = likeCounter[index];

        //converto il contenuto in numero
        let likeNumber = parseInt(likeString.innerText);

        //se ho cliccato sul like aggiungo +1 al numero dei like e aggiungo l'id del post nell'array
        if (element.classList.contains("like-button--liked")) {
            likeNumber++
            likedPosts.push(this.dataset.postid);
            console.log(likedPosts);

        } else {    //altimenti sottraggo 1 e tolgo l'id del post nell'array
            likeNumber--
            likedPosts.pop(this.dataset.postid);
        }

        //aggiorno in pagina
        likeString.innerText = likeNumber;

    });

});

  
