const projectsURL = "https://raw.githubusercontent.com/RandomGamingDev/RandomGamingDev.github.io.data/main/projects/projects.txt";

Blog();

async function Blog() {
    let postsTxt = await GetText(projectsURL);
    let posts = postsTxt.split('\n');

    let projects = document.getElementById("projects");
    if (posts.length <= 1) {
        projects.innerHTML += `<p style="text-align: center; padding-top: 50px">It appears that there are currently no featured projects</p>`;
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
    let postsTxt = await GetText(projectsURL);
    let posts = postsTxt.split('\n');

    let projects = document.getElementById("projects");
    projects.innerHTML = await GetText(posts[postNum].split('|')[2]);
}