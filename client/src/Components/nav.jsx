import Content from "./content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Nav() {
  return (
    <div>
      <div className="nav">
        <a href="#overview">Overview</a>
        <a href="#eligibility">Eligibility</a>
        <a href="#preparation">Preparation</a>
        <a href="#about">About Treatment</a>
        <a href="#post-care">Post-Treatment Care</a>
        <a href="#recovery">Recovery Tips</a>
        <a href="#faq">FAQs</a>
        <a href="#patient">Patient Stories</a>
      </div>
      <hr />
      <div className="mar">
        <div className="overview" id="overview">
          <div>
            <h2>Treatment Overview</h2>
            <p>
              dolor morbi non arcu risus quis varius quam quisque id diam vel
              quam elementum pulvinar etiam non quam lacus suspendisse
            </p>
            <p>
              velit egestas dui id ornare arcu odio ut sem nulla pharetra diam
              sit amet nisl suscipit adipiscing bibendum est ultricies integer
              quis auctor elit sed vulputate mi sit amet mauris commodo quis
              imperdiet massa tincidunt nunc pulvinar sapien et ligula
              ullamcorper malesuada proin libero nunc consequat interdum varius
              sit amet
            </p>
            <p>
              auctor elit sed vulputate mi sit amet mauris commodo quis
              imperdiet massa tincidunt nunc pulvinar sapien et ligula
              ullamcorper malesuada proin libero nunc consequat interdum varius
              sit amet mattis vulputate
            </p>
          </div>
          <LazyLoadImage
            src="assets/knee-pain-feature.jpg"
            alt="patient"
            width={"95%"}
            effect="blur"
          ></LazyLoadImage>
        </div>
        <Content />
      </div>
    </div>
  );
}
