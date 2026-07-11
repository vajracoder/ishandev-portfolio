import SectionEyebrow from "./SectionEyebrow.jsx";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner about__inner">
        <div>
          <SectionEyebrow>About</SectionEyebrow>
          <h2 className="section__title">
            Computer science, applied to things people actually use.
          </h2>
        </div>
        <div className="about__body">
          <p>
            I'm a Computer Science Engineering student who ended up specializing in
            full-stack and real-time web development mostly by chasing problems I could
            see around me — a hostel's paperwork, a club's outdated site, a campus with
            no easy way for people on the same floor to talk to each other without
            a phone number. Each project below started as one of those.
          </p>
          <p>
            I like the layer where an interface meets a live connection — WebSockets,
            peer-to-peer data channels, approval workflows that have to hold state
            correctly across multiple people. That's the part of the stack I keep
            gravitating back to, and where I want to keep building.
          </p>
        </div>
      </div>
    </section>
  );
}
