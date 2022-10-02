import styled from "@emotion/styled";

const mHeight = `3.25rem`;

const StickyWrap = styled.div`
  position: sticky;
  top: 0;
  height: ${mHeight};
  line-height: ${mHeight};
  border: 1px solid red;
`;

const CenterDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  vertical-align: middle;
  justify-content: space-around;
`;

export default function Header({}) {
  return (
    <StickyWrap>
      <CenterDiv>
        <div>Logo</div>
        <div>Memu</div>
        <div>Action</div>
      </CenterDiv>
    </StickyWrap>
  );
}
