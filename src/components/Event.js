// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  //const date = new Date(event.start.dateTime);
  //const formattedDate = date.toLocaleString('en-US', {timeZone: 'UTC'});
  
  return (
    <li className="event">
      <h2>{event.summary}</h2>
      <p>{event.location}</p>
      <p>{new Date(event.start.dateTime).toUTCString()}</p>
      {showDetails ? (
        <div>
          <p className="details">{event.description}</p>
          <button className="details-btn" onClick={() => setShowDetails(false)}>Hide Details</button>
        </div>
      ) : (
        <button className="details-btn" onClick={() => setShowDetails(true)}>Show Details</button>
      )} 
    </li>
  );
}

export default Event;