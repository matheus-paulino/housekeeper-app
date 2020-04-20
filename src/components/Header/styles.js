import styled from 'styled-components';

export const Container = styled.nav`

    background: #050505;
    position: sticky;
    top: 0;
    z-index: 1020;
    width: 100%;
    color: #fff;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    -webkit-box-align: center;

    @media (max-width: 540px) {
        display: none;       
    }

  h2 {
      margin: 0 15px;
      font-size: 1em;
      text-transform: uppercase;
  }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
  }
     ul li {
      text-transform: uppercase;
      font-weight: 600;
      margin: 0 15px;
      
  }

  ul li a {
      color: rgb(255, 255, 255);
      text-decoration: none;
  }

  
`;
