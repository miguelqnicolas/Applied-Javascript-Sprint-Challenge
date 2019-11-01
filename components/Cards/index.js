// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(object) {
    const container = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
            const imageContainer = document.createElement('div');
                const image = document.createElement('img');
            const by = document.createElement('span');

    container.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    headline.textContent = object.headline;
    image.src = object.authorPhoto;
    by.textContent = object.authorName;

    imageContainer.appendChild(image);
    author.append(imageContainer, by);
    container.append(headline, author);

    return container;
}

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // console.log(response.data.articles.javascript[0].headline);
        response.data.articles.javascript.forEach(function(iteration) {
            cardsContainer.append(createCard(iteration));
            // console.log(iteration);
            // i spent so much time debugging and it was because i forgot to return
            // i did not need to loop over an object
        });
    })
    .catch(error => {
        console.log('There was an error:', error);
    })