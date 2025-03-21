const database = require("./database");
const Album = require("./albums");

const seed = async () => {
  try {
    await database.sync({ force: true });
    await Promise.all(albums.map((album) => Album.create(album)));
    console.log("Seeded!");
    database.close();
  } catch (error) {
    console.error(error);
    database.close();
  }
};

seed();

const albums = [
  {
    artist: "Rich Brian",
    id: 1,
    price: 2000,
    title: "The Sailor",
    image:
      "https://resources.tidal.com/images/54253cdf/61dc/457f/aaa1/45c9d1083a84/750x750.jpg",
    year: "2019",
    createdAt: "2020-04-14 17:31:07.358-04",
    genre: "Rap",
    updatedAt: "2020-04-14 17:31:07.358-04",
    inventory: 100,
  },
  {
    artist: "Drake",
    id: 2,
    price: 2000,
    title: "Scorpion",
    image:
      "https://resources.tidal.com/images/215925ab/0b79/43cc/b713/2d41576a2bff/750x750.jpg",
    year: "2018",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rap",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "The Weeknd",
    id: 3,
    price: 2000,
    title: "After Hours",
    image:
      "https://resources.tidal.com/images/ebb9a459/3c33/4fe5/a131/541ae352f553/750x750.jpg",
    year: "2019",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "R&B",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "21 Savage",
    id: 4,
    price: 2000,
    title: "Without Warning",
    image:
      "https://resources.tidal.com/images/2f8123d7/1ea7/4149/9d0c/236ccfa8b6c0/750x750.jpg",
    year: "2017",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rap",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Post Malone",
    id: 5,
    price: 2000,
    title: "Beerbongs & Bentleys",
    image:
      "https://resources.tidal.com/images/d980b763/ad2e/47d9/83b0/68ef1a959990/750x750.jpg",
    year: "2018",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rap",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Alicia Keys",
    id: 6,
    price: 2000,
    title: "The Element of Freedom",
    image:
      "https://resources.tidal.com/images/f99a89cd/5869/4174/b573/e3aa4140ad25/750x750.jpg",
    year: "2009",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "R&B",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Pearl Jam",
    id: 7,
    price: 2000,
    title: "Gigaton",
    image:
      "https://resources.tidal.com/images/ea8b6af4/46a4/48fe/8129/039063bca6c4/750x750.jpg",
    year: "2020",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rock",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Nine Inch Nails",
    id: 8,
    price: 2000,
    title: "Ghosts V: Together",
    image:
      "https://resources.tidal.com/images/fa1e1a95/11fe/466e/a4b0/8c4ad50547b0/750x750.jpg",
    year: "2020",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rock",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Nine Inch Nails",
    id: 9,
    price: 1680,
    title: "Add Violence",
    image:
      "https://resources.tidal.com/images/81793519/f4ab/4163/ac0f/7ae5d1e7cffa/750x750.jpg",
    year: "2017",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rock",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Beyoncè",
    id: 10,
    price: 2000,
    title: "Add Lemonade",
    image:
      "https://resources.tidal.com/images/d2c60d13/1b97/46bc/a7cd/a7741069c007/750x750.jpg",
    year: "2016",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "R&B",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 0,
  },
  {
    artist: "Blake Shelton",
    id: 11,
    price: 2000,
    title: "Fully Loaded: God's Country",
    image:
      "https://resources.tidal.com/images/82dd8da6/04f1/4805/9b9c/93bb7a23e9a0/750x750.jpg",
    year: "2019",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Country",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "BTS",
    id: 12,
    price: 2000,
    title: "2 Cool 4 Skool",
    image:
      "https://resources.tidal.com/images/a92c2194/4919/40fa/bbf7/2eb8e752e430/750x750.jpg",
    year: "2013",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Korean",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Eason Chan",
    id: 13,
    price: 2000,
    title: "Life Continues",
    image:
      "https://resources.tidal.com/images/6aa6ae09/71b4/4eae/ba96/782f1127a507/750x750.jpg",
    year: "2006",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Chinese",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 88,
  },
  {
    artist: "Eason Chan",
    id: 14,
    price: 2000,
    title: "L.O.V.E.",
    image:
      "https://resources.tidal.com/images/0beadb73/c18a/4f09/b04e/b5cb0919e8ff/750x750.jpg",
    year: "2006",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Chinese",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 88,
  },
  {
    artist: "Taylor Swift",
    id: 15,
    price: 2000,
    title: "Lover",
    image:
      "https://resources.tidal.com/images/4b025dc3/fae1/4b1e/982e/36a194fe9cc4/750x750.jpg",
    year: "2019",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Pop",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Taylor Swift",
    id: 16,
    price: 2000,
    title: "1989",
    image:
      "https://resources.tidal.com/images/d47dad3d/f64b/4a5d/8b81/46e3fe733186/750x750.jpg",
    year: "2014",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Pop",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Chris Brown",
    id: 17,
    price: 1000,
    title: "Before The Trap: Nights  In Tarzana",
    image:
      "https://resources.tidal.com/images/1374a530/fa9e/4509/8428/99d2df7de4d6/750x750.jpg",
    year: "2016",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "R&B",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Chris Brown",
    id: 18,
    price: 2000,
    title: "Indigo",
    image:
      "https://resources.tidal.com/images/509d4b92/2dc8/4e21/a4c8/6caaee985311/750x750.jpg",
    year: "2019",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "R&B",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Eminem",
    id: 19,
    price: 2000,
    title: "Relapse",
    image:
      "https://resources.tidal.com/images/5062cbce/f6c7/4c71/b965/518b3d2dbef9/750x750.jpg",
    year: "2009",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rap",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Eminem",
    id: 20,
    price: 2000,
    title: "Kamikaze",
    image:
      "https://resources.tidal.com/images/5eb3b245/3574/40d0/9fad/c436673df6da/750x750.jpg",
    year: "2018",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rap",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "King Gizzard & The Lizard Wizard",
    id: 21,
    price: 1200,
    title: "Chunky Shrapnel",
    image:
      "https://resources.tidal.com/images/28150e78/09b1/4ca0/b270/cc49c8528a63/750x750.jpg",
    year: "2020",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rock",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Loote",
    id: 22,
    price: 3400,
    title: "Hearts Eyes",
    image:
      "https://resources.tidal.com/images/bb89e73a/e1d2/4cd5/ab66/09b0c85ff53f/640x640.jpg",
    year: "2020",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Pop",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 10,
  },
  {
    artist: "Hayley Williams",
    id: 23,
    price: 2600,
    title: "Petals For Armor II",
    image:
      "https://resources.tidal.com/images/4031d446/4234/487d/8517/713cb8ce27f4/750x750.jpg",
    year: "2020",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Pop",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 80,
  },
  {
    artist: "Randy Houser",
    id: 24,
    price: 2600,
    title: "How Country Feels",
    image:
      "https://resources.tidal.com/images/e9231590/38ad/4de1/b626/03d6b4160730/750x750.jpg",
    year: "2013",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Country",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 80,
  },
  {
    artist: "Randy Houser",
    id: 25,
    price: 2600,
    title: "They Call Me Cadillac",
    image:
      "https://resources.tidal.com/images/3dd430fa/c1e1/4bfd/a0ec/29041c6e77cf/750x750.jpg",
    year: "2010",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Country",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 80,
  },
  {
    artist: "Big Bang",
    id: 26,
    price: 2600,
    title: "Still Alive (Special Edition)",
    image:
      "https://resources.tidal.com/images/c6c87ca7/1009/4d49/a7a3/36ad8b5910a1/750x750.jpg",
    year: "2012",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Korean",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 80,
  },
  {
    artist: "Big Bang",
    id: 27,
    price: 2800,
    title: "Still Alive",
    image:
      "https://resources.tidal.com/images/d19f0d77/16b9/4a44/8e34/d3b14bdeb67a/750x750.jpg",
    year: "2012",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Korean",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 80,
  },
  {
    artist: "Big Bang",
    id: 28,
    price: 2800,
    title: "Big Bang",
    image:
      "https://resources.tidal.com/images/6d276ea8/1896/47c9/a723/81ae9a80d74e/750x750.jpg",
    year: "2009",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Korean",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 80,
  },
  {
    artist: "Big Bang",
    id: 29,
    price: 2800,
    title: "Always",
    image:
      "https://resources.tidal.com/images/06a53a55/ead0/46ef/a811/0067911869c4/750x750.jpg",
    year: "2007",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Korean",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 80,
  },
  {
    artist: "Andy Lau",
    id: 30,
    price: 2800,
    title: "To You",
    image:
      "https://resources.tidal.com/images/ec133011/3124/4ba8/81de/799d247a962e/750x750.jpg",
    year: "1990",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Chinese",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 80,
  },
  {
    artist: "Future",
    id: 31,
    price: 2600,
    title: "High Off Life",
    image:
      "https://resources.tidal.com/images/fbcee98b/8b40/446f/9498/85fc32362caa/750x750.jpg",
    year: "2020",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rap",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Gunna",
    id: 32,
    price: 2600,
    title: "Wunna",
    image:
      "https://resources.tidal.com/images/73a6f604/32c9/446c/83a4/07218feff7ae/750x750.jpg",
    year: "2020",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rap",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Tracy Lawrence",
    id: 33,
    price: 2600,
    title: "Sticks and Stones",
    image:
      "https://resources.tidal.com/images/fd4e8a05/5f0d/4668/85ca/c7e545a630aa/750x750.jpg",
    year: "1991",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Country",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Sammi Cheng",
    id: 34,
    price: 2600,
    title: "Feel So Good",
    image:
      "https://resources.tidal.com/images/710e0f6a/27de/4154/b76b/549f21d89c2f/750x750.jpg",
    year: "1998",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Chinese",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Sammi Cheng",
    id: 35,
    price: 2600,
    title: "Our Theme Song",
    image:
      "https://resources.tidal.com/images/d4e43987/8ee2/4f18/ab95/b34aab35d2d0/750x750.jpg",
    year: "1999",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Chinese",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Sammi Cheng",
    id: 36,
    price: 2600,
    title: "We Grew This Way",
    image:
      "https://resources.tidal.com/images/bf65be56/85bd/4b1b/a308/558f41e82f23/750x750.jpg",
    year: "2019",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Chinese",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Sammi Cheng",
    id: 37,
    price: 2600,
    title: "Sammi By My Side Birthday Gig",
    image:
      "https://resources.tidal.com/images/58ae7c65/962c/4e85/b9f5/11df87c18224/750x750.jpg",
    year: "2018",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Chinese",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Faye Wong",
    id: 38,
    price: 2600,
    title: "Fu Yan",
    image:
      "https://resources.tidal.com/images/c603d316/38ac/4896/af87/b027e17a176c/750x750.jpg",
    year: "2015",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Chinese",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Tracy Lawrence",
    id: 39,
    price: 2600,
    title: "The Complete Albums 1991 - 2001",
    image:
      "https://resources.tidal.com/images/adf82f6d/5443/4515/b6cd/7e1822b43fdb/750x750.jpg",
    year: "2019",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Country",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Tracy Lawrence",
    id: 40,
    price: 2600,
    title: "Made In America",
    image:
      "https://resources.tidal.com/images/c7a1d1f0/9cf2/4db5/9b66/d7c307b528a6/750x750.jpg",
    year: "2019",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Country",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Tracy Lawrence",
    id: 41,
    price: 2600,
    title: "Texas Tornado",
    image:
      "https://resources.tidal.com/images/c00a2f64/ff97/462b/93a5/a56930e12346/750x750.jpg",
    year: "1994",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Country",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Tracy Lawrence",
    id: 42,
    price: 2600,
    title: "Frozen In Time",
    image:
      "https://resources.tidal.com/images/240d6bbd/5dab/4816/8355/c6c9f28248d3/750x750.jpg",
    year: "2018",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Country",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "IU",
    id: 43,
    price: 2600,
    title: "Love Poem",
    image:
      "https://resources.tidal.com/images/03439432/04c7/4031/9bea/6d03511ee092/750x750.jpg",
    year: "2019",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Korean",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Blackpink",
    id: 44,
    price: 2600,
    title: "Kill This Love",
    image:
      "https://resources.tidal.com/images/512d447b/1876/41f2/b7df/378a2c3b02c0/750x750.jpg",
    year: "2019",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Korean",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Blackpink",
    id: 45,
    price: 2600,
    title: "Square Up",
    image:
      "https://resources.tidal.com/images/979c222d/1eef/4263/854c/c758a10af859/750x750.jpg",
    year: "2018",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Korean",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Britney Spears",
    id: 46,
    price: 2600,
    title: "Glory",
    image:
      "https://resources.tidal.com/images/d94f08b6/552c/4595/b4ec/fcd518d5720c/750x750.jpg",
    year: "2016",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Pop",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 60,
  },
  {
    artist: "Britney Spears",
    id: 47,
    price: 3600,
    title: "Glory (Deluxe Version)",
    image:
      "https://resources.tidal.com/images/c92d7371/c936/4be8/b4b2/a6ebc8910449/750x750.jpg",
    year: "2016",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Pop",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 80,
  },
  {
    artist: "Christina Aguilera",
    id: 48,
    price: 3000,
    title: "Liberation",
    image:
      "https://resources.tidal.com/images/60f4f7b6/1af8/432f/8365/f07fe1f0a4dc/750x750.jpg",
    year: "2018",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Pop",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 80,
  },
  {
    artist: "Demi Lovato",
    id: 49,
    price: 3000,
    title: "Confident",
    image:
      "https://resources.tidal.com/images/fe4ff560/d621/4fc7/95b6/162c99d2de3f/750x750.jpg",
    year: "2015",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Pop",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 80,
  },
  {
    artist: "Chris Brown",
    id: 50,
    price: 3000,
    title: "Heartbreak on a Full Moon",
    image:
      "https://resources.tidal.com/images/71ad60bf/b05e/4a12/b122/f52286b62a54/750x750.jpg",
    year: "2017",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "R&B",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 80,
  },
  {
    artist: "Chris Brown",
    id: 51,
    price: 3000,
    title: "Indigo (Extended)",
    image:
      "https://resources.tidal.com/images/a5f77d6b/183f/454f/9e17/641368014947/750x750.jpg",
    year: "2019",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "R&B",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "T-Pain",
    id: 52,
    price: 1000,
    title: "Rappa Ternt Sanga",
    image:
      "https://resources.tidal.com/images/7577905d/2586/472a/aec4/32f1d2002249/750x750.jpg",
    year: "2005",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "R&B",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Slayer",
    id: 53,
    price: 2000,
    title: "Reign In Blood",
    image:
      "https://resources.tidal.com/images/44bd2175/072d/4878/81f7/413afbd5fb0f/750x750.jpg",
    year: "1986",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rock",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Slayer",
    id: 54,
    price: 2000,
    title: "God Hates Us All",
    image:
      "https://resources.tidal.com/images/d0357538/5ca9/4b98/b33e/628577271aef/750x750.jpg",
    year: "2001",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rock",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Slayer",
    id: 55,
    price: 2000,
    title: "The Repentless Killogy",
    image:
      "https://resources.tidal.com/images/37761f89/cd35/402e/bb17/da99fb3da3f6/750x750.jpg",
    year: "2019",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rock",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
  {
    artist: "Slayer",
    id: 56,
    price: 2000,
    title: "Repentless",
    image:
      "https://resources.tidal.com/images/e0c0ebd9/ab5c/4bb0/83a5/212299d7802b/750x750.jpg",
    year: "2015",
    createdAt: "2020-04-14 16:56:13.127-04",
    genre: "Rock",
    updatedAt: "2020-04-14 16:56:13.127-04",
    inventory: 100,
  },
];
