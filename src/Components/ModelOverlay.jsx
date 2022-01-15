import { SummaryEditModel } from './Profile Page components/SummaryEditModel';
import styled from 'styled-components'
const ModelOverlay = () => {
    return (
        <StyledModelOverlay>
            <SummaryEditModel/>
        </StyledModelOverlay>
    )
}
export { ModelOverlay };
const StyledModelOverlay = styled.div`
    position: absolute;
    background-color: #0000003e;
    width:100%;
    min-height:100vh;
    max-height:auto;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
`
