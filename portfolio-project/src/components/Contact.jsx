<div className="contact__links">
  <a
    href={`mailto:${PROFILE.email}`}
    className="contact__link"
  >
    <Mail size={16} /> {PROFILE.email}
  </a>

  <a
    href={PROFILE.social.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="contact__link"
  >
    <Linkedin size={16} /> LinkedIn
  </a>

  <a
    href={PROFILE.social.github}
    target="_blank"
    rel="noopener noreferrer"
    className="contact__link"
  >
    <Github size={16} /> GitHub
  </a>
</div>
