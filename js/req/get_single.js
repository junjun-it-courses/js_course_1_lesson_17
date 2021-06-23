// localStorage.setItem('postId', 1);
fetch(
    'https://jsonplaceholder.typicode.com/posts/' + localStorage.getItem('postId'))
    .then((response) => response.json())
    .then((json) => main(json));