import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';
import Layout from '../app/Layout';

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Segment
          textAlign="center"
          style={{ minHeight: '100vh', paddingTop: '200px' }}
          vertical
        >
          <Container text>
            <Header content="DevCollege card search!" />
          </Container>
        </Segment>
      </Layout>
    );
  }
}
