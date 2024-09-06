export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web aoolication running on Netifly. The landing 
          page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas 
          application Links to all relecant source code repositories The Kanbas application should include a link to navigate back
          to the landing page
        </textarea>
        <br />
        <table style={{ borderSpacing: "0 1em"}}>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                    <input id="wd-points" value={100} />
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                    <select id="wd-group">
                        <option value="assignments" selected>ASSIGNMENTS</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-display-grade-as">Display Grade as</label>
                </td>
                <td>
                    <select id="wd-display-grade-as">
                        <option value="percentage" selected>Percentage</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-submission-type">
                        <option value="online" selected>Online</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right" valign="top"></td>
                <td>
                    <label>Online Entry Options</label><br/>

                    <input type="checkbox" name="entry-option" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br/>

                    <input type="checkbox" name="entry-option" id="wd-website-url"/>
                    <label htmlFor="wd-website-url">Website URL</label><br/>

                    <input type="checkbox" name="entry-option" id="wd-media-recordings"/>
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                    <input type="checkbox" name="entry-option" id="wd-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                    
                    <input type="checkbox" name="entry-option" id="wd-file-upload"/>
                    <label htmlFor="wd-file-upload">File Uploads</label><br/>
                </td>
            </tr>
            <tr>
                <td align="right" valign="top"></td>
                <td>
                    <label htmlFor="wd-due-date">Due</label><br/>
                    <input type="date" id="wd-due-date" value="2024-05-13" />
                </td>
            </tr>
            <tr>
                <td align="right" valign="top"></td>
                <td>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: '.2em' }}>
                            <label htmlFor="wd-available-from">Available from</label><br/>
                            <input type="date" id="wd-available-from" value="2024-05-06" />
                        </div>
                        <div>
                            <label htmlFor="wd-available-until">Until</label><br/>
                            <input type="date" id="wd-available-until" value="2024-05-20" />
                        </div>
                    </div>
                </td>
            </tr>
        </table>
        <hr />
        <div style={{ textAlign: 'right' }}>
            <button style={{ marginRight: '.2em' }}>Cancel</button>
            <button>Save</button>
        </div>
        
    </div>
);}
