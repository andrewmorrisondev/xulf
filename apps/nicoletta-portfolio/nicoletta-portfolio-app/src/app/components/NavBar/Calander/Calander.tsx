import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { calander } from './calander-data';  // Import the static data

// Update the CalendarEvent type to allow link to be null
type CalendarEvent = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  link: string | null; // Allow link to be null
};

const StyledCalendarTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const StyledCalendarDate = styled.p`
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 0.5rem;
`;

const StyledCalendarTime = styled.p`
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 0.5rem;
`;

const StyledCalendarLocation = styled.p`
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 1rem;
`;

const StyledCalendarDescription = styled.p`
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 1.5rem;
`;

const StyledLink = styled.a`
  font-size: 1rem;
  text-decoration: underline;
  color: #ffcccc;
  transition: color 0.2s ease;

  &:hover {
    color: #ff6666;
  }
`;

const CalendarContainer = styled.div`
  max-height: calc(40em - 4rem); /* Adjust as needed */
  overflow-y: auto;
  box-sizing: border-box;

  /* Hide scrollbar for WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CalendarItem = styled(motion.div)`
  color: white;
`;

// CalendarInner component
export const CalendarInner: React.FC = () => {
  const [calendarData] = useState<CalendarEvent[]>(calander); // Set static calendar events

  return (
    <CalendarContainer>
      {calendarData.map((event: CalendarEvent, index) => (
        <CalendarItem
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <StyledCalendarTitle>{event.title}</StyledCalendarTitle>
          <StyledCalendarDate><strong>Date:</strong> {event.date}</StyledCalendarDate>
          <StyledCalendarTime><strong>Time:</strong> {event.time}</StyledCalendarTime>
          <StyledCalendarLocation><strong>Location:</strong> {event.location}</StyledCalendarLocation>
          <StyledCalendarDescription>{event.description}</StyledCalendarDescription>
          {event.link && (
            <StyledLink href={event.link} target="_blank" rel="noopener noreferrer">
              More info
            </StyledLink>
          )}
        </CalendarItem>
      ))}
    </CalendarContainer>
  );
};
