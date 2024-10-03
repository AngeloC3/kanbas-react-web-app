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

            <div className="mb-3">
                <div className="row mb-3">
                    <div className="col-md-3 text-end">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                    </div>
                    <div className="col-md-9">
                        <input id="wd-points" className="form-control" value={100} />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-3 text-end">
                        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    </div>
                    <div className="col-md-9">
                        <select id="wd-group" className="form-select form-control">
                            <option value="assignments" selected>ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-3 text-end">
                        <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                    </div>
                    <div className="col-md-9">
                        <select id="wd-display-grade-as" className="form-select form-control">
                            <option value="percentage" selected>Percentage</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-3 text-end">
                        <label className="form-label">Submission Type</label>
                    </div>
                    <div className="col-md-9">
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
                                    <option value="masters">Masters</option>
                                </select>
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
                    </div>
                </div>
            </div>

            <hr />
            <div className="text-end">
                <button className="btn btn-secondary me-2">Cancel</button>
                <button className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}