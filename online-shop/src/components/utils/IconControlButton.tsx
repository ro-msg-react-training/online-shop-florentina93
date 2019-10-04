import React from 'react';

export function IconControlButton(props: any) {
    return (
        <p className='control'>
            <button className={`button ${props.buttonName}`}>
                <span>{props.buttonTitle}</span>
                <span className={`icon ${props.iconName}`}>
                    <i className={props.iconTitle}></i>
                </span>
            </button>
        </p>
    );
}