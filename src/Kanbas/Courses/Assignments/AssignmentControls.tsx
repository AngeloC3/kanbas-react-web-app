import { FaPlus } from "react-icons/fa6";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <div className="position-relative me-5 justify-content-left" style={{ display: 'inline-block' }}>
        <HiMiniMagnifyingGlass
          className="position-absolute"
          style={{
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
          }}
        />
        <input
          type="text"
          id="wd-search-assignments"
          className="ps-5"
          placeholder="Search..."
          style={{ height: "calc(1.5em + 1.4rem)" }}
        />
      </div>

      <div className="float-end">
        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-2 float-end ms-1">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>

        <button id="wd-add_group" className="btn btn-lg btn-secondary float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
      </div>
    </div>
  );
}
