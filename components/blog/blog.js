const blogURL = "https://raw.githubusercontent.com/RandomGamingDev/RandomGamingDev.github.io.data/main/blog/blog.txt";

Blog();

async function Blog() {
    let postsTxt = await GetText(blogURL);
    let posts = postsTxt.split('\n');

    let blog = document.getElementById("blog");
    if (posts.length <= 1) {
        document.innerHTML += `<p style="text-align: center; padding-top: 50px">It appears that there are currently no blogs</p>`
        return;
    }
    for (var post = 0; post < posts.length - 1; post++) {
        let postElements = posts[post].split('|');
        blog.innerHTML += `
            <div style="display: flex; justify-content: center; padding-top: 50px;">
                <div onClick="GetPostText(${ post })" style="border: thin solid var(--default-color); border-radius: 25px; width: fit-content; text-align: center;">
                    <img src="${ postElements[0] }" width="500em" style="padding: 25px;"/>
                    <h1 style="padding-bottom: 25px; width: 13em">${ postElements[1] }<h1>
                </div>
            </div>
        `;
    }
}

async function GetPostText(postNum) {
    let postsTxt = await GetText(blogURL);
    let posts = postsTxt.split('\n');

    let blog = document.getElementById("blog");
    blog.innerHTML = await GetText(posts[postNum].split('|')[2]);
}