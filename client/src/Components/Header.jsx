export default function Header() {
  return (
    <div className="header">
      <img src="assets/logo.jpg" alt="logo" className="logo" />
      <img src="assets/docsym.png" alt="Symbol" className="doc-Symbol" />
      <div className="icon-div">
        <img src="assets/message.png" alt="Symbol" className="head-icons" />
        <div className="icon-text">
          <p>Second Medical Option</p>
          <b>Book Consultation</b>
        </div>
      </div>
      <div className="icon-div">
        <img src="assets/call.png" alt="Symbol" className="head-icons" />
        <div className="icon-text">
          <p>Call Us On</p>
          <b>985 896 2222</b>
        </div>
      </div>
      <div className="icon-div">
        <img src="assets/email.png" alt="Symbol" className="head-icons" />
        <div className="icon-text">
          <p>Email Us On</p>
          <b>info@mediretreats.co</b>
        </div>
      </div>

      <div class="dropdown">
        <button
          class="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="assets/uk.png" style={{ height: "2rem" }} />
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item active" href="#">
              <img src="assets/india.png" style={{ height: "2rem" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
