import React from 'react';
// import ListWrapper from '../../components/ListWrapper/ListWrapper';
import ryanFlorenceImage from '../../assets/images/ryanflorence.jpg'
import michaelJacksonImage from '../../assets/images/michaeljackson.jpg'
import kentCDoddsImage from '../../assets/images/kentcdodds.jpg'
import danAbramovImage from '../../assets/images/danabramov.jpg'
// import Form from '../../components/Form/Form'

import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwitterView from '../TwittersView/TwittersView';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Root.css';
import Modal from '../../components/Modal/Modal';

import AppContext from '../../context';

// const initialStateItems = [
//   {
//     image: danAbramovImage,
//     name: 'Dan Abramov',
//     description: 'Working on @reactjs. The demo guy.',
//     twitterLink: 'https://twitter.com/dan_abramov',
// },
// {
//     image: ryanFlorenceImage,
//     name: 'Ryan Florence',
//     description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
//     twitterLink: 'https://twitter.com/ryanflorence',
// },
// {
//     image: michaelJacksonImage,
//     name: 'Michael Jackson',
//     description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
//     twitterLink: 'https://twitter.com/mjackson',
// },
// {
//     image: kentCDoddsImage,
//     name: 'Kent C. Dodds',
//     description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
//     twitterLink: 'https://twitter.com/kentcdodds',
// },
// ]


class Root extends React.Component {
  state = {
      twitters: [
        {
          title: 'lorem',
          description: 'lorem lorem lorem ',
          link: 'https://google.com',
          image: 'http://unsplash.it/200/200'
        },
        {
          title: 'lorem',
          description: 'lorem lorem lorem ',
          link: 'https://google.com',
          image: 'http://unsplash.it/200/200'
        }
      ],
      articles: [],
      notes: [],
    isModalOpen: false,
  
  }



 
 
  addItem = (e, newItem) => {
    // console.log(e)
    // console.log(newItem)
    e.preventDefault()
   this.setState(prevState => ({
     [newItem.type]: [...prevState[newItem.type], newItem]
   }))
    this.closeIsModal()
  }


  // <ListWrapper items={this.state.items}/> 
  // <Form submitFn={this.addItem}/>
  //Navigation -- to jest komponent z linkami 

  openModal = () => {
    this.setState((prevState) =>({
      isModalOpen: !prevState.isModalOpen,
    }))
  }

  closeIsModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  render() {
    const contextElement = {
      ...this.state,
      addItem: this.addItem,
    }
    return (
    
      //route - sciezki 
      //switch - zeby rozwiazac problemy z exact .. .:id
      //browserrouter Odpowiada za prawidlowe nawigowanie w przegladarce ma miec jedno dziecko
      // <Modal/>  //dododawania nowych twitterow noatek i artykulow
      // <AppContext.Provider> utworzone dla propsow zeby przyjmowaly wszystkie dzieci itd

      <BrowserRouter>  
      <AppContext.Provider value={contextElement}>
          <Header openModalFn={this.openModal}/>
          <Switch>
            <Route exact path="/" component={TwitterView} /> 
            <Route path="/articles" component={ArticlesView} /> 
            <Route path="/notes" component={NotesView} /> 
            
          </Switch>
          {this.state.isModalOpen && <Modal close={this.openModal}/> }
      </AppContext.Provider>
      </BrowserRouter>
    )
  }

} 
export default Root;
