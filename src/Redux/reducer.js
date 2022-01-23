import {
  UPDATE_SUMMARY,
  UPDATE_SKILL,
  UPDATE_GITHUB,
  UPDATE_PROFILE,
} from "./actionTypes";
const summaryContent = `Hii there!  🙋‍♂️

- Professionally, I'm a MERN stack developer, but not bound to only a specific technology.

- I love applying responsive principles and watching my page shrink into a mobile screen and still look amazing, it is very satisfying and I also love learning new algorithms because it changes my way of looking at a problem.

- My specialities are quickly learning new skills and frameworks, problem-solving, responsive design principles, website optimization, teamwork. 

- Personally, I'm a dog lover, always ready for travelling.

- Skills / Interests : Javascript, HTML, CSS, NODE.JS, React, Redux, Git/Github, Mongo DB, Python, Data structures & Algorithm.

As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.

Check out my work at: https://github.com/Rahul3105/

Contact me 📧: rahulrajput7358@gmail.com`;
const initState = {
  user_summary: summaryContent,
  user_skills: [
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ],
  user_github: "rahul3105",
  user_profile: {
    first_name: "Rahul",
    last_name: "Rajput",
    position: "CEO of tinder for developers",
    location: "New delhi, Delhi",
    github_url: "https://github.com/Rahul3105/",
    linkedin_url: "https://www.linkedin.com/in/rahul-rajput-3105/",
    twitter_url: "",
    email: "rahulrajput7358@gmail.com",
    phone: "7683004927",
    user_photo: "/rahul.jpg",
    user_cover_photo:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
};
const reducer = (store = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_SUMMARY:
      return { ...store, user_summary: payload };
    case UPDATE_SKILL:
      return { ...store, user_skills: payload };
    case UPDATE_GITHUB:
      return { ...store, user_github: payload };
    case UPDATE_PROFILE:
      return { ...store, user_profile: { ...store.user_profile, ...payload } };
    default:
      return store;
  }
};
export { reducer };
