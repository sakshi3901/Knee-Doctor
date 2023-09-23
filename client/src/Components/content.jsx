import Texts from "./texts";
import FAQ from "./Faq";
import Story from "./story";
import Help from "./Help";

export default function Content() {
  const faqData = [
    {
      question: "How do I know the clinic I am searching is verified?",
      answer:
        "auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate",
    },
    {
      question:
        "I can't travel alone so can some family member or friend of mine accompany me?",
      answer:
        "auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate",
    },
    {
      question:
        "Can I see doctor before I decide and ehat about my post recovery?",
      answer:
        "auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate",
    },
    {
      question:
        "How do I share my reports and medical cases with the clinic of my choice?",
      answer:
        "auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate",
    },
  ];

  return (
    <div className="contents">
      <div>
        <div className="con" id="eligibility">
          <h2>Eligibility For Treatment</h2>
          <Texts />
        </div>
        <div className="con" id="preparation">
          <h2>Preparation Before Treatment</h2>
          <Texts />
        </div>
        <div className="con" id="about">
          <h2>About Treatment</h2>
          <Texts />
        </div>
        <div className="con" id="post-care">
          <h2>Post-Treatment Care Treatment</h2>
          <Texts />
        </div>
        <div className="con" id="recovery">
          <h2>Treatment Recovery Tips</h2>
          <Texts />
        </div>
        <div className="con">
          <h2>Treatment FAQs</h2>
          {faqData.map((item, index) => (
            <FAQ key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className="con" id="patient">
          <h2>Patient Stories & Videos</h2>
          <div className="story-div">
            <Story />
            <Story />
          </div>
        </div>
      </div>
      <Help />
    </div>
  );
}
