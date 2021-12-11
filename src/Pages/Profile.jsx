import styled from 'styled-components'
import {ProfileDp} from '../Components/ProfileDp'
import { Summary } from '../Components/Summary';
import {Github} from '../Components/Github'
import {ProjectCarousel} from '../Components/ProjectCarousel'
const Profile = () => {
    return (
        <StyledProfile>
            <ProfileDp />
            <Summary />
            <Github />
            <ProjectCarousel/>
        </StyledProfile>
    )

}
export default Profile;
const StyledProfile = styled.div`
    padding:1% 8% 0 8%;
`;