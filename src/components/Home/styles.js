import styled from 'styled-components';

export const Section = styled.section`
    padding: 60px 0px;   
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
        font-size: 4rem;
    }
    p {
        font-size: 1.6rem;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    a {
        display: inline-block;
        line-height: 50px;
        font-size: 16px;
        font-weight: 600;
        color: rgb(255, 255, 255);
        background-color: #7aedf5;
        margin: 15px 0px 0px;
        padding: 0px 30px;
        text-decoration: none;
        border-radius: 5px;
        transition: all 150ms linear 0s;
    }

    a:hover {
        opacity: 0.9;
    }
`;