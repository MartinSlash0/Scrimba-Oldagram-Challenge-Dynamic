const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 14
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 52
    },
    {
        name: "Natalia Feodotova",
        username: "nati1102",
        location: "Varna, Bulgaria",
        avatar: "images/avatar-nati.jpg",
        post: "images/post-nati.jpg",
        comment: "Love!",
        likes: 26 
    },
    {
        name: "Kalina Ivanova",
        username: "kiki1009",
        location: "Brașov, Romania",
        avatar: "images/avatar-kalina.jpg",
        post: "images/post-kalina.jpg",
        comment: "hello world! I suck at web design!",
        likes: 37
    },
    {
        name: "Salvador Dalí",
        username: "sally1515",
        location: "Figueras, Spain",
        avatar: "images/avatar-salvador.jpg",
        post: "images/post-salvador.jpg",
        comment: "LSD hits hard!",
        likes: 36
    },
    {
        name: "Martin Ivanov",
        username: "marthynn1997",
        location: "Varna, Bulgaria",
        avatar: "images/user-avatar.jpg",
        post: "images/post-user.jpg",
        comment: "...",
        likes: 18
    }
]

function render(){
    const main = document.querySelector('main')
    main.innerHTML = ''
    for(let i = 0; i < posts.length; i++){
        const post = document.createElement('div')
        const postInfo = document.createElement('div')
        const postImgContainer = document.createElement('div')
        const postLikes = document.createElement('div')
        const userImgContainer = document.createElement('div')
        const containerInfo = document.createElement('div')
        const iconContainer = document.createElement('div')
        const likesContainer = document.createElement('div')
        post.className = 'post'
        main.appendChild(post)
        postInfo.className = 'post-info'
        post.appendChild(postInfo)
        postImgContainer.className = 'post-img-container'
        post.appendChild(postImgContainer)
        postImgContainer.innerHTML = `<img class="post-img" src="${posts[i].post}" alt="Vincent van Gogh post image">`                            
        post.appendChild(postImgContainer)
        postLikes.className = 'post-likes'
        post.appendChild(postLikes)
        userImgContainer.className = 'user-img-container'
        userImgContainer.innerHTML = `<img class="user-img" src="${posts[i].avatar}" alt="user profile picture">`
        postInfo.appendChild(userImgContainer)
        containerInfo.className = 'container-info'
        containerInfo.innerHTML = `<p><span id="name">${posts[i].name}</span></p>
                                    <p id="location">${posts[i].location}</p>`
        postInfo.appendChild(containerInfo)
        iconContainer.className = 'icon-container'
        iconContainer.innerHTML = `<img id="like-btn" class="btn-icons" src="images/icon-heart.png" alt="like icon">
                                    <img class="btn-icons" src="images/icon-comment.png" alt="comment icon">
                                    <img class="btn-icons" src="images/icon-dm.png" alt="direct message icon">`
        postLikes.appendChild(iconContainer)
        likesContainer.className = 'likes-container'
        likesContainer.innerHTML = `<p><span>${posts[i].likes} likes</span></p>
                                    <p><span>${posts[i].username}</span> ${posts[i].comment}</p>`
        postLikes.appendChild(likesContainer)
    }
}

render()
