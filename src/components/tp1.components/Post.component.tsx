import React from 'react';
import postData from '../../models/dataTp1.model';
import Vote from './Vote.component';


const Post = ({ onDelete, id, productImageUrl, url, title, onVote, votes, description, submitterAvatarUrl } : postData) => {
    return (
        <div className="item">

            <button onClick={() => onDelete(id)}>Supprimer</button>
            <div className="image">
                <img src={productImageUrl} />
            </div>
            <div className="middle aligned content">
                <div className="header">
                    <Vote id={id} onVote={onVote} votes={votes} />
                </div>
                <div className="description">
                    <a href={url}>{title}</a>
                    <p>{description}</p>
                </div>
                <div className="extra">
                    <span>Ajouté par:</span>
                    <img className="ui avatar image" src={submitterAvatarUrl} />
                </div>
            </div>

        </div>
    )
}

export default Post
