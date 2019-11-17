import React from 'react';

const Jumbotron = ({title, lead, moreInfo, buttonLabel}) => {
    return(
        <div className="jumbotron">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{lead}</p>
            <hr className="my-4" />
            <p>{moreInfo}</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
                {buttonLabel}
            </a>
        </div>
    )
}

export default Jumbotron;