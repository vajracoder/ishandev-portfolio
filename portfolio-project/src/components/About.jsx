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
            I'm Ishan Shukla, a B.Tech Computer Science Engineering student and
            passionate full-stack developer with a strong interest in building
            practical, user-focused digital solutions. I work with technologies
            like React.js, JavaScript, Node.js, Express.js, and MongoDB, and enjoy
            turning ideas into functional web applications.
          </p>

          <p>
            Beyond development, I serve as the Technical Team Lead of the Abhyudaya
            Club, where I contribute to technology, event organization, and creative
            initiatives. I'm constantly exploring new technologies, solving real-world
            problems, and improving my skills through hands-on projects.
          </p>

          <p>
            I believe in learning by building, taking on challenges, and creating
            technology that makes a meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
}
