import React from 'react';
import Layout from '../app/Layout';
import { Table, TableBody } from 'semantic-ui-react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { fetchCards } from '../app/actions/card';

class Search extends React.Component {
  static async getInitialProps({ store, query }) {
    const searchPhrase = query.q;
    await store.dispatch(fetchCards(searchPhrase));
    return {};
  }
  render() {
    const rows = this.props.results.map(card => (
      <Table.Row key={card.id}>
        <Table.Cell>
          <Link href={{ pathname: '/card', query: { id: card.id } }}>
            <a>{card.name}</a>
          </Link>
        </Table.Cell>
        <Table.Cell>{card.set_name}</Table.Cell>
        <Table.Cell>{card.mana_cost}</Table.Cell>
        <Table.Cell>{card.eur}</Table.Cell>
      </Table.Row>
    ));
    return (
      <Layout>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Set</Table.HeaderCell>
              <Table.HeaderCell>Mana Cost</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <TableBody>{rows}</TableBody>
        </Table>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  results: state.card.results
});

export default connect(mapStateToProps)(Search);
