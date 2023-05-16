let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 19,
    comments: [
        { author: 'e', body: 'f' },
        { author: 'g', body: 'h' },
    ],
    isLive: true
}
console.log(post)

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
let post1 = new Post('a', 'b', 'c')
console.log(post1)