import { UPDATE_GITHUB, UPDATE_SUMMARY, UPDATE_SKILL } from "./actionTypes";
const updateSummary = (payload) => ({
  type: UPDATE_SUMMARY,
  payload,
});

const updateSkill = (payload) => ({
  type: UPDATE_SKILL,
  payload,
});
const updateGithub = (payload) => ({
  type: UPDATE_GITHUB,
  payload,
});
export { updateSummary, updateSkill, updateGithub };
