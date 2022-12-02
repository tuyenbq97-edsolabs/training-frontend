var Promise = new Promise(function(Resolve, Reject) {
  setTimeout(function(){ Resolve("Hello world"); }, 3000);
});
Promise.then(function (value) {
    document.getElementById("demo").innerHTML = value;
});