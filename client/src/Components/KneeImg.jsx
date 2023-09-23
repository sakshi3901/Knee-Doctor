export default function KneeImg() {
  return (
    <div style={{ position: "relative", height: "360px" }}>
      <img src="assets/knee.jpeg" alt="knee" className="knee" />
      <div className="knee-img-content">
        <div style={{ fontSize: "20px", marginBottom: "1rem" }}>
          <b>Home</b> <img src="assets/right-arr.svg" alt="Arrow" />
          <b>Treatments</b> <img src="assets/right-arr.svg" alt="Arrow" />
          <b>Orthopaedics</b> <img src="assets/right-arr.svg" alt="Arrow" />
          <b>Knee Replacement</b>
        </div>
        <h1>Total Knee Replacement</h1>
        <p style={{ fontSize: "17px", margin: "1.5rem 0" }}>
          Total knee replacement is a surgery to remove and replace the whole
          damaged knee joint with an artifical joint.
        </p>
        <button className="enquiry-btn">Enquiry Now</button>
      </div>
    </div>
  );
}
