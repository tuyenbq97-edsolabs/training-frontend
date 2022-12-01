const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve("Hello world"); }, 3000);
});

myPromise.then(function (value) {
    document.getElementById("demo").innerHTML = value;
});