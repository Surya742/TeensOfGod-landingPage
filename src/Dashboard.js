import * as React from 'react';
import Iframe from 'react-iframe'
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';

function Dashboard() {
  return (
    <React.Fragment>
        <AppAppBar />
        <Iframe url="http://localhost:4002/"
            width="100%"
            height="720"
            id=""
            className=""
            display="block"
            position="relative"
        />
    </React.Fragment>
  );
}

export default withRoot(Dashboard);