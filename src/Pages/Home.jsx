import styled from "styled-components";
import { Navbar } from "../Components/Navbar";
import { SignupModel } from '../Components/SignupModel';
import { useState } from 'react';
export const Home = () => {
  const [isSignupModelOpen, setSignupModelOpen] = useState(false);
  const handleSignupModel = () => {
    setSignupModelOpen(!isSignupModelOpen);
  }
  return (
    <>
      <STDIV>
        <Navbar handleSignupModel={handleSignupModel}/>
        <div className="description">
          <p className="title-1">Find people to Collaborate with your Project</p>
          <p className="title-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            dolores modi commodi omnis sit eligendi accusantium iusto amet,
            impedit, vitae, nihil consectetur dolore doloremque eum laborum
            debitis adipisci beatae aut! Beatae optio facere facilis in aspernatur
            assumenda adipisci ad quaerat aut rerum. Commodi, aperiam pariatur,
            officiis corrupti ullam autem odio deleniti id illum, sequi quibusdam?
          </p>
          <div className="icons">
            <img src="/Assets/apple_store.svg" alt="" />
            <img src="/Assets/google_play.svg" alt="" />
          </div>
        </div>
      </STDIV>
      {isSignupModelOpen && <SignupModel handleSignupModel={ handleSignupModel }/>}
    </>
  );
};

const STDIV = styled.div`
  background-image: url("https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/01/web_dev_pillar_page.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 98vw;
  height: 100vh;
  margin-top: 0;
  border: 0.5px solid white;
  .description {
    width: 80%;
    margin: 20% 10%;
    color: white;
    text-align: left;
  }
  .title-1 {
    font-size: 2.5rem;
  }
  .title-2 {
    font-size: 1.5rem;
  }
  .icons img {
    width: 15%;
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    cursor: pointer;
  }
`;