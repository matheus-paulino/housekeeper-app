import React from 'react';

import { Section, Content, Operation, OperationContent, About, AboutContent } from './styles';


export default function Home() {
  return (
    <>
      <Section>
          <Content>
            <div>
              <h2>precisando contratar uma diarista?</h2>
              <h2>a gente resolve pra você!</h2>
              <p>A qualidade que você sempre quis para manter sua casa, empresa sempre limpos!</p>
            </div>
          </Content>
      </Section>

      <Operation>
        <OperationContent>
          <div>
            <h2>Vantagens em contratar uma empregada</h2>
            <p>Nem sempre os parentes e amigos conhecem alguma Doméstica confiável para indicar. As pessoas também, normalmente, não têm tempo para procurar no mercado uma Empregada Doméstica que atenda exatamente as suas necessidades. Além do trabalho de buscar candidatas, as pessoas precisam dispor de tempo para fazer a checagem de qualificações das candidatas com ex-empregadores, checagem de documentos e antecedentes criminais.</p>
          </div>

        </OperationContent>
      </Operation>

      <About>
        <AboutContent>
          <div>
            <h2>
              confiança
            </h2>
            <p>Contratar uma empregada doméstica através da nossa plataforma significa ter certeza de encontrar uma pessoa confiável, profissional e eficiente, com os conhecimentos e habilidades que você precisa para atender suas necessidades.</p>
          </div>
        </AboutContent>
      </About>
    </>
  );
}
