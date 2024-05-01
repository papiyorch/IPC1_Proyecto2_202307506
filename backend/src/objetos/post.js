class Post {

    static counter = 1;

    constructor(carnet, category, text, image, dateTime, likes, comments){
        this.id = Post.counter++;
        this.carnet = carnet;
        this.category = category;
        this.text = text;
        this.image = image;
        this.dateTime = dateTime;
        this.likes = likes;
        this.comments = comments || [];
    }

    
}


module.exports = Post; 