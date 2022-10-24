import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const CardApi = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('https://customer_3.createy.io/api/v1/products/', {
        headers: {
          'access-token': 'wIdbgIEBx6GonYbIyJiHgw',
          client: 'A1mSYJ-O5yAZFSUhJLwn3w',
          expiry: '1667545811',
          'token-type': 'Bearer',
          uid: 'usama@gmail.com',
        },
      })
      .then(function (response) {
        // handle success
        console.log(response.data.products);
        setData(response.data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  // return <div></div>;
};
