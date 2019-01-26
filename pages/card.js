import React from 'react';
import Layout from '../app/Layout';
import fetch from 'node-fetch';
import { Card, Image, Icon, Container } from 'semantic-ui-react';

export default class CardDetails extends React.Component {
  static async getInitialProps({ query }) {
    const cardID = query.id;
    const res = await fetch(`https://api.scryfall.com/cards/${cardID}`);
    const statusCode = res.status;
    const card = await res.json();
    return { card, statusCode };
  }

  render() {
    const details = this.props.statusCode === 200 ? this.props.card : {};
    return (
      <Layout>
        <Card style={{ margin: '0,auto' }}>
          <Image src={details.image_uris.art_crop} />

          <Card.Content>
            <Card.Header>{details.name}</Card.Header>
            <Card.Meta>
              <Icon name="theme" />
              {details.mana_cost}
            </Card.Meta>
            <Card.Description>
              {details.oracle_text.split('\n').map((par, index) => (
                <p key={index}>{par}</p>
              ))}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>{details.set_name}</Card.Content>
        </Card>
      </Layout>
    );
  }
}
