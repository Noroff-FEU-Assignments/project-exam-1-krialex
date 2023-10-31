const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const postContainer = document.querySelector(".blog-post-site");

const wpRestApiPosts = "https://unipop.no/bloggapi/wp-json/wp/v2/posts/" + id;

async function blogPost() {
    try {
        const blogResponse = await fetch(wpRestApiPosts);
        const blogJson = await blogResponse.json();

        postContainer.innerHTML += `<div class="spesific-page"><h2>${blogJson.title.rendered}</h2><div class="spesific-content">${blogJson.content.rendered}</div></div>`;
        
        console.log(blogJson);
    } catch(error) {
        console.log(error);
    }
}
blogPost();
