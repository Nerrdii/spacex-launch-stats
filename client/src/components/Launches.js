import React from 'react';
import { gql, useQuery } from '@apollo/client';

import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

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

export const Launches = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <React.Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      <React.Fragment>
        {data.launches.map((launch, index) => (
          <LaunchItem key={index} launch={launch} />
        ))}
      </React.Fragment>
    </React.Fragment>
  );
};

export default Launches;
