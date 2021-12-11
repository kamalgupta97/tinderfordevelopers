import styled from 'styled-components'
const Github = () => {
    return (
        <StyledGithub>
            <h2 id='title'>My Github Graph</h2>
            <img src="githubGraph.png" alt="" />
        </StyledGithub>
    )
}
export { Github };
const StyledGithub = styled.div`
border: 1px solid gainsboro;
  width: 800px;
  height: 290px;
  border-radius: 20px;
  margin-top:20px;
  box-sizing: border-box;
   padding:0 20px 20px 20px;
  & > img {
      width: 100%;
      border-radius: 20px;
  }
  & > #title{
      text-align: left;
     
  }
`