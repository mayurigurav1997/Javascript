const video = {
    title: "a",
    play() {
        console.log("Hi", this)
    },
    tags: ["a", "b", "c", "d", "e"],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag)
        }, this);
    }

}
video.showTags()

// video.play()
// video.stop = function () {
//     console.log(this)
// }
// video.stop()

// function playVideo() {
//     console.log(this)
// }
// playVideo()

// function Video(title) {
//     this.title = title;
//     console.log(this)
// }
// const v = new Video('bc')