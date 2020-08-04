import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

export default () => (
    <h1>
        <Typist
            className="TypistExample-header"
            avgTypingDelay={125}
            startDelay={200}
            cursor={{
                show: true,
                blink: true,
                element: '|',
                hideWhenDone: true,
                hideWhenDoneDelay: 3000,
            }}
        >
            Get Your Words Out
        </Typist>
    </h1>
)