import React from 'react'

const Navigation = () => {
    const genres = ['Chinese','Country','Korean','Pop','R&B','Rap','Rock']
    return (
        <div className='navigation'>
            {genres.map(genre => <div className="genre">{genre}</div>)}
        </div>
    )
}

export default Navigation