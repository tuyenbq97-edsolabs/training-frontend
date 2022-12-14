let apiUrl = 'https://api-dev.weiwei.sg/api/v1/news/article/european-telcos-cash-in-on-tower-assets-as-high-cost-5g-investment-looms-58';
fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        const post = data.data;
        const postTitile= document.getElementById('post-title')
        console.log(postTitile)
        postTitile.innerHTML = post.title
        const postSource= document.getElementById('post-source')
        console.log(postSource)
        postSource.innerHTML = post.source
        const postAt= document.getElementById('post-at')
        console.log(postAt)
        postAt.innerHTML = post.createdAt
        const postImg= document.getElementById('post-img')
        postImg.setAttribute("src", post.imageUrl)
       
    })