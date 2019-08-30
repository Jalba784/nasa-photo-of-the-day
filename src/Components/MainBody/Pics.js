import React from 'react';
import '../../Sass/App.css';

const Pics = (props) => {
    const { title, pic, copyright, explanation, date } = props;
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <img src={`${pic}`} alt="nasa-space" />
                <h4>By: {copyright}</h4>
            </div>
            <div>
                <p>{explanation}</p>
                <p>Date of pic: {date}</p>
            </div>
        </div>
    );
};

export default Pics;