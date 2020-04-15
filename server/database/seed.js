const database = require('./database')
const Album = require('./album')

const albums = [
    {
        title: 'The Sailor',
        artist: ['Rich Brian'],
        genre: 'Rap',
        year: '2019',
        inventory: 100,
        price: 2000,
        image: 'https://resources.tidal.com/images/54253cdf/61dc/457f/aaa1/45c9d1083a84/750x750.jpg'
    }
]

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