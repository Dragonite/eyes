import React from 'react';
import Grid from './components/Grid';
import InputData from './components/InputData';
import Controls from './components/Controls';
import { Footer } from 'flowbite-react';

const Layout = () => {
  return (
    <div className="my-8 w-full justify-center">
      <Grid />
      <Controls />
      <InputData />
      <div className='text-sm mt-6 w-full flex justify-center text-slate-600'>
        © Haolin Wu 2024
      </div>
    </div>
  );
}

export default Layout;
