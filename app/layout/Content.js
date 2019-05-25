import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* View Components */
import Home from '../components/Home';
import Destinations from '../components/Destinations';
import Destination from '../components/Destination';
import Contact from '../components/Contact';
import TopNav from './Topnav';

const Content = () => {
  return (
    <main>
      <header>
        <TopNav />
      </header>
      <section>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/destinations" component={Destinations} />
          <Route exact path="/destinations/:id" component={Destination} />
          <Route exact path="/contact" component={Contact} />
          <Route render={() => <h2 className="four-o-four">404 Page Not Found</h2>} />
        </Switch>
      </section>
    </main>
  )
}

export default Content;
