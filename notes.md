1. JSON placeholder photos for items pictures
2. JSON placeholder posts for items 
3. JSON placeholder posts/comments for attributes


() => {
return from(
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
})
.finally(function () {
// always executed
});
))
