import {
  UPDATE_GITHUB,
  UPDATE_SUMMARY,
  UPDATE_SKILL,
  UPDATE_PROFILE,
} from "./actionTypes";
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
const updateProfile = (payload) => ({ type: UPDATE_PROFILE, payload });
export { updateSummary, updateSkill, updateGithub, updateProfile };
