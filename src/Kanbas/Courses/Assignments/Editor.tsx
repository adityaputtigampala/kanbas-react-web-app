export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <tr>
        <label htmlFor="wd-name">Assignment Name</label>
        </tr>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </textarea>
        <br />
        <table>
        <tr>
            <td align="right">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td >
              <input id="wd-points" value={100} />
            </td>
        </tr>
        <tr>
          <td align="right">
            <label htmlFor="wd-group"> Assignment Group: </label>
          </td>
            <td>
                <select id="wd-group">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
            </td>
        </tr>
        <tr>
            <td align="right">
                <label htmlFor="wd-display-grade-as"> Display Grade As: </label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
                </select>
            </td> 
        </tr>     
        <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-select-one-submission-type"> Submission Type: </label>
            </td>
            <td>
            <select id="wd-submission-type">
            <option value="Online">Online</option>
            </select>
            </td> 
        </tr>
        <tr>
            <td align="right" valign="top">
            <h5 id="wd-checkboxes"></h5>
                <label>Online Entry Options:</label><br/>
            </td>
            </tr>
            <td align="right">
                <input type="checkbox" name="text-entry" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>
                </td>
            
            <tr>
            <td align="right">

                <input type="checkbox" name="website-url" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website Url</label><br/>
            </td>
            </tr>
            <tr>
            <td align="right">
                <input type="checkbox" name="media-recordings" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
            </td>
            </tr>
            <tr>
                <td align="right">
                <input type="checkbox" name="student-annotations" id="wd-student-annotations"/>
                <label htmlFor="wd-student-annotation">Student Annotations</label><br/>
                </td>
                </tr>

                
                <tr>
                <td align="right">
                <input type="checkbox" name="File-Uploads" id="wd-file-uploads"/>
                <label htmlFor="wd-file-uploads">File Uploads</label><br/><br /><br />
                </td>
                </tr>
                


        
        <tr>
            <td align="right">
        <label htmlFor="wd-Assign-to">Assign To</label>
        </td>
        </tr>
        <tr>

        <td align="right">

        <input id="wd-assign-to" value="Everyone" /><br /><br />
        </td>
        </tr>
        <td align="right">
        <label htmlFor="wd-due-date"> Due </label>
        <tr >
        <input type="date"
            id="wd-due-date"
            value="2024-05-13"/><br/>
        </tr>
        </td>
        <tr></tr>
        <td align="right">
        <label htmlFor="wd-available-from"> Available from </label>
        
        <tr>
        <input type="date"
            id="wd-available-from"
            value="2024-05-06"/><br/>
            </tr>
            </td>
        <tr></tr>
        <td align="right">

        <label htmlFor="wd-available-until"> Until </label>
        <tr>
        <input type="date"
            id="wd-available-until"
            value="2024-05-20"/><br/>
            </tr>
        
        <br></br>
        <tr>
        <button id="wd-cancel">Cancel</button>
        <button id="wd-save">Save</button>
        </tr>
        </td>
        </table>
      </div>
  );}
  