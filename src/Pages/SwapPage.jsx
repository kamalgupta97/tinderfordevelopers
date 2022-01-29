import React from "react";
import styledComponents from "styled-components";
import Dp from "../Components/Dp";
import TechStack from "../Components/TechStack";
import StarIcon from "@mui/icons-material/Star";
import GitHubCalendar from "react-github-calendar";
import MyButton from "../Components/MyButton";
import {ProjectCarousel} from "../Components/profile_page_components/ProjectCarousel";

const Container = styledComponents.div`
width:50%;
margin:auto;
margin-top:100px;
text-align:left;
border-radius: 10px;
over-flow: hidden;
`;

const SwappingButtons = styledComponents.div`

display:flex;
position:fixed;
bottom:20px;
right:43%;

& > *{
  margin:5px
}
& > .profile {
  border:3px solid black;
  font-size:20px;
  border-radius:30px;
  padding:15px;
}

`;

const techStack = ["javascript", "react", "html", "css"];
const innerStyle = {
  display: "flex",
};

export default function SwapPage() {
  return (
    <Container>
      <h2>Aleem Alam, 23</h2>
      <br />
      <div style={innerStyle}>
        <div>
          <Dp />
          <div>
            {techStack.map((tech) => (
              <TechStack>{tech}</TechStack>
            ))}
          </div>
        </div>
        <div style={{ padding: 10 }}>
          {Array(3)
            .fill(0)
            .map((item, i) => (
              <StarIcon key={i} style={{ color: "gold", fontSize: 35 }} />
            ))}
          <div style={{ fontSize: 20, marginLeft: 10 }}>
            <p style={{ marginTop: 5 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem
              quisquam fugiat hic aliquid error vero praesentium, dolorem aut
              facilis unde repellat labore saepe optio quas id voluptatem soluta
              eveniet.
            </p>
            <h3>
              Location <span style={{ fontWeight: "lighter" }}>Delhi</span>
            </h3>
            <h3>
              Work at{" "}
              <span style={{ fontWeight: "lighter" }}>Masai School</span>
            </h3>
            <h3>
              Position{" "}
              <span style={{ fontWeight: "lighter" }}>Back End Developer</span>
            </h3>
          </div>
        </div>
      </div>
      <GitHubCalendar
        style={{
          width: "100%",
          margin: "auto",
          marginTop: 30,
        }}
        username="AleemAlam"
      />
      <div style={{height:"100px", border:"1px solid red"}}>
          <ProjectCarousel/>
      </div>
      <SwappingButtons>
        <MyButton>No</MyButton>
        <button className="profile">View Profile</button>
        <MyButton>Yes</MyButton>
      </SwappingButtons>
    </Container>
  );
}
