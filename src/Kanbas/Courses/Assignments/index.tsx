import { BsGripVertical } from 'react-icons/bs';
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentControls from "./AssignmentControls";
import AllAssignmentControlButtons from "./AllAssignmentControlButtons";
import AssignmentControlButtons from './AssignmentControlButtons';

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <AssignmentControls /><br /><br />
        <ul id="wd-assignments" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-assignments-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3" />
              <FaCaretDown className="me-1" />
              Assignments
              <AllAssignmentControlButtons />
              <div className='float-end me-2 border rounded-4 p-1'>
                40% of Total
              </div>
            </div>
            <ul className="wd-assignments-list list-group rounded-0">
              
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className='text-success me-4' />
                <div>
                  <a className='wd-assignment-link' href="#/Kanbas/Courses/1234/Assignments/123"><h4>A1</h4></a>
                  <p className='fs-6'>
                    <span className='text-danger'>Multiple Modules</span> | <b className='text-secondary'>Not available until </b> 
                    May 6 at 12:00am | <b className='text-secondary'>Due</b> May 13 at 11:59pm | 100pts</p>
                </div>
              </div>
              <AssignmentControlButtons />
            </li>

            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className='text-success me-4' />
                <div>
                <a className='wd-assignment-link' href="#/Kanbas/Courses/1234/Assignments/123"><h4>A2</h4></a>
                <p className='fs-6'>
                    <span className='text-danger'>Multiple Modules</span> | <b className='text-secondary'>Not available until </b> 
                    May 13 at 12:00am | <b className='text-secondary'>Due</b> May 20 at 11:59pm | 100pts</p>
                </div>
              </div>
              <AssignmentControlButtons />
            </li>

            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className='text-success me-4' />
                <div>
                  <a className='wd-assignment-link' href="#/Kanbas/Courses/1234/Assignments/123"><h4>A3</h4></a>
                  <p className='fs-6'>
                    <span className='text-danger'>Multiple Modules</span> | <b className='text-secondary'>Not available until </b> 
                    May 20 at 12:00am | <b className='text-secondary'>Due</b> May 27 at 11:59pm | 100pts</p>
                </div>
              </div>
              <AssignmentControlButtons />
            </li>

            </ul>
          </li>
        </ul> 
      </div>
  );}
