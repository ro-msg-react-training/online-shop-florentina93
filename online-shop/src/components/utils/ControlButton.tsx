import React from 'react';

export function ControlButton(props: any) {
    return (
        <p className='control'>
            <button className={`button ${props.name}`}>
                <span>{props.title}</span>
            </button>
        </p>
    );
}