// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li>
      <p>{event.summary}</p>
      <p>{event.start.dateTime}</p>
      <p>{event.location}</p>
      {showDetails ? (
        <div>
          <p className="details">{event.description}</p>
          <button>Hide Details</button>
        </div>
      ) : (
        <button onClick={setShowDetails}>Show Details</button>
      )} 
    </li>
  );
}

export default Event;