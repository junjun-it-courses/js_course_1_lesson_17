let listContainer = document.getElementById('blog-items');

listContainer.addEventListener('click', function (e) {
    e.preventDefault();
    if(e.target.getAttribute('data-post-id')) {
        localStorage.postId = e.target.getAttribute('data-post-id');
        window.location.href = e.target.getAttribute('href');
    }
})


function main(data) {
    console.log(data);
    let listContainer = document.getElementById('blog-items');

    data.forEach(function (item) {
       const col = document.createElement('div');
       col.className = 'col-3';
       col.innerHTML = createTemplate(item.title, item.body, item.userId, item.id);
        // console.log(col)
       listContainer.append(col);
    });

}


function createTemplate(title, body, userId, id) {
    let template = '';
    let articleTitle = title.substring(0, 25);

    // template = template + '<div class="card" style="">';

    template += '<div class="card" style="">';
    template += '<svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"'
    template += 'role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">'
    template += `<title>${articleTitle}</title>`;
    template += '<rect width="100%" height="100%" fill="#868e96"></rect>';
    template += `<text x="50%" y="50%" fill="#dee2e6" dy=".3em">Img here</text> </svg>`
    template += '<div class="card-body">';
    template += `<h5 class="card-title">${articleTitle}</h5>`
    template += '<p class="card-text"></p>'
    template += `<a href="http://localhost:63342/js_course_1_lesson_17/article.html?_ijt=7oa466u9hbv76gv1vgmkedermf" class="btn btn-primary" data-post-id="${id}">Go to article</a>`
    template += '</div></div>'

    return template;
}

