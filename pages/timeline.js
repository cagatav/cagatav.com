const Timeline = ({ experiences = [] }) => {
  return (
    <div className="timeline">
      {experiences.map((experience, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">{experience.title}</h3>
            <p className="timeline-date">{experience.date}</p>
            {experience.description && (
              <ul className="list-disc list-inside">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
