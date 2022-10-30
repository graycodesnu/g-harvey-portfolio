import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 2rem;
  height: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
`;