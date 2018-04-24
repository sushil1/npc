import React from 'react';
import { Grid, Button, Icon, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import homeImage from '../../assets/images/homeImage.jpg';
import cowlogo from '../../assets/images/cowlogo.png';

const HomePage = () => (
  <Grid
    stretched
    style={{
      paddingLeft: '20px',
      paddingRight: '20px',
      marginTop: '0px'
    }}
  >
    <Grid.Row
      centered={true}
      style={{ minHeight: '500px', paddingTop: '0', paddingBottom: '5px' }}
    >
      <Grid.Column
        stretched
        width={16}
        textAlign="center"
        style={{
          boxShadow: ' 0px 0px 1px 0px rgba(0, 0, 0, .7)',
          color: '#fff',
          paddingTop: '4em'
        }}
      >
        <Image
          src={homeImage}
          style={{
            width: '100%',
            position: 'relative',
            height: '80%'
          }}
        />

        <p
          style={{
            fontSize: '1.5em',
            fontWeight: 'normal',
            paddingTop: '5%',
            position: 'absolute',
            color: '#000',
            margin: 'auto',
            width: '90%',
            textAlign: 'center'
          }}
        >
          <ReactCSSTransitionGroup
            transitionName="cowHeading"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}
          >
            <span
              style={{
                display: 'block',
                fontSize: '1em',
                paddingBottom: '1.5em',
                marginTop: '40px',
                color: '#000',
                letterSpacing: '0.2em'
              }}
            >
              NEPALI COWS
            </span>
          </ReactCSSTransitionGroup>
          <Image
            src={cowlogo}
            style={{
              width: '60px',
              position: 'relative',
              height: '60px',
              margin: 'auto',
              left: '30px',
              right: '40px'
            }}
          />
          <br />
          For Now, For Future <br />
          <strong>Sustainable Farming</strong>,{' '}
          <strong>Responsible Farming</strong>
          <br />
          <br />
          <Button
            style={{
              fontSize: '1em',
              color: 'teal',
              margin: 'auto',
              marginTop: '5%',
              letterSpacing: '0.1em',
              boxShadow: ' 0px 1px 2px 0px rgba(0, 0, 0, .7)'
            }}
            as={Link}
            to="/about"
          >
            Learn More {'   '}
            <Icon name="arrow circle right" />
          </Button>
        </p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{ paddingBottom: '0', paddingTop: '0' }}>
      <Grid.Column style={{ paddingLeft: '0', paddingRight: '0' }}>
        <Carousel
          emulateTouch={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
        >
          <div style={{ height: '200px', backgroundColor: 'grey' }}>
            <p
              style={{
                paddingTop: '2em',
                fontSize: '1.3em',
                textAlign: 'center',
                width: '90%',
                margin: 'auto'
              }}
            >
              Nepali Cows are the example of sustainable farming.
            </p>
            <br /> Ram Sharma, President of Natural Society
          </div>
          <div style={{ height: '200px', backgroundColor: 'grey' }}>
            <p
              style={{
                paddingTop: '2em',
                fontSize: '1.3em',
                textAlign: 'center',
                width: '90%',
                margin: 'auto'
              }}
            >
              Natural and herbal products are fantastic.
            </p>
            <br /> John, Baba Dairy
          </div>
          <div
            style={{ height: '200px', backgroundColor: 'grey', margin: 'auto' }}
          >
            <p
              style={{
                paddingTop: '2em',
                fontSize: '1.3em',
                textAlign: 'center',
                width: '90%',
                margin: 'auto'
              }}
            >
              I have gained much strength swtiching to natural products.
            </p>
            <br /> Ramesh, Athlete, Butwal
          </div>
          <div style={{ height: '200px', backgroundColor: 'grey' }}>
            <p
              style={{
                paddingTop: '2em',
                fontSize: '1.3em',
                textAlign: 'center',
                width: '90%',
                margin: 'auto'
              }}
            >
              We need more of this revolution in the farming industry.
            </p>
            <br /> Annapurna Post
          </div>
        </Carousel>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row
      centered={true}
      divided
      padded="true"
      style={{ marginBottom: '20px', marginTop: '20px' }}
    >
      <Grid.Column
        mobile={14}
        tablet={5}
        computer={5}
        style={{ paddingTop: '15px' }}
      >
        <Header as="h3">
          <Icon circular inverted color="red" name="heart" />
          Our Work{' '}
        </Header>

        <p>Loved by many</p>
      </Grid.Column>

      <Grid.Column
        mobile={14}
        tablet={5}
        computer={5}
        style={{ paddingTop: '15px' }}
      >
        <Header as="h3">
          <Icon circular inverted color="blue" name="cart" />
          Shop with Confidence{' '}
        </Header>

        <p>Our Products are naturally resourced</p>
      </Grid.Column>

      <Grid.Column
        mobile={14}
        tablet={5}
        computer={5}
        style={{ paddingTop: '15px' }}
      >
        <Header as="h3">
          <Icon circular inverted color="green" name="recycle" />
          Responsibility{' '}
        </Header>
        <p>Responsibility of future.</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default HomePage;
