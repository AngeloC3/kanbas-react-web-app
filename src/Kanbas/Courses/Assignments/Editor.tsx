export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input id="wd-name" className="form-control" value="A1" />
            </div>

            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea id="wd-description" className="form-control" rows={6}>
                    The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing 
                    page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas 
                    application Links to all relevant source code repositories The Kanbas application should include a link to navigate back
                    to the landing page
                </textarea>
            </div>

            <div className="table-responsive mb-4">
                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <td className="text-end align-top">
                                <label htmlFor="wd-points" className="form-label">Points</label>
                            </td>
                            <td>
                                <input id="wd-points" className="form-control" value={100} />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-end align-top">
                                <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                            </td>
                            <td>
                                <select id="wd-group" className="form-select form-control">
                                    <option value="assignments" selected>ASSIGNMENTS</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-end align-top">
                                <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                            </td>
                            <td>
                                <select id="wd-display-grade-as" className="form-select form-control">
                                    <option value="percentage" selected>Percentage</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-end align-top">
                                <label className="form-label">Submission Type</label>
                            </td>
                            <td>
                                <div className="border p-3">
                                    <select id="wd-submission-type" className="form-select form-control mb-3">
                                        <option value="online" selected>Online</option>
                                    </select>
                                    <label className="form-label">Online Entry Options</label>
                                    <div className="form-check">
                                        <input type="checkbox" name="entry-option" id="wd-text-entry" className="form-check-input" />
                                        <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" name="entry-option" id="wd-website-url" className="form-check-input" />
                                        <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" name="entry-option" id="wd-media-recordings" className="form-check-input" />
                                        <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" name="entry-option" id="wd-student-annotation" className="form-check-input" />
                                        <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" name="entry-option" id="wd-file-upload" className="form-check-input" />
                                        <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-end align-top">
                                <label className="form-label">Assign</label>
                            </td>
                            <td>
                                <div className="border p-3">
                                    <div>
                                        <label htmlFor="wd-assign-to" className="form-label">Assign to</label><br />
                                        <input type="text" id="wd-assign-to" className="form-control" />
                                    </div>
                                    <div>
                                        <label htmlFor="wd-due-date" className="form-label">Due</label><br />
                                        <input type="date" id="wd-due-date" className="form-control" value="2024-05-13" />
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <label htmlFor="wd-available-from" className="form-label">Available from</label><br />
                                            <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="wd-available-until" className="form-label">Until</label><br />
                                            <input type="date" id="wd-available-until" className="form-control" value="2024-05-20" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="text-end">
                <button className="btn btn-secondary me-2">Cancel</button>
                <button className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}
