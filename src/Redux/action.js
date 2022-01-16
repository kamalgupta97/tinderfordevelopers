import { UPDATE_SUMMARY, UPDATE_SKILL } from "./actionTypes";
const updateSummary = (payload) => ({
  type: UPDATE_SUMMARY,
  payload,
});

const updateSkill = (payload) => ({
  type: UPDATE_SKILL,
  payload,
});
export { updateSummary, updateSkill };
