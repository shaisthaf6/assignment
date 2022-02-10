import React from 'react';
import ReactDOM from 'react-dom';





function Student(){
    let name='Shayu';
    return <h1>Welcome all: {name}</h1>;
}
ReactDOM.render(
    <>
    <Student />
    </>,
);