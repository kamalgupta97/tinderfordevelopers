import { UPDATE_SUMMARY } from "./actionTypes";
const initState = {
  user_summary: `Hii there!  🙋‍♂️

- Professionally, I'm a MERN stack developer, but not bound to only a specific technology.

- I love applying responsive principles and watching my page shrink into a mobile screen and still look amazing, it is very satisfying and I also love learning new algorithms because it changes my way of looking at a problem.

- My specialities are quickly learning new skills and frameworks, problem-solving, responsive design principles, website optimization, teamwork. 

- Personally, I'm a dog lover, always ready for travelling.

- Skills / Interests : Javascript, HTML, CSS, NODE.JS, React, Redux, Git/Github, Mongo DB, Python, Data structures & Algorithm.

As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.

Check out my work at: https://github.com/Rahul3105/

Contact me 📧: rahulrajput7358@gmail.com`,
};
const reducer = (store = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_SUMMARY:
      return { ...store, user_summary: payload };
    default:
      return store;
  }
};
export { reducer };
