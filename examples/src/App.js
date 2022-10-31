import React, { useState } from 'react';
import DynamicForm from '../../src';
import { Container, Title, Wrapper, FormWrapper, Author } from './_appStyle';
import { questions } from './data/questions';

function App() {
  const [validJsonData] = useState(questions);

  const handleSubmission = (val) => {
    alert(JSON.stringify(val, null, 4));
  };

  return (
    <Container>
      <Title>UL components</Title>
      <Wrapper>
        <FormWrapper>
          <DynamicForm fields={validJsonData} cbSubmit={handleSubmission} />
        </FormWrapper>
      </Wrapper>
    </Container>
  );
}

export default App;
