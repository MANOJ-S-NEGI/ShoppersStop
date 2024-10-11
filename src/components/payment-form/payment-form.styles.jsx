import styled from 'styled-components';

export const PaymentFormContainer = styled.div`
  height: auto;
  align-items: left;
  justify-content: center;
  display:flex;
  flex-direction:column;
  border:1px solid black;
  width:80Vw;
  padding:20px;
  border-radius:20px;

  @media (max-width: 550px) {
  width:80Vw;
  
} 
`;

export const FormContainer = styled.form`
  height: 150px;
  width: 400px;
  margin-bottom:10px;
  margin-top:20px;

  @media (max-width: 550px) {
  width: 100%; 
  gap:10px;
  }
`;

export const StyledBreak = styled.br`


`;

