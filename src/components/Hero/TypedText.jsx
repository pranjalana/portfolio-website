import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['I am passionate about Cyber Security.', 'I am passionate about Cloud Computing/Cloud Security.', 'I am passionate about DevSecOps.', 'I am passionate about AI/ML.'],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return <span ref={typedElement} />;
};

export default TypedText;
