const wpRestApiMedia = "https://unipop.no/bloggapi/wp-json/wp/v2/media";
const wpRestApiPosts = "https://unipop.no/bloggapi/wp-json/wp/v2/posts";
const carouselContainer = document.querySelector(".carusell-images");

const perPage = 20;
let visiblePosts = 0;

async function getImages() {
    try {
        const mediaResponse = await fetch(`${wpRestApiMedia}?per_page=${perPage}`);
        const mediaJson = await mediaResponse.json();

        console.log(mediaJson);

        for (let i = 0; i < mediaJson.length; i++) {
            const mediaId = mediaJson[i].id;
            const mediaUrl = mediaJson[i].guid.rendered;

            const postResponse = await fetch(`${wpRestApiPosts}?per_page=${perPage}/${mediaId}`);
            const postJson = await postResponse.json();

            const postId = postJson.id;

            console.log(postJson);

            carouselContainer.innerHTML += `<a href="specificblog.html?id=${postId}"><img src="${mediaUrl}"></a>`;
        }
    } catch (error) {
        console.log(error);
    }
}

getImages();
