import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';
import StreamDelete from './components/streams/StreamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamShow from './components/streams/StreamShow';

import Header from './components/header/header';

const App = () => {
    return(
        <React.Fragment>
            <BrowserRouter>
                <Header />

                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/delete" exact component={StreamDelete} />
                <Route path="/streams/edit" exact component={StreamEdit} />
                <Route path="/streams/show" exact component={StreamShow} />
            </BrowserRouter>
        </React.Fragment>

    );
}

export default App;