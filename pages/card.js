import React from 'react';
import Layout from '../app/Layout';
import fetch from 'node-fetch';
import { Card, Image, Icon, Container } from 'semantic-ui-react';
import { fetchCardDetails } from '../app/actions/card';
import { connect } from 'react-redux';

class CardDetails extends React.Component {
  static async getInitialProps({ store, query }) {
    const cardID = query.id;
    await store.dispatch(fetchCardDetails(cardID));
    return {};
  }

  render() {
    const details = this.props.details;
    return (
      <Layout>
        <Card style={{ margin: '0 auto' }}>
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

const mapStateToProps = state => ({
  details: state.card.details
});

export default connect(mapStateToProps)(CardDetails);
