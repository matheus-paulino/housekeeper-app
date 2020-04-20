import React from 'react';

import { Section, Content } from './styles';
import Dev from '../../assets/person.gif';
import Developer from '../../assets/developer.gif';


export default function Home() {
  return (
    <>
      <Section>
          <Content>
            <div>
              <h2>Why should we help other developers?</h2>
              <p>Find your development partner, create projects, exchange ideas and more!</p>
              <a href="#">Learn more</a>
            </div>
            <img src={Dev} width="350" />
          </Content>
      </Section>
      <Section>
        <Content>
          <div>
            <h2>help the little grasshoppers</h2>
            <p>Contribute to the community and help new developers</p>
          </div>
        <img src={Developer} width="350" />

        </Content>
      </Section>
    </>
  );
}
