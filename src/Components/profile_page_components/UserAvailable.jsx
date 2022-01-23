import styled from 'styled-components'
const UserAvailable = () => {
    return (
        <StyledUserAvailable>
            <h2 id='title'>Status</h2>
        </StyledUserAvailable>
    )
}
export {UserAvailable}
const StyledUserAvailable = styled.div`
    border: 1px solid gainsboro;
  width: 100%;
  height: 290px;
  border-radius: 20px;
  margin-top:20px;
  box-sizing: border-box;
  padding:0 20px 20px 20px;
  & > #title {
    text-align: left;
  }
`;
