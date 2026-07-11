import { EVENTS } from "../data/portfolioData.js";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function Events() {
  return (
    <section id="events" className="section events">
      <div className="section__inner">
        <SectionEyebrow>Events &amp; Achievements</SectionEyebrow>
        <h2 className="section__title">Initiatives I've helped run</h2>

        <div className="events__grid">
          {EVENTS.map((ev) => {
            const Icon = ev.icon;
            return (
              <div className="event-card" key={ev.name}>
                <Icon size={22} strokeWidth={1.5} className="event-card__icon" />
                <span className="event-card__type">{ev.type}</span>
                <h3 className="event-card__title">{ev.name}</h3>
                <p className="event-card__desc">{ev.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
