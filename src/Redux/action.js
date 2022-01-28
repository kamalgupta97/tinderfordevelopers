import {
  UPDATE_GITHUB,
  UPDATE_SUMMARY,
  UPDATE_SKILL,
  UPDATE_PROFILE_INFO,
  UPDATE_DP,
  UPDATE_COVER,
} from "./actionTypes";
const updateSummary = (payload) => ({ type: UPDATE_SUMMARY, payload });
const updateSkill = (payload) => ({ type: UPDATE_SKILL, payload });
const updateGithub = (payload) => ({ type: UPDATE_GITHUB, payload });
const updateDP = (payload) => ({ type: UPDATE_DP, payload: payload });
const updateCover = (payload) => ({ type: UPDATE_COVER, payload: payload });
const updateProfileInfo = (payload) => ({ type: UPDATE_PROFILE_INFO, payload });
export {
  updateSummary,
  updateSkill,
  updateGithub,
  updateProfileInfo,
  updateDP,
  updateCover,
};
