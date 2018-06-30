import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';
import listingRequests from '../firebaseRequests/listings';

import Listings from '../components/Listings/Listings';
import Building from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';

import './App.css';

class App extends Component {
  state = {
    listings: [],
    selectedListingId: -1,
  }

  componentDidMount () {
    connection();
    listingRequests.getRequest()
      .then((listings) => {
        this.setState({ listings });
      })
      .catch((err) => {
        console.error('err', err);
      });
  }

  listingSelectEvent = (id) => {
    this.setState({ selectedListingId: id});
  }

  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Listings
            listings={this.state.listings}
            onListingSelection={this.listingSelectEvent}
          />
        </div>
        <div className="col-sm-6">
          <Building />
        </div>
        <div className="col-sm-12">
          <ListingForm />
        </div>
      </div>
    );
  }
}

export default App;
