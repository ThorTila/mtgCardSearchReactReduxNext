import React from 'react';
import {
  Segment,
  Container,
  Header,
  Form,
  Button,
  Icon
} from 'semantic-ui-react';
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
            <Form>
              <Form.Field>
                <label>Search for cards</label>
                <input placeholder="Type search phrase" type="text" />
              </Form.Field>
              <Button>
                Submit
                <Icon name="right arrow" />
              </Button>
            </Form>
          </Container>
        </Segment>
      </Layout>
    );
  }
}
