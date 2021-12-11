import styled from "styled-components"

const Summary = () => {
    return (
        <StyledSummary>
            <h2>Summary</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, vel!
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque omnis ab fuga consectetur vel distinctio dicta error, laborum ea quasi obcaecati eveniet, beatae inventore eos placeat quis sequi quos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, officia.
            </p>
        </StyledSummary>
    )
}
export {Summary};
const StyledSummary = styled.div`
  border: 1px solid gainsboro;
  width: 800px;
  height: 250px;
  border-radius: 20px;
  text-align: left;
  padding: 0% 1% 1% 1%;
  margin-top:20px;
  box-sizing: border-box;

`