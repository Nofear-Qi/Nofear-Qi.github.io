var posts=["2025/02/23/hello-world/","2025/02/22/博客文章2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };