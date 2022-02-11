import React from "react";
import ReactDOM from "react-dom";
import Comment from './Comment.js';
import Button from './Button.js';

const App = () => {
    return(
        <>
        <Comment />
        <Button />

        </>
    )
};
ReactDOM.render(
    <App />,
    document.getElementById('root')
);