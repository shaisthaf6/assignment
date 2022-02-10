import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import Comments from "./Comments";

const App = () => {
    return(
        <>
        <Comments />
        </>
    )
}
ReactDOM.render(
    <>
    <App />
    </>,
    document.getElementById('root')
);
