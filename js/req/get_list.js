fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => main(json));