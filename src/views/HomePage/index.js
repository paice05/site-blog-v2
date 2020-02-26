import React from 'react';

// core
import Container from '@material-ui/core/Container';

// assets
import Sapphire from '../../assets/img/sapphire-1.jpg';

const HomePage = () => (
  <Container maxWidth="sm" style={{ textAlign: 'center' }}>
    <h1> sαρρЋirє </h1>
    <img
      src={Sapphire}
      width="100%"
      alt=""
      style={{
        height: '200px',
        width: '100%',
        maxWidth: '400px',
        marginTop: '20px',
      }}
    />
  </Container>

);

export default HomePage;
