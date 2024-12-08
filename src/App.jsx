import React from 'react';
//import { useState } from 'react';
import './App.css';



function App() {
    const [valasztottSzin, szintValaszt] = React.useState("blue");


    function ColorButton(props) {
        return React.createElement(
            "button",
            {
                style: {
                    width: "50px",
                    height: "50px",
                    backgroundColor: props.szin,
                },
                onClick: () => { szintValaszt(props.szin); },
            },
        );
    }

    function Box(props) {
        const [boxColor, SetBoxColor] = React.useState(props.szin);
        return React.createElement(
            "button",
            {
                style: {
                    width: "50px",
                    height: "50px",
                    backgroundColor: boxColor,
                },
                //onClick: () => {props.szin1=valasztottSzin}, 
                onClick: () => {
                    SetBoxColor(color => valasztottSzin);
                },
            },
        );
    }

    function Brush(props) {

        return React.createElement(
            "div",
            {
                style: {
                    width: "150px",
                    height: "50px",
                    backgroundColor: props.ecsetSzin,
                }
            },
            React.createElement("h1", {}, "Ecset")
        );

    }

    return (
        <div className="App">
            {
                React.createElement(
                    "div",
                    {
                        className: "border",
                    },
                    //console.log(1),

                    React.createElement(ColorButton, { szin: "red" }),
                    React.createElement(ColorButton, { szin: "blue" }),
                    React.createElement(ColorButton, { szin: "green" }),
                    React.createElement("br", {}),
                    React.createElement(ColorButton, { szin: "yellow" }),
                    React.createElement(ColorButton, { szin: "white" }),
                    React.createElement(ColorButton, { szin: "aqua" }),
                    React.createElement("br", {}),
                    React.createElement(ColorButton, { szin: "purple" }),
                    React.createElement(ColorButton, { szin: "pink" }),
                    React.createElement(ColorButton, { szin: "brown" }),

                    React.createElement(Brush, { ecsetSzin: valasztottSzin }),
                    React.createElement("br", {}),

                    React.createElement(Box, { szin: "white" }),
                    React.createElement(Box, { szin: "white" }),
                    React.createElement(Box, { szin: "white" }),
                    React.createElement("br", {}),
                    React.createElement(Box, { szin: "white" }),
                    React.createElement(Box, { szin: "white" }),
                    React.createElement(Box, { szin: "white" }),
                    React.createElement("br", {}),
                    React.createElement(Box, { szin: "white" }),
                    React.createElement(Box, { szin: "white" }),
                    React.createElement(Box, { szin: "white" }),


                )

            }
        </div>
    )
}


export default App;
