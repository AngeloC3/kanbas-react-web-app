import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module",
        description: "Create a NodeJS server with ExpressJS",
        course: "course",
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div id="wd-working-with-objects" className="mt-4">
            <h3>Working With Objects</h3>

            <div className="card my-3 p-3">
                <h4>Retrieving Assignment Object</h4>
                <a id="wd-retrieve-assignments" className="btn btn-primary mb-2" href={`${REMOTE_SERVER}/lab5/assignment`}>
                    Get Assignment
                </a>
                <hr />
                <h4>Retrieving Assignment Properties</h4>
                <a id="wd-retrieve-assignment-title" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                    Get Title
                </a>
            </div>


            <div className="card my-3 p-3">
                <h4>Modifying Assignment Properties</h4>
                <div className="mb-3 row">
                    <label htmlFor="wd-assignment-title" className="col-sm-3 col-form-label">Title</label>
                    <div className="col-sm-7">
                        <input
                            type="text"
                            className="form-control"
                            id="wd-assignment-title"
                            defaultValue={assignment.title}
                            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                        />
                    </div>
                    <div className="col-sm-2">
                        <a href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`} className="btn btn-primary w-100">Update Title</a>
                    </div>
                </div>
                
                <div className="mb-3 row">
                    <label htmlFor="wd-assignment-score" className="col-sm-3 col-form-label">Score</label>
                    <div className="col-sm-7">
                        <input
                            type="number"
                            className="form-control"
                            id="wd-assignment-score"
                            value={assignment.score}
                            onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value, 10) })}
                        />
                    </div>
                    <div className="col-sm-2">
                        <a href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`} className="btn btn-primary w-100">Update Score</a>
                    </div>
                </div>

                <div className="mb-3 row align-items-center">
                    <label htmlFor="wd-assignment-completed" className="col-sm-3 col-form-label">Completed</label>
                    <div className="col-sm-7">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="wd-assignment-completed"
                            checked={assignment.completed}
                            onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
                        />
                    </div>
                    <div className="col-sm-2">
                        <a href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`} className="btn btn-primary w-100">Update Completed</a>
                    </div>
                </div>
            </div>

            <div className="card my-3 p-3">
                <h4>Retrieving Module Objects</h4>
                <div className="mb-3">
                    <a href={`${MODULE_API_URL}`} className="btn btn-primary me-2">Get Module</a>
                    <a href={`${MODULE_API_URL}/name`} className="btn btn-primary">Get Module Name</a>
                </div>
            </div>

            <div className="card my-3 p-3">
                <h4>Modifying Module Properties</h4>
                <div className="mb-3 row">
                    <label htmlFor="wd-module-name" className="col-sm-3 col-form-label">Module Name</label>
                    <div className="col-sm-7">
                        <input
                            type="text"
                            className="form-control"
                            id="wd-module-name"
                            value={module.name}
                            onChange={(e) => setModule({ ...module, name: e.target.value })}
                        />
                    </div>
                    <div className="col-sm-2">
                        <a href={`${MODULE_API_URL}/name/${module.name}`} className="btn btn-primary w-100">Update Name</a>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-module-description" className="col-sm-3 col-form-label">Description</label>
                    <div className="col-sm-7">
                        <input
                            type="text"
                            className="form-control"
                            id="wd-module-description"
                            value={module.description}
                            onChange={(e) => setModule({ ...module, description: e.target.value })}
                        />
                    </div>
                    <div className="col-sm-2">
                        <a href={`${MODULE_API_URL}/description/${module.description}`} className="btn btn-primary w-100">Update Description</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
