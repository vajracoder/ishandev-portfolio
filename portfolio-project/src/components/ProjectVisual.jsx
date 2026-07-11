/* Abstract, coded representation of each project's domain rather than a
   fabricated screenshot — quieter and more honest for concept work.
   Swap this out for a real <img> once live screenshots exist. */
export default function ProjectVisual({ glyph, Icon, featured }) {
  return (
    <div className={`project-visual project-visual--${glyph}`}>
      <div className="project-visual__grid" />
      <Icon size={featured ? 40 : 30} strokeWidth={1.4} className="project-visual__icon" />
      {glyph === "signal" && (
        <>
          <span className="ping ping--1" />
          <span className="ping ping--2" />
        </>
      )}
      {glyph === "flow" && (
        <div className="flow-steps">
          <span />
          <span />
          <span />
          <span />
        </div>
      )}
    </div>
  );
}
