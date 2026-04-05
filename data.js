const movies = [
    {
    id:"-224729633_456239355",
    title:"MILF Teacher Jennifer White Takes Her Students' Big Black Cock",
    thumbnail:"https://pbs.twimg.com/media/Den3nRSXkAA0SBh.jpg",
    categories:["Anal","bbc","dp"],
    actors:[
      {name:"Jennifer White", image:"https://i.pinimg.com/736x/88/79/b6/8879b6668a501d8682bbe91b85d3feac.jpg"},
      {name:"Julio Gomez", image:"https://m.media-amazon.com/images/M/MV5BYTY2Y2Y5OTUtYTc3MS00ZTA0LTliYTgtYjViNDcyOTI2YjhiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"}
    ]
  },
  {
    id:"-230696351_456239085",
    title:"MILF Teacher Jennifer White Takes Her Students' Big Black Cock",
    thumbnail:"https://cdn.babehub.com/content/2404009/00150-01_1800.jpg",
    categories:["Anal","bbc","dp"],
    actors:[
      {name:"Jennifer White", image:"https://i.pinimg.com/736x/88/79/b6/8879b6668a501d8682bbe91b85d3feac.jpg"},
      {name:"Damion Dayski", image:"https://image.tmdb.org/t/p/w500/95A488ucisVACUwKTljeCJ0bEMH.jpg"},
      {name:"Isiah Maxwell", image:"https://media.themoviedb.org/t/p/w500/6N539DK0cVvmqBk8SuXaMDkrc78.jpg"}
    ]
  },
  {
    id:"-230696351_456239088",
    title:"Two Is Better Than One",
    thumbnail:"https://www.wallpics.net/wp-content/uploads/2023/07/Jill-Kassidy-and-Her-Boyfriends-1080x720.jpg",
    categories:["bbc","dp"],
    actors:[
      {name:"Louie Smalls", image:"https://m.media-amazon.com/images/M/MV5BMzBjNzdhY2EtYzAxMi00NmZhLTgzOTEtODljYzgzMmQ0NTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
      {name:"Jill Kassidy", image:"https://64.media.tumblr.com/f36630329eeb80bb87e1e2727f7f13a0/b85c5e1e54697343-ea/s640x960/849c8bd5a6bb511da25ed5d1085fd5890aca3c9e.jpg"},
      {name:"Rob Piper", image:"https://preview.redd.it/any-fans-of-rob-piper-here-v0-78ixds5dycrf1.jpg?width=300&format=pjpg&auto=webp&s=a09e2b9782a2640d8210f558cf1d6a03512cd725"}
    ]
  }
];

const actorsList = Array.from(new Set(movies.flatMap(m => m.actors.map(a => a.name))))
  .map(name => {
    const movie = movies.find(m => m.actors.some(a => a.name === name));
    const actor = movie.actors.find(a => a.name === name);
    return {name, image: actor.image};
  });

const categoriesList = Array.from(new Set(movies.flatMap(m => m.categories)));