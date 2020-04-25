const database = require('./database')
const Album = require('./albums')

const seed = async () => {
    try {
        await database.sync({ force: true })
        await Promise.all(albums.map(album => Album.create(album)))
        console.log('Seeded!')
        database.close()
    } catch (error) {
        console.error(error)
        database.close()
    }
}

seed()

const albums = [
    {
      "artist" : "Rich Brian",
      "id" : 1,
      "price" : 2000,
      "title" : "The Sailor",
      "image" : "https:\/\/resources.tidal.com\/images\/54253cdf\/61dc\/457f\/aaa1\/45c9d1083a84\/750x750.jpg",
      "year" : "2019",
      "createdAt" : "2020-04-14 17:31:07.358-04",
      "genre" : "Rap",
      "updatedAt" : "2020-04-14 17:31:07.358-04",
      "inventory" : 100
    },
    {
      "artist" : "Drake",
      "id" : 2,
      "price" : 2000,
      "title" : "Scorpion",
      "image" : "https:\/\/resources.tidal.com\/images\/215925ab\/0b79\/43cc\/b713\/2d41576a2bff\/750x750.jpg",
      "year" : "2018",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Rap",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "The Weeknd",
      "id" : 3,
      "price" : 2000,
      "title" : "After Hours",
      "image" : "https:\/\/resources.tidal.com\/images\/ebb9a459\/3c33\/4fe5\/a131\/541ae352f553\/750x750.jpg",
      "year" : "2019",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "R&B",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "21 Savage",
      "id" : 4,
      "price" : 2000,
      "title" : "Without Warning",
      "image" : "https:\/\/resources.tidal.com\/images\/2f8123d7\/1ea7\/4149\/9d0c\/236ccfa8b6c0\/750x750.jpg",
      "year" : "2017",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Rap",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "Post Malone",
      "id" : 5,
      "price" : 2000,
      "title" : "Beerbongs & Bentleys",
      "image" : "https:\/\/resources.tidal.com\/images\/d980b763\/ad2e\/47d9\/83b0\/68ef1a959990\/750x750.jpg",
      "year" : "2018",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Rap",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "Alicia Keys",
      "id" : 6,
      "price" : 2000,
      "title" : "The Element of Freedom",
      "image" : "https:\/\/resources.tidal.com\/images\/f99a89cd\/5869\/4174\/b573\/e3aa4140ad25\/750x750.jpg",
      "year" : "2009",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "R&B",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "Pearl Jam",
      "id" : 7,
      "price" : 2000,
      "title" : "Gigaton",
      "image" : "https:\/\/resources.tidal.com\/images\/ea8b6af4\/46a4\/48fe\/8129\/039063bca6c4\/750x750.jpg",
      "year" : "2020",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Rock",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "Nine Inch Nails",
      "id" : 8,
      "price" : 2000,
      "title" : "Ghosts V: Together",
      "image" : "https:\/\/resources.tidal.com\/images\/fa1e1a95\/11fe\/466e\/a4b0\/8c4ad50547b0\/750x750.jpg",
      "year" : "2020",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Rock",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "Nine Inch Nails",
      "id" : 9,
      "price" : 1680,
      "title" : "Add Violence",
      "image" : "https:\/\/resources.tidal.com\/images\/81793519\/f4ab\/4163\/ac0f\/7ae5d1e7cffa\/750x750.jpg",
      "year" : "2017",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Rock",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "Beyoncè",
      "id" : 10,
      "price" : 2000,
      "title" : "Add Lemonade",
      "image" : "https:\/\/resources.tidal.com\/images\/d2c60d13\/1b97\/46bc\/a7cd\/a7741069c007\/750x750.jpg",
      "year" : "2016",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "R&B",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 0
    },
    {
      "artist" : "Blake Shelton",
      "id" : 11,
      "price" : 2000,
      "title" : "Fully Loaded: God's Country",
      "image" : "https:\/\/resources.tidal.com\/images\/82dd8da6\/04f1\/4805\/9b9c\/93bb7a23e9a0\/750x750.jpg",
      "year" : "2019",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Country",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "BTS",
      "id" : 12,
      "price" : 2000,
      "title" : "2 Cool 4 Skool",
      "image" : "https:\/\/resources.tidal.com\/images\/a92c2194\/4919\/40fa\/bbf7\/2eb8e752e430\/750x750.jpg",
      "year" : "2013",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Korean",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "Eason Chan",
      "id" : 13,
      "price" : 2000,
      "title" : "Life Continues",
      "image" : "https:\/\/resources.tidal.com\/images\/6aa6ae09\/71b4\/4eae\/ba96\/782f1127a507\/750x750.jpg",
      "year" : "2006",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Chinese",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 88
    },
    {
      "artist" : "Eason Chan",
      "id" : 14,
      "price" : 2000,
      "title" : "L.O.V.E.",
      "image" : "https:\/\/resources.tidal.com\/images\/0beadb73\/c18a\/4f09\/b04e\/b5cb0919e8ff\/750x750.jpg",
      "year" : "2006",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Chinese",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 88
    },
    {
      "artist" : "Taylor Swift",
      "id" : 15,
      "price" : 2000,
      "title" : "Lover",
      "image" : "https:\/\/resources.tidal.com\/images\/4b025dc3\/fae1\/4b1e\/982e\/36a194fe9cc4\/750x750.jpg",
      "year" : "2019",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Pop",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "Taylor Swift",
      "id" : 16,
      "price" : 2000,
      "title" : "1989",
      "image" : "https:\/\/resources.tidal.com\/images\/d47dad3d\/f64b\/4a5d\/8b81\/46e3fe733186\/750x750.jpg",
      "year" : "2014",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Pop",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "Chris Brown",
      "id" : 17,
      "price" : 1000,
      "title" : "Before The Trap: Nights  In Tarzana",
      "image" : "https:\/\/resources.tidal.com\/images\/1374a530\/fa9e\/4509\/8428\/99d2df7de4d6\/750x750.jpg",
      "year" : "2016",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "R&B",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 60
    },
    {
      "artist" : "Chris Brown",
      "id" : 18,
      "price" : 2000,
      "title" : "Indigo",
      "image" : "https:\/\/resources.tidal.com\/images\/509d4b92\/2dc8\/4e21\/a4c8\/6caaee985311\/750x750.jpg",
      "year" : "2019",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "R&B",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "Eminem",
      "id" : 19,
      "price" : 2000,
      "title" : "Relapse",
      "image" : "https:\/\/resources.tidal.com\/images\/5062cbce\/f6c7\/4c71\/b965\/518b3d2dbef9\/750x750.jpg",
      "year" : "2009",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Rap",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "Eminem",
      "id" : 20,
      "price" : 2000,
      "title" : "Kamikaze",
      "image" : "https:\/\/resources.tidal.com\/images\/5eb3b245\/3574\/40d0\/9fad\/c436673df6da\/750x750.jpg",
      "year" : "2018",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Rap",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    },
    {
      "artist" : "King Gizzard & The Lizard Wizard",
      "id" : 21,
      "price" : 1200,
      "title" : "Chunky Shrapnel",
      "image" : "https:\/\/resources.tidal.com\/images\/28150e78\/09b1\/4ca0\/b270\/cc49c8528a63\/750x750.jpg",
      "year" : "2020",
      "createdAt" : "2020-04-14 16:56:13.127-04",
      "genre" : "Rock",
      "updatedAt" : "2020-04-14 16:56:13.127-04",
      "inventory" : 100
    }
  ]