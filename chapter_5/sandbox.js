const blogs = [
    {title: 'forma 1', likes: 120},
    {title: 'best of food', likes: 220},
    {title: 'best of movie', likes: 20}
];

console.log(blogs);

let user = {

    name: 'miguel',
    age: 30,
    email: 'miguel@miguel.com',
    location: 'Canada',
    blogs: [ 
        {title: 'forma 1', likes: 120},
        {title: 'best of food', likes: 220},
        {title: 'best of movie', likes: 20}
        ],
    login: function(){
        console.log('The user logged in')
    },
    logout: function(){
        console.log('The user logged out')
    },
    logBlogs: function(){
        console.log('the user has written teh following blogs:');
        this.blogs.forEach(blog=>{
            console.log(blog.title, blog.likes);
        })
    }
};

console.log(user);
console.log(user.name);
console.log(typeof(user));
console.log(typeof(user.name));
user.login();
user.logout();
user.logBlogs();


