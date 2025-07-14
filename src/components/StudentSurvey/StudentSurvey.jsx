import React, { useState } from 'react';
import './StudentSurvey.css';

const StudentSurvey = () => {
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected) {
      setSubmitted(true);
    }
  };

  return (
    <div className="student-survey-container">
      <h2 className="student-survey-title">نظرسنجی دانشجویان</h2>
      {submitted ? (
        <div className="student-survey-thankyou">✅ از شرکت شما در نظرسنجی متشکریم!</div>
      ) : (
        <form className="student-survey-form" onSubmit={handleSubmit}>
          <p className="student-survey-question">در مورد کدام دوره نظر دارید؟</p>
          <div className="student-survey-options">
            {[
              { value: 'Network+', label: 'Network+' },
              { value: 'Cisco (CCNA)', label: 'Cisco (CCNA)' },
              { value: 'MikroTik', label: 'MikroTik' },
              { value: 'SANS', label: 'SANS' },
              { value: 'PWK', label: 'PWK' },
              { value: 'NEW', label: 'NEW' },
            ].map((course) => (
              <label key={course.value}>
                <input
                  type="radio"
                  name="topic"
                  value={course.value}
                  checked={selected === course.value}
                  onChange={handleChange}
                />
                {course.label}
              </label>
            ))}
          </div>
          <button className="student-survey-submit" type="submit" disabled={!selected}>
            ثبت نظر
          </button>
        </form>
      )}
    </div>
  );
};

export default StudentSurvey; 