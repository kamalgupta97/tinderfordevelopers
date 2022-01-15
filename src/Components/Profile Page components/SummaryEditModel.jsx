import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';
const SummaryEditModel = () => {
    
    return (
        <StyledSummaryEditModel>
            <nav>
                <h3> Edit about</h3> <StyledClearIcon/>  
            </nav>
            <div className="body">
                <p>You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.</p>
                <textarea name="" id="" rows="10"></textarea>
            </div>
            <footer>
                <button>Save</button>
            </footer>

        </StyledSummaryEditModel>
    )
}
export { SummaryEditModel };
const StyledSummaryEditModel = styled.div`
    background-color:white;    
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width:60%;
    margin:auto;

    & > .body {
        border:1px solid gainsboro;
        border-left:none;
        border-right:none;
        text-align:left;
        padding: 0 4% 0 4%;
        textarea {
            width:100% !important;
            margin-bottom:50px;
            padding:10px;
            box-sizing: border-box
        }
    }
    &  > nav {
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4% 0 4%;
    }
    & > footer {
        padding: 0 4% 0 4%;
        display: flex;
        justify-content: flex-end;

        button {
            background-color: rgb(0, 200, 5);
            border:none;
            color:white;
            padding:10px 20px 10px 20px;
            border-radius: 30px;
            margin:10px;
            cursor:pointer;
        }
    }
`;
const StyledClearIcon = styled(ClearIcon)`
    cursor:pointer;
`;