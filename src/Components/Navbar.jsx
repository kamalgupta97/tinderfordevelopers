import styled from "styled-components";

const STDIV = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0px 10%;
  position: fixed;
  top: 0;
  color: white;
  font-size: 1.2rem;
  .block-1 {
    display: flex;
  }
  .logo {
    width: 50px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .title {
    font-size: 1.5rem;
    font-family: roboto;
    font-weight: bold;
  }
  .links {
    display: flex;
  }
  .link {
    margin: 1rem;
    cursor: pointer;
  }
`;

export const Navbar = ({handleSignupModel}) => {
  return (
    <STDIV>
      <div className="block-1">
        <img className="logo" src="/Assets/LOGO.PNG" alt="" />
        <img className="logo-text" src="/Assets/logo-text.png" alt="" />
      </div>
      <div className="links">
        <div className="link" onClick={handleSignupModel}>SignUp</div>
        <div className="link">Login</div>
        <div className="link">About</div>
        <div className="link">Contact</div>
      </div>
    </STDIV>
  );
};