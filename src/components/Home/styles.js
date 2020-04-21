import styled from 'styled-components';
import Banner from '../../assets/ban_limpeza.png'

export const Section = styled.section`
    padding: 60px 0px;
    background:  linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Banner});
    background-repeat: no-repeat;   
    background-size: cover;
`;

export const Content = styled.div`

    max-width: 1000px;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;

    padding: 0px 30px;
    margin: 0px auto;

    h2 {
        text-transform: uppercase;
        font-size: 2.6rem;
        margin-bottom: 5px;
        color: rgb(255, 255, 255);
    }
    p {
        font-size: 1.4rem;
        margin-top: 15px;
        margin-bottom: 15px;
        color: rgb(255, 255, 255);

    }

    a:hover {
        opacity: 0.9;
    }
`;

export const Operation = styled.section`
    background: #9052A2;
    text-align: center;
    padding: 60px 0px;
`;

export const OperationContent = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;

    padding: 0px 30px;
    margin: 0px auto;

    h2 {
        font-size: 3rem;
        text-transform: uppercase;
        color: rgb(255,255,255);
    }

    p {
        font-size: 1.2rem;
        margin-top: 15px;
        margin-bottom: 15px;
        color: rgb(255,255,255);
        font-weight: 500;
    }

`;

export const About = styled.section`
    text-align: center;
    padding: 60px 0;

    
`;

export const AboutContent = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;

    padding: 0px 30px;
    margin: 0px auto;

    h2 {
        font-size: 3rem;
        text-transform: uppercase;
    }

    p {
        font-size: 1.2rem;
        margin-top: 15px;
        margin-bottom: 15px;
        font-weight: 500;
    }
`