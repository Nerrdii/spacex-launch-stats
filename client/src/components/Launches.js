import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import LaunchItem from './LaunchItem';

const query = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) {
              return <h4>Loading...</h4>;
            }

            if (error) {
              console.log(error);
            }

            return (
              <React.Fragment>
                {data.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </React.Fragment>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default Launches;
