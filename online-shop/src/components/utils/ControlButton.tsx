import React from 'react';

interface IProps {
    name: string,
    title: string,
    clickEvent: any
}

export function ControlButton({name, title, clickEvent}: IProps) {
    return (
        <p className='control'>
            <button className={`button ${name}`} onClick={clickEvent}>
                <span>{title}</span>
            </button>
        </p>
    );
}