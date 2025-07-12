import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
  max-width: 600px;
  margin: 1rem auto;
`;

const Section = styled.div`
  padding: 1rem;
`;

export const HeaderWrapper = styled(Section)`
  background-color: #f5f5f5;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

export const BodyWrapper = styled(Section)`
  flex: 1;
`;

export const FooterWrapper = styled(Section)`
  background-color: #fafafa;
  border-top: 1px solid #ddd;
  text-align: right;
`;
