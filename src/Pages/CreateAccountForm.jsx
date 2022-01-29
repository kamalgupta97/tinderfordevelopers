import React, { useState } from "react";
import {
  FormContainer,
  FormContainerPage,
  Nameinput,
} from "../Styles/CreateAccountForm.style";

const questions = [
  "What is your Profession?",
  "What is Your Location?",
  "Your Tech stack?",
];

const initState = {
  title: "",
  techStack: "",
  numberOfPerson: "",
};

export const CreateAccountForm = () => {
  const [enableButton, setEnable] = useState(true);
  const [index, setIndex] = useState(0);
  const [idea, setIdea] = useState(false);
  const [answer, setAnswer] = useState();
  const [project, setProject] = useState(initState);

  const handleContinue = (prev) => {
    setIndex(prev + 1);
    setAnswer("");
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmitProject = () => {
    console.log(project);
  };

  const handleNo = () => {};

  const handleYes = () => {
    setIndex(10);
  };

  const handleProjectYes = () => {
    setIdea(true);
    setIndex(20);
  };

  const handleProjectNo = () => {};

  return (
    <>
      { idea === true ? (
        <FormContainerPage>
          <FormContainer>
            <div>
              <p>Project Details</p>
              <input
                name="title"
                value={project.title}
                type="text"
                placeholder="Project Name"
                required
                onChange={handleProjectChange}
              />
              <input
              name="techStack"
                value={project.techStack}
                type="text"
                placeholder="Tech Stacks"
                required
                onChange={handleProjectChange}
              />
              <input
                name="numberOfPerson"
                value={project.numberOfPerson}
                type="text"
                placeholder="Number Of Person"
                required
                onChange={handleProjectChange}
                onInput={() => setEnable(false)}
              />
              <button disabled={enableButton} onClick={handleSubmitProject}>
                Continue
              </button>
            </div>
          </FormContainer>
        </FormContainerPage>
      ) : index === 10 ? (
        <FormContainerPage>
          <FormContainer>
            <div>
              <p>Do you have any project or project idea?</p>
              <button onClick={handleProjectYes}>Yes</button>
              <button onClick={handleProjectNo}>No</button>
            </div>
          </FormContainer>
        </FormContainerPage>
      ) :  index <= 2  ? (
        <FormContainerPage>
          <FormContainer>
            <div>
              <p>{questions[index]}</p>
              <input
                value={answer}
                type="text"
                placeholder="Name"
                onChange={handleChange}
                onInput={() => setEnable(false)}
              />
              <button
                disabled={enableButton}
                onClick={() => {
                  handleContinue(index);
                }}
              >
                Continue
              </button>
            </div>
          </FormContainer>
        </FormContainerPage>
      ) : (
        <FormContainerPage>
          <FormContainer>
            <div>
              <p>Are you looking for a project partner</p>
              <button onClick={handleYes}>Yes</button>
              <button onClick={handleNo}>No</button>
            </div>
          </FormContainer>
        </FormContainerPage>
      )}
    </>
  );
};
