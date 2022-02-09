const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    poster: 'https://image.tmdb.org/t/p/w200/MvYpKlpFukTivnlBhizGbkAe3v.jpg',
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    poster: 'https://image.tmdb.org/t/p/w200/vPG2zEKPXhovPW9S91SRnwr5JM1.jpg',
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    poster: 'https://image.tmdb.org/t/p/w200/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg',
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    poster: 'https://image.tmdb.org/t/p/w200/nAU74GmpUk7t5iklEp3bufwDq4n.jpg',
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    poster: 'https://image.tmdb.org/t/p/w200/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg',
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    poster: 'https://image.tmdb.org/t/p/w200/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    poster: 'https://image.tmdb.org/t/p/w200/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    poster: 'https://image.tmdb.org/t/p/w200/ezcS78TIjgr85pVdaPDd2rSPVNs.jpg',
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    poster: 'https://image.tmdb.org/t/p/w200/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    poster:'https://image.tmdb.org/t/p/w200/qymaJhucquUwjpb8oiqynMeXnID.jpg',
    likes: 22,
    dislikes: 12
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
