import React, { Component } from 'react';
import { Sidebar, Menu, Icon, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class SidebarNavigation extends Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div>
        <div className="ui fixed inverted menu">
          <Menu.Item as={NavLink} exact to="/">
            <Header inverted>Nepali Cows</Header>
          </Menu.Item>

          <Menu.Item position="right" onClick={() => this.toggleVisibility()}>
            {visible ? (
              <Icon name="remove" size="large" />
            ) : (
              <Icon name="sidebar" size="large" />
            )}
          </Menu.Item>
        </div>

        <Sidebar
          as={Menu}
          animation="overlay"
          width="thin"
          visible={visible}
          icon="labeled"
          vertical
          inverted
        >
          <Menu.Item
            as={NavLink}
            exact
            to="/"
            onClick={() => this.toggleVisibility()}
          >
            Home
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/products"
            onClick={() => this.toggleVisibility()}
          >
            Products
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/about"
            onClick={() => this.toggleVisibility()}
          >
            About Us
          </Menu.Item>
        </Sidebar>
      </div>
    );
  }
}

export default SidebarNavigation;
