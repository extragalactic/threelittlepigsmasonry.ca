import React from 'react';
import styled from 'styled-components';
import GetQuote from './GetQuote';

const StyledContact = styled.section`
  padding-top: 20px;

  section {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.0em;
    text-align: left;
  }
`;
const StyledArea = styled.div`
  width: 45%;
  min-width: 200px;

  @media (max-width: 500px) {
    width: 95%;
    min-width: 310px;
  }

  img {
    width: 100%;
  } 
`;

const Contact = () => {
  return (
    <StyledContact>
      <h2>Service Area</h2>
      <section>
        <StyledArea>
          <img src="./images/service-area-map.jpg" alt="service area" />
        </StyledArea>
        <StyledArea style={{ paddingLeft: '10px' }}>
          <p>Three Little Pigs services a large part of the Greater Toronto Area. If you live inside the red area on the map, let&#39;s get started! You can call us at <b>905-508-0500</b> or <b>416-595-0100</b>, or for an immediate quote just click on the green button below.</p>
          <GetQuote />
        </StyledArea>
      </section>
    </StyledContact>
  );
};

export default Contact;
