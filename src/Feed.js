import React from 'react';

const Feed = ({image, title, description, buttonLabel}) => {
    return(
        <div className="card">
            <img src={image} className="card-img-top" alt={description} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">{buttonLabel}</a>
            </div>
        </div>
    )
}

export default Feed;