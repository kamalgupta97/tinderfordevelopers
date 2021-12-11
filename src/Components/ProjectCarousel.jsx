import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const ProjectCarousel = () => {
  return (
    <StyledProjectCarousel>
      <h2 id='title'>My Projects</h2>    
      <Example />
    </StyledProjectCarousel>
  );
};
export { ProjectCarousel };

const StyledProjectCarousel = styled.div`
  border: 1px solid gainsboro;
  width: 800px;
  box-sizing: border-box;
  /* height: 480px; */
  border-radius: 20px;
  margin-top: 20px;
  padding:0 20px 0 20px;
  & > #title {
      text-align: left;
  }
`;
const StyledCarouselMUI = styled(Carousel)`
    height:100% !important;
`;

function Example(props) {
  var items = [
    {
      name: "Facebook",
      description: "Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online. It allows users to share pictures, music, videos, and articles, as well as their own thoughts and opinions with however many people they like.",
      tachStack:['HTML','CSS','Javascript','React']    
    },
    {
      name: "Instagram",
        description: "Instagram is a free social media platform for sharing photos and videos. Since its launch, Instagram has become a popular way to connect with brands, celebrities, thought leaders, friends, family, and more. From short-form videos to live streaming, Instagram has a vast array of features that we'll",
      tachStack:['HTML','CSS','Javascript','React']
    },
    {
      name: "Instagram",
        description: "Instagram is a free social media platform for sharing photos and videos. Since its launch, Instagram has become a popular way to connect with brands, celebrities, thought leaders, friends, family, and more. From short-form videos to live streaming, Instagram has a vast array of features that we'll",
      tachStack:['HTML','CSS','Javascript','React']
    },
    {
      name: "Instagram",
        description: "Instagram is a free social media platform for sharing photos and videos. Since its launch, Instagram has become a popular way to connect with brands, celebrities, thought leaders, friends, family, and more. From short-form videos to live streaming, Instagram has a vast array of features that we'll",
      tachStack:['HTML','CSS','Javascript','React']
    },
  ];

  return (
    <StyledCarouselMUI
      fullHeightHover={false}
      navButtonsProps={{
        style: {
          backgroundColor: "white",
        //   borderRadius: 0,
          color: "black",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          color: "black", // 3
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: "gainsboro", // 2
        },
      }}
      animation={"slide"}
      duration={800}
      next={(next, active) =>
        console.log(`we left ${active}, and are now at ${next}`)
      }
      prev={(prev, active) =>
        console.log(`we left ${active}, and are now at ${prev}`)
      }
      NextIcon={<ArrowForwardIosIcon/>}
      PrevIcon={<ArrowBackIosIcon />}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </StyledCarouselMUI>
  );
}

function Item(props) {
  return (
    <StyledProjectPaper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <Button className="CheckButton">Check it out!</Button>
    </StyledProjectPaper>
  );
}
const StyledProjectPaper = styled(Paper) `
    border: 1px solid gainsboro;
    border-radius:10px;
    height:400px;

`