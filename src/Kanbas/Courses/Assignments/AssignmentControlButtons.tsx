import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../../Shared/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import * as assignmentsClient from "./client";

export default function AssignmentControlButtons({ assignmentId }: {
  assignmentId: string; }) {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const alertDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to remove this assignment?");
    if (confirmDelete) {
      removeAssignment(assignmentId);
    }
  }

  return (
    <div className="float-end">
      <GreenCheckmark />
      {currentUser.role === 'FACULTY' && (
        <>
          <FaTrash className="text-danger ms-2 me-2 mb-1" onClick={alertDelete} />
        </>
      )}
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
