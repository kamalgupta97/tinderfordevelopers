import styled from "styled-components";
const ProfileDp = () => {
  return (
    <StyledProfileDp>
      <StyledCoverNDp>
        <div id="cover_img">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div id="user_dp">
          <img
            src="/rahul.jpg"
            alt=""
          />
        </div>
      </StyledCoverNDp>
      <StyledUserDpInfo>
        <h1>Rahul Rajput</h1>
        <p>CEO of tinder for developers</p>
        <div>New delhi, Delhi</div>
        <div className="social_media_icons">
          <StyledSocialIcon>
            <img
              src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
              alt=""
            />
          </StyledSocialIcon>
          <StyledSocialIcon>
            <img
              src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
              alt=""
            />
          </StyledSocialIcon>
          <StyledSocialIcon>
            <img
              src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
              alt=""
            />
          </StyledSocialIcon>
          <StyledSocialIcon>
            <img
              src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
              alt=""
            />
          </StyledSocialIcon>
          <StyledSocialIcon>
            <img
              src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
              alt=""
            />
          </StyledSocialIcon>
        </div>
        {/* Edit profile button */}
        <StyledEditProfileBtn>Edit profile</StyledEditProfileBtn>
      </StyledUserDpInfo>
    </StyledProfileDp>
  );
};
export { ProfileDp };
const StyledProfileDp = styled.div`
  border: 1px solid gainsboro;
  width: 800px;
  height: 480px;
  border-radius: 20px;
  margin-top:20px;
`;
const StyledCoverNDp = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 20px 20px 0 0;
  position: relative;
  & > #cover_img {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
    img {
      width: 100%;
      height: 100%;
      border-radius: 20px 20px 0 0;
    }
  }
  & > #user_dp {
    width: 22%;
    height: 75%;
    border: 7px solid white;
    border-radius: 50%;
    position: absolute;
    bottom: -30%;
    left: 6%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`;
const StyledUserDpInfo = styled.div`
  margin-left: 33%;
  text-align: left;
  position: relative;
  & > .social_media_icons {
    /* border: 1px solid black; */
    display: flex;
    height: 40px;
    margin-top: 6%;
  }
`;
const StyledSocialIcon = styled.div`
  border: 1px solid gainsboro;
  width: 12%;
  height: 100%;
  margin-right: 3%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 70%;
  }
`;
const StyledEditProfileBtn = styled.button`
  border: 1px solid gainsboro;
  background-color: white;
  width: 30%;
  height: 23%;
  border-radius: 8px;
  font-weight: bold;
  font-size: 15px;
  position: absolute;
  right: 5%;
  top: 5%;
`;
