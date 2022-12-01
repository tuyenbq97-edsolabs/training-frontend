const Promise = new Promise(function(Resolve, myReject) {
  setTimeout(function(){ Resolve("Hello world"); }, 3000);
});

Promise.then(function (value) {
    document.getElementById("demo").innerHTML = value;
});