import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">

        {/*Header Section*/}
        <Header />



        {/*Section 1*/}
        <Projects />



        {/*Section 2*/}
        <div className="container">
          <Outlet />
        </div>



        {/*Section 3*/}


        {/*Footer Section*/}
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
