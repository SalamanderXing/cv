interface Experience {
  from: string;
  to: string;
  supervisor?: string;
  description: string;
  location: string;
  type: string;
  title: string;
  skills?: string[];
}

// export default [
//   {
//     from: "September 2023",
//     to: "Now",
//     type: "Startup",
//     location: "Online",
//     title:
//       "Using state of the art prompting techniques with modern LLMs to create a vector-less retrieval system",
//     supervisor: null,
//     description: `
//       I'm working on a startup whose maing goal is to build an innovative importance ranking system. I am in charge of the AI and prompt engeneering.
//         `,
//     skills: [
//       "GPT-4",
//       "Fine-Tuning",
//       "Function-Calling",
//       "Prompt-engeering",
//       "LangChain",
//     ],
//   },
//   {
//     from: "March 2023",
//     to: "November 1st 2023",
//     type: "Master's Thesis",
//     location: "Amsterdam, Netherlands",
//     title: "Improving ELBO Computation in Graph Diffusion Models",
//     supervisor: "James Townsend",
//     description: `
//       My thesis consists on improving state-of-the-art methods for computing the Evidence lower bound
//       (ELBO) on graph with diffusion models, specifically it will be applied to molecule datasets.
//         `,
//     skills: ["Python", "JAX", "TPU"],
//   },
//   {
//     from: "March 2020",
//     to: "Now",
//     type: "Side-Job",
//     location: "Superprof",
//     title: "Private Tutor",
//     description: `
//         I've been giving private lessons in the field of machine learning, computer programming and deep learning.
//             Most of my customers at the moments are master's students from scientifical and technical universities.
//         `,
//     skills: ["Python", "PyTorch", "Keras", "Sklearn", "Numpy", "Pandas"],
//   },
//
//   {
//     from: "September 2022",
//     to: "February 2023",
//     type: "Research Internship",
//     location: "University of Amsterdam, Netherlands",
//     supervisor: "Assistant professor Iris Groen",
//     title:
//       "Mate: Modularize your deep learning projects to make them more reproducible",
//     description:
//       "Mate is a framework that allows to modularize deep learning projects, making them more reproducible and easier to maintain. I developed the framework, and on the documentation of the project.",
//     skills: ["Python", "JAX", "PyTorch", "Keras"],
//   },
//   {
//     from: "January 2022",
//     to: "June 2022",
//     type: "Research project",
//     title: "Extended GAN",
//     location: "Maastricht University, Netherlands",
//     supervisor: "Assistant professor Siamak Mehrkanoon",
//     description:
//       `Trying to modify Generative Adversarial Networks (GAN) to video predition, in particular in the context of weather nowcasting.
//       I explored different models such as my own version of CycleGANs, adapting it for regression problems.`,
//     skills: ["Python", "PyTorch"],
//   },
//   {
//     to: "September, 2021",
//     from: "January 2022",
//     type: "Research project",
//     location: "Maastricht University, Netherlands",
//     supervisor: "Assistant professor Siamak Mehrkanoon",
//     description:
//       `Together with my team we devided a version of the Graph Attention Networks (GAT),
//     trying to adapt it to handle high-dimensional data, like weather nowcasting videos.`,
//     title: "Convolutional GAT",
//     skills: ["Python", "PyTorch"],
//   },
//   {
//     from: "March 10",
//     to: "June 3, 2021",
//     type: "Internship/thesis",
//     location: "University of Padova (italy)",
//     supervisor: "professor Alberto Testolin",
//     title:
//       "Deep learning techniques for epileptic seizure prediction from electroencephalography",
//     description:
//       `The aim was to build a deep-learning model that predicts if a patient will have a seizure, given the scan of their electroencephalography (EEG).
//     I explored models such as biLSTSMs, ConvNets and Transformers`,
//     skills: ["Python", "PyTorch", "EEG"],
//   },
//   {
//     from: "January 20, 2020",
//     to: "March 31, 2020",
//     type: "Internship",
//     location:
//       "Center fro Mind/Brain Sciences (CIMeC) University of Trento, Italy",
//     description:
//       "I worked on a project that aimed at investigating (1) whether the topographical organization of the cortex can be explained by the anatomical adjacency between functionally and structurally connected brain areas, and (2) whether the individual efficiency in terms of topographical adjacency can predict behavioral efficiency (e.g.reaction times, IQ)",
//     supervisor: "Professor Moritz Wurm",
//     title: "Anatomical and functional network efficiency in the human brain",
//     skills: [
//       "fMRI",
//       "DTI (Diffusion Tensor Imaging)",
//       "Python",
//       "GraphX",
//     ],
//   },
//   {
//     from: "January 20, 2020",
//     to: "March 31, 2020",
//     type: "Internship",
//     location:
//       "Center fro Mind/Brain Sciences (CIMeC) University of Trento, Italy",
//     description:
//       `During my internship, I analyzed data from a neuroimaging (FMRI) study on the conceptual organization of actions.
//             In my first project, I learned key FMRI analysis steps such as design matrix generation, general linear models,
//         and crossmodal multivoxel pattern decoding.
//             I also tested how modifying the onset and duration of events affects decoding accuracy in a target brain area and at the whole brain level. In my second project,
//         I formalized a cognitive model of action concept structure and tested it using representational similarity analysis (RSA),
//         investigating whether it can explain variance in both the neural data and behavioral rating data.`,
//     supervisor: "Professor Moritz Wurm",
//     title: "Neural correlates of action concept structure",
//     skills: ["fMRI", "Python", "RSA", "TypeScript"],
//   },
// ] as Experience[];
//
export default [
  {
    from: "Sep 2023",
    to: "Now",
    type: "Startup",
    location: "Online",
    title: "LLMs as reliable reccomender systems",
    description:
      "Leading AI and prompt engineering in a startup focused on next-gen importance ranking.",
    skills: [
      "GPT-4",
      "Fine-Tuning",
      "Function-Calling",
      "Prompt-Engineering",
      "LangChain",
    ],
  },
  {
    from: "Mar 2023",
    to: "Nov 1, 2023",
    type: "Master's Thesis in AI",
    location: "UvA, Amsterdam",
    title: "Optimized ELBO in Graph Diffusion Models",
    description:
      "Enhanced Evidence LOwer Bound computation in graph diffusion models, applied to molecular datasets.",
    skills: ["Python", "JAX", "TPU"],
  },
  {
    from: "Mar 2020",
    to: "Now",
    type: "Side-Job",
    location: "Superprof.com",
    title: "AI/ML Tutor",
    description:
      "Providing specialized tutoring in machine learning and programming to master's students.",
    skills: ["PyTorch", "Keras", "Sklearn", "Numpy", "Pandas"],
  },
  {
    from: "Sep 2022",
    to: "Feb 2023",
    type: "Research Intern",
    location: "UvA, Amsterdam",
    title: "Mate: Modular Deep Learning",
    description:
      "Developed Mate, a framework for modular and reproducible deep learning projects.",
    skills: ["Python", "JAX", "PyTorch", "Keras", "MLOps"],
  },
  {
    from: "Jan 2022",
    to: "Jun 2022",
    type: "Research Project",
    location: "Maastricht",
    title: "GANs for Weather Nowcasting",
    description:
      "Adapted GANs for video prediction, focusing on weather nowcasting.",
    skills: ["Python", "PyTorch"],
  },
  {
    from: "Jan 2022",
    to: "Sep 2021",
    type: "Research Project",
    location: "Maastricht",
    title: "High-Dimensional ConvGAT",
    description:
      "Co-developed a Graph Attention Network variant for handling high-dimensional data.",
    skills: ["Python", "PyTorch"],
  },
  {
    from: "Mar 10, 2021",
    to: "Jun 3, 2021",
    type: "Research Internship/Thesis",
    location: "Padova, Italy",
    title: "Deep Learning for Epileptic Seizure Prediction",
    description:
      "Developed deep learning models, including biLSTMs and ConvNets, for predicting epileptic seizures.",
    skills: ["Python", "PyTorch", "EEG"],
  },
  {
    from: "Jan 20, 2020",
    to: "Mar 31, 2020",
    type: "Research Internship",
    location: "CIMeC, Trento, Italy",
    title: "Cortical Topographical Efficiency",
    description:
      "Investigated how cortical organization is influenced by anatomical and functional connectivity.",
    skills: ["fMRI", "DTI", "Python", "GraphX"],
  },
  // {
  //   from: "Jan 20, 2020",
  //   to: "Mar 31, 2020",
  //   type: "Research Internship",
  //   location: "CIMeC, Trento, Italy",
  //   title: "Neural Action Concept Structure",
  //   description:
  //     "Analyzed fMRI data to understand the neural basis of action concept organization.",
  //   skills: ["fMRI", "Python", "RSA", "TypeScript"],
  // },
] as Experience[];

export type { Experience };
