const books = [
    {
        id: 0,
        name: 'JavaScript for Kids',
        author: 'Nick Morgan',
        imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQeG5gc2' +
            'pNtwGE8_SLTyHipFdQ29c1WhMhFsC3WLhp022oKGF7c',
        plot: 'JavaScript for Kids is a lighthearted introduction that teaches programming essentials' +
            ' through patient, step-by-step examples paired with funny illustrations. You’ll begin with the basics, ' +
            'like working with strings, arrays, and loops, and then move on to more advanced topics, ' +
            'like building interactivity with jQuery and drawing graphics with Canvas.'
    },
    {
        id: 1,
        name: 'Eloquent JS',
        author: 'Marijn Haverbeke',
        imageUrl: 'https://eloquentjavascript.net/img/cover.jpg',
        plot: 'This is a book about JavaScript, programming, and the wonders of the digital. ' +
            'You can read it online here, or get your own paperback copy.'
    },
    {
        id: 2,
        name: '7 habits of highly effective people',
        author: 'Stephen R. Covey',
        imageUrl: 'https://image.ebooks.com/previews/096/096478/096478095/096478095.jpg',
        plot: 'This is a book about JavaScript, programming, and the wonders of the digital. ' +
            'You can read it online here, or get your own paperback copy.'
    }
];

localStorage.setItem('books', JSON.stringify(books));
