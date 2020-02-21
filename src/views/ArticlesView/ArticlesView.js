import React from 'react';
import AppContext from '../../context';
import List from '../../components/ListWrapper/ListWrapper';
const ArticlesView = () => (


    <AppContext.Consumer>
       {(context) => ( <List items={context.articles}></List>)}
    </AppContext.Consumer>
)

export default ArticlesView;