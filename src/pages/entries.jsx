import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link, Box } from '@chakra-ui/react';
import { Logo } from '../Logo.js';
import { useEffect, useState } from 'react';

import Card from '../components/Card';

const EntriesPage = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_HOST}api/entries.json`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
          },
          mode: 'cors',
        }
      );
      const data = await response.json();
      setSearchResult(data);
      setEntries(data['_embedded'].items);
    };

    getData();
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
      }}
    >
      {entries.map(entry => (
        <Card key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default EntriesPage;
