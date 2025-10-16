export interface ScheduleItem {
  id: string;
  day: 'Day 1' | 'Day 2';
  time: string;
  title: string;
  speaker?: string;
  type: 'keynote' | 'panel' | 'workshop' | 'networking' | 'awards' | 'exhibition';
  location: string;
  description: string;
}

export const schedule: ScheduleItem[] = [
  // Day 1 - Ideation, Manufacturing & Distribution
  {
    id: "d1-1",
    day: "Day 1",
    time: "08:00 - 09:00",
    title: "Registration & Welcome Coffee",
    type: "networking",
    location: "Main Lobby",
    description: "Check-in, networking, and light refreshments"
  },
  {
    id: "d1-2",
    day: "Day 1",
    time: "09:00 - 09:30",
    title: "Opening Ceremony",
    speaker: "Dr. Sarah Chen, Conference Chair",
    type: "keynote",
    location: "Grand Auditorium",
    description: "Welcome address and conference overview"
  },
  {
    id: "d1-3",
    day: "Day 1",
    time: "09:30 - 11:00",
    title: "Sustainable Ideation & Design Thinking",
    speaker: "Prof. Michael Green",
    type: "keynote",
    location: "Grand Auditorium",
    description: "Exploring eco-centric design methodologies and innovation frameworks"
  },
  {
    id: "d1-4",
    day: "Day 1",
    time: "11:00 - 11:30",
    title: "Coffee Break & Networking",
    type: "networking",
    location: "Exhibition Hall",
    description: "Network with speakers and attendees"
  },
  {
    id: "d1-5",
    day: "Day 1",
    time: "11:30 - 13:00",
    title: "Green Manufacturing Technologies",
    speaker: "Dr. Emma Rodriguez",
    type: "panel",
    location: "Conference Room A",
    description: "Panel discussion on sustainable production methods and clean manufacturing"
  },
  {
    id: "d1-6",
    day: "Day 1",
    time: "13:00 - 14:00",
    title: "Lunch Break",
    type: "networking",
    location: "Campus Cafeteria",
    description: "Catered sustainable lunch"
  },
  {
    id: "d1-7",
    day: "Day 1",
    time: "14:00 - 15:30",
    title: "Supply Chain Sustainability & Distribution",
    speaker: "Marcus Johnson",
    type: "workshop",
    location: "Workshop Hall",
    description: "Hands-on session on optimizing eco-friendly logistics"
  },
  {
    id: "d1-8",
    day: "Day 1",
    time: "15:30 - 17:00",
    title: "Project Exhibitions - Session 1",
    type: "exhibition",
    location: "Exhibition Hall",
    description: "View innovative green tech projects and prototypes"
  },
  {
    id: "d1-9",
    day: "Day 1",
    time: "17:00 - 18:00",
    title: "Day 1 Networking Reception",
    type: "networking",
    location: "Rooftop Terrace",
    description: "Evening networking with refreshments"
  },
  
  // Day 2 - Ethics, Policy, Waste Management, Awards
  {
    id: "d2-1",
    day: "Day 2",
    time: "08:30 - 09:00",
    title: "Morning Registration",
    type: "networking",
    location: "Main Lobby",
    description: "Check-in for Day 2 attendees"
  },
  {
    id: "d2-2",
    day: "Day 2",
    time: "09:00 - 10:30",
    title: "Ethics in Green Technology",
    speaker: "Dr. Priya Sharma",
    type: "keynote",
    location: "Grand Auditorium",
    description: "Exploring ethical frameworks for sustainable innovation"
  },
  {
    id: "d2-3",
    day: "Day 2",
    time: "10:30 - 11:00",
    title: "Coffee Break",
    type: "networking",
    location: "Exhibition Hall",
    description: "Refreshments and networking"
  },
  {
    id: "d2-4",
    day: "Day 2",
    time: "11:00 - 12:30",
    title: "Policy & Regulation in Sustainability",
    speaker: "Panel of Industry Leaders",
    type: "panel",
    location: "Conference Room A",
    description: "Discussion on environmental policies and compliance"
  },
  {
    id: "d2-5",
    day: "Day 2",
    time: "12:30 - 13:30",
    title: "Lunch Break",
    type: "networking",
    location: "Campus Cafeteria",
    description: "Sustainable catered lunch"
  },
  {
    id: "d2-6",
    day: "Day 2",
    time: "13:30 - 15:00",
    title: "Circular Economy & Waste Management",
    speaker: "Dr. James Wilson",
    type: "workshop",
    location: "Workshop Hall",
    description: "Practical approaches to waste reduction and recycling"
  },
  {
    id: "d2-7",
    day: "Day 2",
    time: "15:00 - 16:00",
    title: "Project Exhibitions - Session 2",
    type: "exhibition",
    location: "Exhibition Hall",
    description: "Final viewing of green tech innovations"
  },
  {
    id: "d2-8",
    day: "Day 2",
    time: "16:00 - 17:00",
    title: "Awards Ceremony",
    speaker: "Conference Committee",
    type: "awards",
    location: "Grand Auditorium",
    description: "Recognition of outstanding projects and contributions"
  },
  {
    id: "d2-9",
    day: "Day 2",
    time: "17:00 - 17:30",
    title: "Closing Remarks",
    speaker: "Dr. Sarah Chen",
    type: "keynote",
    location: "Grand Auditorium",
    description: "Conference wrap-up and future vision"
  }
];
