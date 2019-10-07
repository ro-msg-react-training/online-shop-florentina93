import React from 'react';

interface IProps {
    name: string,
    title: string
}

export function ControlButton({name, title}: IProps) {
    return (
        <p className='control'>
            <button className={`button ${name}`}>
                <span>{title}</span>
            </button>
        </p>
    );
}