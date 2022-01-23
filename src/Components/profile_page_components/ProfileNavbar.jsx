import styled from 'styled-components';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const ProfileNavbar = () => {
    return (
        <StyledHeader>
            <nav>

                <div>
                    <img src="favicon.ico" alt="" />
                </div>
                <StyledUserPanel>
                    <StyledExploreBtn>
                        < PersonSearchOutlinedIcon/>
                        Find partner
                    </StyledExploreBtn>
                    <NotificationsOutlinedIcon/>
                    <StyledProfileIcon>
                        <div id="userImg">
                            <img src="/rahul.jpg" alt="" />
                        </div>
                        <KeyboardArrowDownIcon className ='downIcon'/>
                    </StyledProfileIcon>
                </StyledUserPanel>
            </nav>
        </StyledHeader>
    )
}
const StyledExploreBtn = styled.button`
    background-color:rgb(0,200,5);
    color:rgb(255,255,255);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:10px;
    width:45%;
    padding:8px;
    font-size:15px;
    border:none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor:pointer;
`
const StyledHeader = styled.header`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    height: 12vh;
    display:flex;
    justify-content: center;
    align-items: center;
    & > nav{
        height: 80%;
        width:80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
const StyledUserPanel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
`
const StyledProfileIcon = styled.div`
    width: 90px;
    height:50px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    & > #userImg{
        width: 60%;
        height: 100%;
        border-radius:50%;
        img {
            width: 100%;
            height: 100%;
            border-radius:50%;
        }
    }
    & > .downIcon{
        font-size:30px;
    }
`
export { ProfileNavbar };