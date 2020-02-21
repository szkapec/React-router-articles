import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';


const Input = ({tag: Tag, name,label, maxLength, textarea, onChange}) => (
    <>
    <div className="form__item">
    <Tag 
        type="text"
        name={name}
        id={name}
        required 
        maxLength={maxLength}
        placeholder= " "
        onChange={onChange}
        />
        

    <label className="form__label" htmlFor={name}>{label}</label>
    <div className="forms__item__bar"></div>
    </div>
    </>
)

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
}
//jezeli nie bedzie podanego taga w propsach
Input.defaultProps = {
    tag: 'input',
    maxLength: 40,
}

export default Input