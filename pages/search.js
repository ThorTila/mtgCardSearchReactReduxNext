import React from 'react';
import Layout from '../app/Layout';
import fetch from 'node-fetch';

export default class Search extends React.Component {
  static async getInitialProps({ query }) {
    const searchPhrase = query.q,
      res = await fetch(
        `https://api.scryfall.com/cards/search?q=${searchPhrase}`
      ),
      statusCode = res.status,
      data = await res.json();
    return { data, statusCode };
  }
  render() {
    return <Layout>'search'</Layout>;
  }
}
