import React from 'react';

interface IProps {
    buttonName: string,
    buttonTitle?: string,
    iconName?: string,
    iconTitle: string,
    clickEvent?: any    
}

export function IconControlButton({buttonName, buttonTitle, iconName, iconTitle, clickEvent}: IProps) {
   
    return (
        <p className='control'>
            <button className={`button ${buttonName}`} onClick={clickEvent}>
                <span>{buttonTitle}</span>
                <span className={`icon ${iconName}`}>
                    <i className={iconTitle} />
                </span>
            </button>
        </p>
    );
}