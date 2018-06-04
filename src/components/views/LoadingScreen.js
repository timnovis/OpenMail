import React from 'react';
import { BounceLoader } from 'react-spinners';
import Layout from './Layout';
import variables from '../../helpers/styleVariables';

class LoadingScreen extends React.Component {
  render() {
    return <Layout>{/* <BounceLoader color={variables.tertiary} loading={true} size={120} /> */}</Layout>;
  }
}

export default LoadingScreen;
