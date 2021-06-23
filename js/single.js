function main(data) {
    console.log(data)
    const title = document.getElementById('title');
    title.innerHTML = data.id + ' ' + data.title


    const body = document.getElementById('body');
    body.innerHTML = data.body;

}