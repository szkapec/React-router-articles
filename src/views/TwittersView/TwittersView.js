import React from 'react';
import List from '../../components/ListWrapper/ListWrapper';
import AppContext from '../../context';
const TwittersView = () => (


    <AppContext.Consumer>
       {(context) => ( <List items={context.twitters}></List>)}
    </AppContext.Consumer>
)

export default TwittersView;