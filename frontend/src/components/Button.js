import React from 'react';
import { Link } from 'react-router-dom';

const STYLES = [ 'btn--primary', 'btn--outline'];

const SIZES = [ 'btn--medium', 'btn--large'];


export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
                                    // Syntax for, if no button style has been put, pick the button style 
                                    // ............on index one in const styles at the top.
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
                                    // Syntax for, if no button size has been put, pick the button size 
                                    // ............on index one in const size at the top.
    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button 
            className={`btn ${checkButtonSize} ${checkButtonStyle}`}
            onClick={onClick}
            type={type}
            >
                {children} 
                {/* children syntax to render everything put inside the button */}
            </button>
        </Link>
    )
                                };