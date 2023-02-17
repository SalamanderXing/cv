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
        to: "Present",
        title: "Master in Artificial Intelligence",
        institution: "Maastricht University, Netherlands",
        location: "Maastricht, Netherlands",
    },
    {
        from: "September 2018",
        to: "June 2021",
        title: "Bachelor in Psychology",
        institution: "University of Padua",
        notes: `
        I got credits for a Minor in Computer Science.
        Including courses in computer algorithms, computer programming,
            and a master's course in Deep Learning (GPA does not include them)`,
        location: "Padova, Italy",
        gpa: "24.95/30",
    },
    {
        from: "September 2016",
        to: "December 2017",
        title: "Courses in Physics and Mathematics",
        institution: "University of Leipzig",
        notes: `
            I got 75 ects credits for 3 courses in Theoretical Physics, 3 in Experimental Physics, and 3 in Mathematics.
        `,
        location: "Leipzig, Germany"
    },
    {
        from: "September 2011",
        to: "June 2016",
        title: "Technical High School in Computer Science",
        institution: "Technical Institute Guglielmo Marconi",
        location: "Rovereto (TN), Italy"
    }


] as Education[];
export type { Education };
