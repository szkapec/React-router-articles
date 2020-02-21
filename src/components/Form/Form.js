import React from 'react';
import './Form.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import AppContext from '../../context';


const types = {
    twitter: 'twitters',
    notes: 'notes',
    articles: 'articles',
}

const descriptions = {
    twitter: 'Twitter description',
    notes: 'Notes description',
    article: 'articles description'
}


class Form extends React.Component {
    state = {
        type: types.twitter,
        title: '',
        link: '',
        image: '',
        description: '',
    }
     

    handleInputChange = e => {
        // console.log([e.target.name])
        this.setState({
            [e.target.name]: e.target.value,
        })

    }


    handleRadioButtonChange = (type) => {
        this.setState({
            type: type,
        })
    }




render() {

const {type} = this.state;

    return (
        <AppContext.Consumer>
        {(context) => (
            <div className="form__wrapper">
        <Title>Add new {descriptions[type]}</Title>
        <form className="form__form" onSubmit={ (e)=> context.addItem(e,this.state)}> 
               
            <div className="newButton">
               
                <input className="input" id={types.twitter} checked={type===types.twitter} type='radio' onChange={()=> this.handleRadioButtonChange(types.twitter)}></input>
               <label className="radio" htmlFor={types.twitter}>Twitters</label>

               <input className="input" id={types.notes} checked={type===types.notes} type='radio' onChange={()=> this.handleRadioButtonChange(types.notes)}/>
               <label className="radio" htmlFor={types.notes}>Notes</label>

               <input className="input" id={types.articles} checked={type===types.articles} type='radio' onChange={()=> this.handleRadioButtonChange(types.articles)}/>
               <label  className="radio" htmlFor={types.articles}>articles</label>

               <Button className="radioButton" secondary click={this.props.close}>X</Button>
               </div>
                <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name="title"
                label={type==="twitters" ? "Twitters name" : "Title"}
                maxLength={30}
                />
                
                {type !== types.notes ? (
                    <Input
                    onChange={this.handleInputChange}
                    value={this.state.link}
                    name="link"
                    label={type ==="twitters" ? "Twitter link" : "Link"}
                    /> 
                ) : null}
                
                {type==="twitters" ? <Input onChange={this.handleInputChange} value={this.state.image} name="image" label="Image"/> : null }
                <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag="textarea"
                name="description"
                label="Description"
                />
            
            <Button>add new item</Button>
        </form>
    </div>
        )}
        
        </AppContext.Consumer>
    )
}
}


export default Form;