const root = document.getElementById('root');

window.onload = () => {
    const dynamicNode = document.createElement('section');
    const booksList = document.createElement('ul');
    const editForm = createForm();
    const bookPreview = document.createElement('div');

    dynamicNode.appendChild(bookPreview);
    dynamicNode.appendChild(editForm);

    const createAddBookBtn = () => {
        const button = document.createElement('button');
        button.innerText = '+ Add new book';
        button.onclick = (e) => {
            e.preventDefault();
            history.pushState('', '', '#add');
            window.dispatchEvent(new Event('popstate'))
        }
        return button;
    }


    root.appendChild(createAddBookBtn());
    root.appendChild(booksList);
    root.appendChild(dynamicNode);

    window.addEventListener('popstate', (evt) => {
        evt.preventDefault();
        if (location.hash === '#edit') {
            const book = getBook(+location.search[location.search.length - 1]);
            appendForm(book);
            showElement(editForm);
            hideElement(bookPreview);
            // dynamicNode.innerHTML = '';
            // dynamicNode.appendChild(editForm);
        } else if (location.hash === '#add') {
            editForm.reset();
            hideElement(editForm);
            showElement(editForm);
        } else if (location.hash === '#preview') {
            createBookPreview(+location.search[location.search.length - 1]);
           hideElement(editForm);
           showElement(bookPreview);
        }

    })

    function updateBookList() {
        booksList.innerHTML = '';
        JSON.parse(localStorage.getItem('books')).forEach((book) => {
            booksList.appendChild(createBookItem(book));
        });
    }

    updateBookList();


    function getBook(id) {
        return JSON.parse(localStorage.getItem('books')).find(book => book.id === id);
    }

    function updateBook(id, bookData) {
        const books = getBookList();
        const index = getIndex(id);
        books[index] = bookData;
        console.log(books);
        localStorage.removeItem('books');
        localStorage.setItem('books', JSON.stringify(books));
    }

    function getIndex(id) {
        let index = -1;
        JSON.parse(localStorage.getItem('books')).forEach((book, i) => {
            if (book.id === id) {
                index = i;
            }
        })
        return index;
    }

    function getBookList() {
        return JSON.parse(localStorage.getItem('books'));
    }


    function createBookItem(book) {
        const {id, name} = book;
        const li = document.createElement('li');
        const title = document.createElement('b');
        title.innerText = name;
        li.id = id;
        li.addEventListener("click", (evt) => {
            evt.stopImmediatePropagation();
            history.pushState('', '', `?id=${id}#preview`);
            window.dispatchEvent(new Event('popstate'))
        });

        const editBtn = createEditButton(id);
        const deleteBtn = createDeleteButton(id);
        li.appendChild(title);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        return li;
    }

    function createEditButton(id) {
        const btn = document.createElement('button');
        btn.innerText = 'Edit';
        btn.hash = `?id=${id}#edit`;
        btn.addEventListener('click', (evt) => {
            evt.stopImmediatePropagation();
            history.pushState('', '', `?id=${id}#edit`);
            window.dispatchEvent(new Event('popstate'));
        });
        return btn;
    }

    function createDeleteButton(id) {
        const btn = document.createElement('button');
        btn.innerText = 'Delete';
        btn.addEventListener('click', (evt) => {
            evt.stopImmediatePropagation();
            history.pushState('', '', `?id=${id}#delete`);
            window.dispatchEvent(new Event('popstate'));
        });
        return btn;
    }

    function createForm() {
        const form = document.createElement(`form`);
        form.id = 'form';
        const name = document.createElement(`input`);
        name.required = true;
        name.id = 'name';
        const author = document.createElement('input');
        author.required = true;
        author.id = 'author';
        const imageUrl = document.createElement(`input`);
        imageUrl.required = true;
        imageUrl.id = 'imageUrl';
        const plot = document.createElement(`textarea`);
        plot.required = true;
        plot.id = 'plot';
        const submit = document.createElement('button');
        submit.innerText = `save`;
        submit.onclick = handleSave;
        const cancel = document.createElement('button');
        cancel.innerText = 'cancel';
        cancel.onclick = handleCancel;
        const controls = [name, author, imageUrl, plot, submit, cancel];
        controls.forEach(control => form.appendChild(control));
        return form;
    }

    function appendForm(book) {
        const {name, author, imageUrl, plot} = book;
        document.getElementById('name').value = name;
        document.getElementById('author').value = author;
        document.getElementById('plot').value = plot;
        document.getElementById('imageUrl').value = imageUrl;

    }

    function createBookPreview(id) {
        const book = getBook(id);
        const {name, author, imageUrl, plot} = book;
        const bookTitle = document.createElement('h2');
        bookTitle.innerText = name;
        const bookAuthor = document.createElement('h3');
        bookAuthor.innerText = author;
        console.log(author);
        const bookImg = document.createElement('img');
        bookImg.src = imageUrl;
        const bookPlot = document.createElement('p');
        bookPlot.innerText = plot;
        const containerItems = [bookTitle, bookImg, bookAuthor, bookPlot];
        containerItems.forEach(item => bookPreview.appendChild(item));
    }

    function showElement(el) {
        el.classList.remove('invisible')
    }

    function hideElement(el) {
        el.classList.add('invisible');
    }

    function handleCancel() {
        const confirm = confirm('Discard changes?');
        if (confirm) {
            history.back();
        }
    }

    function handleSave(e) {
        e.preventDefault();
        const book = {
            name: document.getElementById('name').value,
            author: document.getElementById('author').value,
            plot: document.getElementById('plot').value,
            imageUrl: document.getElementById('imageUrl').value
        };
        const bookId = +location.search[location.search.length - 1];
        if (location.hash === '#edit') {
            updateBook(bookId, book);
            updateBookList();
            history.pushState('', '', `?id=${bookId}#preview`);
            window.dispatchEvent(new Event('popstate'));
            setTimeout(() => {
                alert('Book successfully updated');
            }, 300)
        } else {
            addBook(book);
        }
    }

    function addBook(book) {
        const books = JSON.parse(localStorage.getItem('books'));
        const newBookId = Math.max(...books.map(book => book.id))+1;
        book.id = newBookId;
        books.unshift(book);
        localStorage.removeItem('books');
        localStorage.setItem('books', JSON.stringify(books));
        console.log(JSON.parse(localStorage.getItem('books')));
        updateBookList();
    }
}
