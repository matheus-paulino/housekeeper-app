import React from 'react';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
          <h2>Housekeeper</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
    </Container>
  );
}
