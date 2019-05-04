import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div className="container-fluid" style={{ margin: "2em 0" }}>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p style={{ fontFamily: "MuseoW01-700", fontSize: "57px", color: "#1A4C66" }}>Joy <span style={{ color: "#2B9ED9" }}>Swimming</span> Inc.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;