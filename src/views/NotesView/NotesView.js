import React from 'react';
import AppContext from '../../context';
import List from '../../components/ListWrapper/ListWrapper';
const NotesView = () => (


    <AppContext.Consumer>
       {(context) => ( <List items={context.notes}></List>)}
    </AppContext.Consumer>
)

export default NotesView;