import { useParams } from "react-router";
import { addAssignment, updateAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";

const formatDateTimeLocal = (dateString: string) => {
    const date = new Date(dateString);
    const offset = date.getTimezoneOffset() * 60000;
    const localISOTime = new Date(date.getTime() - offset).toISOString().slice(0, 16);
    return localISOTime;
};

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const assignment = assignments.find((assignment: any) => assignment._id === aid);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState("");
    const [submissionType, setSubmissionType] = useState("online");
    const [assignmentGroup, setAssignmentGroup] = useState("assignments");
    const [displayGradeAs, setDisplayGradeAs] = useState("percentage");
    const [dueAt, setDueAt] = useState("");
    const [availAt, setAvailAt] = useState("");
    const [availUntil, setAvailUntil] = useState("");

    useEffect(() => {
        if (assignment) {
            setTitle(assignment.title);
            setDescription(assignment.description);
            setPoints(assignment.points);
            setDueAt(assignment.due_at ? formatDateTimeLocal(assignment.due_at) : "");
            setAvailAt(assignment.avail_at ? formatDateTimeLocal(assignment.avail_at) : "");
            setAvailUntil(assignment.avail_until ? formatDateTimeLocal(assignment.avail_until) : "");
        }
    }, [assignment]);

    const createAssignmentForCourse = async (newAssignment: any) => {
        if (!cid) return;
        const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
        dispatch(addAssignment(assignment));
    };
    const saveAssignment = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };

    const onCancelClick = () => {
        const pathSegments = location.pathname.split('/');
        pathSegments.pop();
        navigate(pathSegments.join('/'));
    };

    const onSaveClick = () => {
        if (!title || !description || !points || !dueAt || !availAt || !availUntil) {
            alert("Please fill out all fields.");
            return;
        }
        const pointsValue = parseFloat(points);
        if (isNaN(pointsValue) || pointsValue <= 0) {
            alert("Please enter a valid number for Points.");
            return;
        }

        const newAssignment: any = {
            _id: aid,
            course: cid,
            title,
            description,
            points,
            submission_type: submissionType,
            assignment_group: assignmentGroup,
            display_grade_as: displayGradeAs,
            due_at: dueAt,
            avail_at: availAt,
            avail_until: availUntil,
        };

        if (assignment === undefined) {
            createAssignmentForCourse(newAssignment);
        } else {
            saveAssignment(newAssignment);
        }

        onCancelClick();
    };

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input
                    id="wd-name"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea
                    id="wd-description"
                    className="form-control"
                    rows={6}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <div className="row mb-3">
                    <div className="col-md-3 text-end">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                    </div>
                    <div className="col-md-9">
                        <input
                            id="wd-points"
                            className="form-control"
                            value={points}
                            onChange={(e) => setPoints(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-3 text-end">
                        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    </div>
                    <div className="col-md-9">
                        <select
                            id="wd-group"
                            className="form-select form-control"
                            value={assignmentGroup}
                            onChange={(e) => setAssignmentGroup(e.target.value)}
                        >
                            <option value="assignments">ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-3 text-end">
                        <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                    </div>
                    <div className="col-md-9">
                        <select
                            id="wd-display-grade-as"
                            className="form-select form-control"
                            value={displayGradeAs}
                            onChange={(e) => setDisplayGradeAs(e.target.value)}
                        >
                            <option value="percentage">Percentage</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-3 text-end">
                        <label className="form-label">Submission Type</label>
                    </div>
                    <div className="col-md-9">
                        <div className="border p-3">
                            <select
                                id="wd-submission-type"
                                className="form-select form-control mb-3"
                                value={submissionType}
                                onChange={(e) => setSubmissionType(e.target.value)}
                            >
                                <option value="online">Online</option>
                            </select>
                            <label className="form-label">Online Entry Options</label>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    name="entry-option"
                                    id="wd-text-entry"
                                    className="form-check-input"
                                />
                                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    name="entry-option"
                                    id="wd-website-url"
                                    className="form-check-input"
                                />
                                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    name="entry-option"
                                    id="wd-media-recordings"
                                    className="form-check-input"
                                />
                                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    name="entry-option"
                                    id="wd-student-annotation"
                                    className="form-check-input"
                                />
                                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    name="entry-option"
                                    id="wd-file-upload"
                                    className="form-check-input"
                                />
                                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-3 text-end">
                        <label className="form-label">Assign</label>
                    </div>
                    <div className="col-md-9">
                        <div className="border p-3">
                            <div>
                                <label htmlFor="wd-assign-to" className="form-label">Assign to</label><br />
                                <select id="wd-assign-to" className="form-select form-control mb-3" multiple>
                                    <option value="everyone" selected>Everyone</option>
                                    <option value="masters" selected>Masters</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="wd-due-date" className="form-label">Due</label><br />
                                <input
                                    type="datetime-local"
                                    id="wd-due-date"
                                    className="form-control"
                                    value={dueAt}
                                    onChange={(e) => setDueAt(e.target.value)}
                                />
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="wd-available-from" className="form-label">Available from</label><br />
                                    <input
                                        type="datetime-local"
                                        id="wd-available-from"
                                        className="form-control"
                                        value={availAt}
                                        onChange={(e) => setAvailAt(e.target.value)}
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="wd-available-until" className="form-label">Available until</label><br />
                                    <input
                                        type="datetime-local"
                                        id="wd-available-until"
                                        className="form-control"
                                        value={availUntil}
                                        onChange={(e) => setAvailUntil(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <button className="btn btn-secondary" onClick={onCancelClick}>Cancel</button>
                    <button className="btn btn-primary ms-2" onClick={onSaveClick}>Save</button>
                </div>
            </div>
        </div>
    );
}
