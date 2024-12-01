import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    assignments: [],
  };
  const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      setAssignments: (state, action) => {
        state.assignments = action.payload;
      },
      addAssignment: (state, { payload: assignment }) => {
          const newAssignment: any = {
            _id: assignment._id,
            title: assignment.title,
            course: assignment.course,
            avail_at: assignment.avail_at,
            avail_until: assignment.avail_until,
            due_at: assignment.due_at,
            points: assignment.points,
            description: assignment.description,
          };
          state.assignments = [...state.assignments, newAssignment] as any;
      },
      deleteAssignment: (state, { payload: assignmentId }) => {
          state.assignments = state.assignments.filter(
            (a: any) => a._id !== assignmentId
          );
      },
      updateAssignment: (state, { payload: assignment }) => {
          state.assignments = state.assignments.map((a: any) =>
            a._id === assignment._id ? assignment : a
          ) as any;
      },
      editAssignment: (state, { payload: assignmentId }) => {
          state.assignments = state.assignments.map((a: any) =>
            a._id === assignmentId ? { ...a, editing: true } : a
          ) as any;
      },
    },
  });
  export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments } =
  assignmentsSlice.actions;
  export default assignmentsSlice.reducer;