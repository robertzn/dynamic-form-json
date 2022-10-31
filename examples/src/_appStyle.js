import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
  display: grid;
  padding: 5%;
`;

export const Wrapper = styled.div`
  vertical-align: middle;
  //margin: 5px 10px 5px 10px;
  padding: 10%;
  background-color: #fff;
 

  align-items: center;

  > section {
    width: 100%;
    text-align: center;
    align-items: center;

    > form {
      text-align: center;
      width: 90%;
      padding: 5%;
      align-items: center;
      display: flex;
      border: 1px solid #ddd;
      flex-flow: row wrap;
      align-items: center;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;

    > section {
      width: 80%;
      align-items: center;
      > form {
        align-items: center;
      }
    }

    > section:first-child {
      align-items: center;
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.h1`
  padding: 20px;
  text-align: center;
  font-size: 30px;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const JsonWrapper = styled.section``;

export const FormWrapper = styled.section``;

export const ErrMessage = styled.div`
  margin-top: 20px;
  color: #f72910;
`;

export const Author = styled.div`
  margin: 30px 10px;
  text-align: center;

  > span {
    color: #fc2813;
  }

  @media screen and (min-width: 1024px) {
    margin: 50px 10px 30px;
  }
`;
