import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import AboutPage from './components/pages/AboutPage';

import TopNavigation from './components/navigation/TopNavigation';
import SidebarNavigation from './components/navigation/SidebarNavigation';
import Footer from './components/navigation/Footer';

class App extends Component {
  render() {
    const { location } = this.props.location;
    return (
      <div>
        <div style={{ minHeight: '80vh' }}>
          <Grid>
            <Grid.Row only="tablet" style={{ paddingBottom: '0' }}>
              <Grid.Column width={16}>
                <SidebarNavigation location={location} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row only="computer" style={{ paddingBottom: '0' }}>
              <Grid.Column width={16}>
                <TopNavigation location={location} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row only="mobile" style={{ paddingBottom: '0' }}>
              <Grid.Column width={16}>
                <SidebarNavigation location={location} />
              </Grid.Column>
            </Grid.Row>
            <Route path="/" exact component={HomePage} location={location} />
          </Grid>

          <div style={{ marginTop: '40px' }}>
            <Route
              path="/products"
              component={ProductsPage}
              location={location}
            />
            <Grid>
              <Grid.Row style={{ marginTop: '10px' }} />
              <Route
                path="/about"
                exact
                component={AboutPage}
                location={location}
              />
            </Grid>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
