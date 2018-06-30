import React from 'react';
// import PropTypes from 'prop-types';

import { listingShape } from '../../propz/listingProp';
import './ListingItem.css';

class ListingItem extends React.Component {
  static propTypes = {
    listing: listingShape,
  }
  render () {
    const { listing } = this.props;
    return (
      <li>{listing.price}</li>
    );
  }
};

export default ListingItem;
