import React from 'react';

interface IProps {
    buttonName: string,
    buttonTitle?: string,
    iconName?: string,
    iconTitle: string
}
export function IconControlButton({buttonName, buttonTitle, iconName, iconTitle}: IProps) {
    return (
        <p className='control'>
            <button className={`button ${buttonName}`}>
                <span>{buttonTitle}</span>
                <span className={`icon ${iconName}`}>
                    <i className={iconTitle} />
                </span>
            </button>
        </p>
    );
}