// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const date = new Date(event.start.dateTime);
  const formattedDate = date.toLocaleDateString('en-US', {timeZone: 'UTC'});
  return (
    <li>
      <p>{event.summary}</p>
      <p>{formattedDate}</p>
      <p>{event.location}</p>
      {showDetails ? (
        <div>
          <p className="details">{event.description}</p>
          <button onClick={() => setShowDetails(false)}>Hide Details</button>
        </div>
      ) : (
        <button onClick={() => setShowDetails(true)}>Show Details</button>
      )} 
    </li>
  );
}

export default Event;