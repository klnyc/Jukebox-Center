import React from 'react'

const Navigation = () => {
    const genres = ['Country','Korean','R&B','Rap','Rock']
    return (
        <div className='navigation'>
            {genres.map(genre => <div className="genre">{genre}</div>)}
        </div>
    )
}

export default Navigation