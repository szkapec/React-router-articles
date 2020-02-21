import React from 'react';
import './Button.scss';

const Button = ({children, href, secondary , click,  ...props}) => {
// props ktorego nie podajemy wprost on jest podawany jako innerhtml naszego komponentu
const lista = "form__button"
return (
    <>

    {href ? (
        <a 
        href={href}
        target="_blank"
        className="listItem__button"
        rel="noopener noreferrer"
        >
            {children}
        </a>
        
    ) : (
        <button onClick={click} className={secondary ? "secondary" : lista}  type="submit" >
            {children} 
        </button>
    ) }
    

</>
)

        };

export default Button;