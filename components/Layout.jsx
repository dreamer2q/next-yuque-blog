import styled from "@emotion/styled";
import Footer from "./Footer";
import Header from "./Header";

const Box = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const Content = styled.div`
  padding: 1rem;
  max-width: 1024px;
  margin: 0 auto;
  border: 1px solid green;
`;

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Box>
  );
}
