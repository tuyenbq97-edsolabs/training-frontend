let apiUrl = 'https://api-dev.weiwei.sg/api/v1/news/article/european-telcos-cash-in-on-tower-assets-as-high-cost-5g-investment-looms-58';
fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
  .then(function (data) {
    
    const object = data.data;

    console.log(object);

    
    document.getElementById("title").innerHTML = object.title;

    document.getElementById("source").innerHTML = object.source;

    document.getElementById("At").innerHTML = object.createdAt;
    
    document.getElementById("img").src = object.imageUrl;
  })