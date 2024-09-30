import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function AllAssignmentControlButtons() {
  return (
    <div className="float-end">
      <FaPlus className="fs-4" style={{ bottom: "1px" }} />
      <IoEllipsisVertical className="fs-4 ms-2" />
    </div>
  );
}
