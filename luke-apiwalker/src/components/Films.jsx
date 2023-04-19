import React from 'react';

function Films({ data }) {
    return (
        <>
            <h2>Title: {data.title}</h2>
            <p>Release Year: {data.release_date}</p>
            <p>Director: {data.director}</p>
            <p>Producer: {data.producer}</p>
            <p>Opening Crawl: {data.opening_crawl}</p>
        </>
    );
}

export default Films;