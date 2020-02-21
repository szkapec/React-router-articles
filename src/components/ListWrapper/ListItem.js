import React from 'react'
import './ListItem.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Title from '../Title/Title'


const ListItem = ({image,title,description,link}) => {

const has = "https://unsplash.it/200/200"

    return (
        <li className="listItem__wrapper">
        {image && 
        <img 
        src={image==="" ? has : image } 
        className="listItem__image"
        alt={title+1}
        />}
        <div>
            <Title>{title}</Title>
            
            <p className="listItem__description">{description}</p>
           {link &&  <Button href={link}>visit twitter page</Button>}
        </div>
    </li> 
    )
}


ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string,

}

ListItem.defaultProps = {
    image: null,
    link: null,
}

export default ListItem;