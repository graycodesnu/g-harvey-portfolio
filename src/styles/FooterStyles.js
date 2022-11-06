import styled from "styled-components";

export const Box = styled.div`
  padding: 20px 20px;
  background: white;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding-bottom: 30px;
    padding-top: 40;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  position: absolute;
`;

export const Row = styled.div`
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Footer = styled.div`
  bottom: 0;
  width: 100%;
  color: red;
`;
