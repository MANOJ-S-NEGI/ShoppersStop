import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-left: 30px;
`;

export const Title = styled.span`
  display:flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;


export const Preview = styled.div`
  display: grid;
  gap: 90px; 
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));  
  justify-content: center;
  align-items: center;
`;

//grid-template-columns: repeat(4, 1fr);

