// data.js

const movies = [
  {
    title: "Jennifer White Julio Gomez",
    thumbnail: "https://pbs.twimg.com/media/Den3nRSXkAA0SBh.jpg",
    video: "https://1.ppembed.com/remote_control.php?time=1775675247&cv=783e49796005cddd259323797b89aa35&lr=0&cv2=9839e44ff6e6c4150478e28be9ec8493&file=%2Fcontents%2Fvideos%2F246000%2F246201%2F246201_h.mp4&cv3=87440b68a8805d45499130c8da754736&cv4=b1799ec91dcd289cb7a26d49e1accf3d",
    categories: ["Anal", "bbc", "dp"],
    actors: [
      { name: "Jennifer White", image: "https://i.pinimg.com/736x/88/79/b6/8879b6668a501d8682bbe91b85d3feac.jpg" },
      { name: "Julio Gomez", image: "https://m.media-amazon.com/images/M/MV5BYTY2Y2Y5OTUtYTc3MS00ZTA0LTliYTgtYjViNDcyOTI2YjhiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" }
    ]
  },
  {
    title: "MILF Teacher Jennifer White Takes Her Students",
    thumbnail: "https://cdn.babehub.com/content/2404009/00150-01_1800.jpg",
    video: "https://cdn22.vids69.com/video/69/2/68125/68125.mp4",
    categories: ["Anal", "bbc", "dp"],
    actors: [
      { name: "Jennifer White", image: "https://i.pinimg.com/736x/88/79/b6/8879b6668a501d8682bbe91b85d3feac.jpg" },
      { name: "Damion Dayski", image: "https://image.tmdb.org/t/p/w500/95A488ucisVACUwKTljeCJ0bEMH.jpg" },
      { name: "Isiah Maxwell", image: "https://media.themoviedb.org/t/p/w500/6N539DK0cVvmqBk8SuXaMDkrc78.jpg" }
    ]
  },
  {
    title: "Two Is Better Than One",
    thumbnail: "https://www.wallpics.net/wp-content/uploads/2023/07/Jill-Kassidy-and-Her-Boyfriends-1080x720.jpg",
    video: "https://videos.pornobande.com/mp4/9145/9145_720p.m3u8",
    categories: ["bbc", "dp"],
    actors: [
      { name: "Louie Smalls", image: "https://m.media-amazon.com/images/M/MV5BMzBjNzdhY2EtYzAxMi00NmZhLTgzOTEtODljYzgzMmQ0NTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
      { name: "Jill Kassidy", image: "https://64.media.tumblr.com/f36630329eeb80bb87e1e2727f7f13a0/b85c5e1e54697343-ea/s640x960/849c8bd5a6bb511da25ed5d1085fd5890aca3c9e.jpg" },
      { name: "Rob Piper", image: "https://preview.redd.it/any-fans-of-rob-piper-here-v0-78ixds5dycrf1.jpg?width=300&format=pjpg&auto=webp&s=a09e2b9782a2640d8210f558cf1d6a03512cd725" }
    ]
  }
];

// 🟦 Aktorlar ro'yxati
const actorsList = Array.from(new Set(movies.flatMap(m => m.actors.map(a => a.name))))
  .map(name => {
    const movie = movies.find(m => m.actors.some(a => a.name === name));
    const actor = movie.actors.find(a => a.name === name);
    return { name, image: actor.image };
  });

// 🟦 Kategoriyalar ro'yxati
const categoriesList = Array.from(new Set(movies.flatMap(m => m.categories)));
