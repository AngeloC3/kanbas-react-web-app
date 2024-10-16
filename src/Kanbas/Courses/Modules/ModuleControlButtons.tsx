import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../../Shared/GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaPlus className="fs-4" style={{ bottom: "1px" }} />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
