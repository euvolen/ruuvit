import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/layout/App';
import client from './apollo/client'
import {ApolloProvider} from 'react-apollo'

ReactDOM.render(<ApolloProvider client={client}><App/></ApolloProvider>, document.getElementById('root'));


