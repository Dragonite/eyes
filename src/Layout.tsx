import React from 'react';
import Grid from './components/Grid';
import InputData from './components/InputData';
import Controls from './components/Controls';

const Layout = () => {
  return (
    <div className="my-8 w-full justify-center">
      <Grid />
      <Controls />
      <InputData />
    </div>
  );
}

export default Layout;
