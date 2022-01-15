import styled from "styled-components"
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
const Summary = () => {
    const summaryEditModel = () => {
        
    }
    return (
        <StyledSummary>
            <div><h2>Summary </h2><StyledModeEditOutlineOutlinedIcon onClick={  summaryEditModel  }/></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, vel!
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque omnis ab fuga consectetur vel distinctio dicta error, laborum ea quasi obcaecati eveniet, beatae inventore eos placeat quis sequi quos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, officia.
            </p>
            <footer>
                <p>...See More</p>
            </footer>
        </StyledSummary>
    )
}
export {Summary};
const StyledSummary = styled.div`
  border: 1px solid gainsboro;
  width: 100%;
  height: 270px;
  border-radius: 20px;
  text-align: left;
  padding: 0 20px 20px 20px;
  margin-top:20px;
  box-sizing: border-box;
    & > div {
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    & > footer {
        display:flex;
        justify-content:flex-end;
        p {
            cursor:pointer;
        }
    }
`;
const StyledModeEditOutlineOutlinedIcon = styled(ModeEditOutlineOutlinedIcon)`
    cursor:pointer;
`;