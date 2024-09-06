export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <div style={{ display: 'flex', marginBottom: "1em" }}>
        <button style={{ marginRight: '.2em' }}>Unpublish</button>
        <button>Publish</button>
      </div>
      <div>
        <button style={{ display: 'block' }}>Import Existing Content</button>
        <button style={{ display: 'block' }}>Import from Commons</button>
        <button style={{ display: 'block' }}>Choose Home Page</button>
        <button style={{ display: 'block' }}>View Course Stream</button>
        <button style={{ display: 'block' }}>New Announcement</button>
        <button style={{ display: 'block' }}>New Analytics</button>
        <button style={{ display: 'block' }}>View Course Notifications</button>
      </div>
    </div>
  );
}
