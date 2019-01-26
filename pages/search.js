import React from 'react';
import Layout from '../app/Layout';
import fetch from 'node-fetch';
import { Table, TableBody } from 'semantic-ui-react';
import Link from 'next/link';

export default class Search extends React.Component {
  static async getInitialProps({ query }) {
    const searchPhrase = query.q;
    const res = await fetch(
      `https://api.scryfall.com/cards/search?q=${searchPhrase}`
    );
    const statusCode = res.status;
    const { data } = await res.json();
    return { data, statusCode };
  }
  render() {
    const rows =
      this.props.statusCode === 200
        ? this.props.data.map(card => (
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
          ))
        : [];
    console.log(rows);
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
