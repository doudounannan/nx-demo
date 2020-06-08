import React, { useEffect } from 'react';

import './home.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home = (props: HomeProps) => {
  useEffect(() => {
    fetch('/api/users/user/info')
      .then((_) => _.json())
      .then((data) => {
        console.log('/api', data);
      });
  }, []);
  return (
    <div>
      <h1>Welcome to home from lib!</h1>
    </div>
  );
};

export default Home;
