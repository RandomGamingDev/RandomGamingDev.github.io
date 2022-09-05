document.write(`
    <nav class="navbar navbar-light bg-transparent">
        <a class="navbar-brand" href="index.html">
            <img src="assets/Profile.png" width="25" height="25"/>
        </a>
        <a href="projects.html" style="text-decoration: none;">
            <span>Projects</span>
        </a>
        <a href="blog.html" style="text-decoration: none;">
            <span>Blog</span>
        </a>
        <a href="https://github.com/RandomGamingDev" target="_blank" style="text-decoration: none;">
            <span>My Github</span>
        </a>
        <div class="mt-3" onclick="ReverseMode()">
        <svg id="lightIcon" style="display: none" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>
        <svg id="darkIcon" style="display: none" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" viewBox="0 0 752 752">
                <path transform="matrix(4.7358 0 0 4.7358 139.21 139.21)" d="m80 79.6c-6.7001 5.5998-15.3 8.8999-24.7 8.8999-21.4 0-38.8-17.3-38.8-38.8 0-21.499 17.3-38.699 38.8-38.699" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="9"/>
                <path transform="matrix(4.7358 0 0 4.7358 139.21 139.21)" d="m79.6 79.9c-19.3 0.30024-32.1-16.8-34.9-36.4-1.7-12.1 2.4003-23.6 10.1-31.8" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="9"/>
            </svg>
        </div>
    </nav>
`)