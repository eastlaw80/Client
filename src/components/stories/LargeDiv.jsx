import React from 'react';
import styled from 'styled-components';

import {BigCardImage} from '../../assets/Svgs';

const LargeDiv = () => {
  return (
    <LargeContainer>
        <Content>가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차</Content>
        <UserNickName>아이디</UserNickName>
    </LargeContainer>
  );
};

export default LargeDiv;

const LargeContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 181px;
  border-radius: 0.6rem;
  background-color: grey;
  padding: 1rem 2rem;
  background-image: url(${BigCardImage});
  background-size: cover;
`;

const Content = styled.div`

`

const UserNickName = styled.span`

`
