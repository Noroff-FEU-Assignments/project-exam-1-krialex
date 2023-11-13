const url = 'https://unipop.no/bloggapi/wp-json/wp/v2/comments';
const data = {
    author_name: 'Navn',
    author_email: 'email@example.com',
    content: 'Dette er kommentaren min.'
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    console.log('Kommentar er lagt til:', data);
})
.catch((error) => {
    console.error('Feil:', error);
});
