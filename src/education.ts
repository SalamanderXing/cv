interface Education {
  from: string;
  to: string;
  title: string;
  institution: string;
  location: string;
  notes?: string;
  gpa: string;
}

export default [
  {
    from: "August 2021",
    to: "October 2023",
    title: "Master in Artificial Intelligence",
    institution: "Maastricht University, Netherlands",
    location: "Maastricht, Netherlands",
  },
  {
    from: "September 2018",
    to: "June 2021",
    title: "Minor in Computer Science",
    institution: "University of Padua",
    notes: "",
    location: "Padova, Italy",
    gpa: "24.95/30",
  },
  {
    from: "September 2018",
    to: "June 2021",
    title: "Bachelor in Psychology",
    institution: "University of Padua",
    notes: "",
    location: "Padova, Italy",
    gpa: "24.95/30",
  },
  {
    from: "September 2016",
    to: "December 2017",
    title: "Courses in Physics and Mathematics",
    institution: "University of Leipzig",
    notes: "",
    location: "Leipzig, Germany",
  },
  {
    from: "September 2011",
    to: "June 2016",
    title: "Technical High School in Computer Science",
    institution: "Technical Institute Guglielmo Marconi",
    location: "Rovereto (TN), Italy",
  },
] as Education[];
export type { Education };
