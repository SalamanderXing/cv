interface Experience {
    from: string;
    to: string;
    supervisor?: string;
    description: string;
    location: string;
    type: string;
    title: string;
    technologies?: string[];
}

export default [
    {
        from: "March 2020",
        to: "Now",
        type: "Side-Job",
        location: "Superprof (Italian website)",
        title:
            "Private Tutor",
        description: `
        I've been giving private lessons in the field of machine learning, computer programming and deep learning.
            Most of my customers at the moments are master's students from scientifical and technical universities.
        `,
        technologies: ["Python", "PyTorch", "Keras", "Sklearn", "Numpy", "Pandas"],
    },

    {
        from: "September 2022",
        to: "February 2023",
        type: "Research Internship",
        location: "University of Amsterdam, Netherlands",
        supervisor: "Assistant professor Iris Groen",
        title:
            "Mate: Modularize your deep learning projects to make them more reproducible",
        description:
            "Mate is a framework that allows to modularize deep learning projects, making them more reproducible and easier to maintain. I developed the framework, and on the documentation of the project.",
        technologies: ["Python", "JAX", "PyTorch", "Keras"],
    },
    {
        from: "January 2022",
        to: "June 2022",
        type: "Research project",
        title: "Extended GAN",
        location: "Maastricht University, Netherlands",
        supervisor: "Assistant professor Siamak Mehrkanoon",
        description:
            `Trying to modify Generative Adversarial Networks (GAN) to video predition, in particular in the context of weather nowcasting.
      I explored different models such as my own version of CycleGANs, adapting it for regression problems.`,
        technologies: ["Python", "PyTorch"],
    },
    {
        to: "September, 2021",
        from: "January 2022",
        type: "Research project",
        location: "Maastricht University, Netherlands",
        supervisor: "Assistant professor Siamak Mehrkanoon",
        description: `Together with my team we devided a version of the Graph Attention Networks (GAT),
    trying to adapt it to handle high-dimensional data, like weather nowcasting videos.`,
        title: "Convolutional GAT",
        technologies: ["Python", "PyTorch"],
    },
    {
        from: "March 10",
        to: "June 3, 2021",
        type: "Internship/thesis",
        location: "University of Padova (italy)",
        supervisor: "professor Alberto Testolin",
        title:
            "Deep learning techniques for epileptic seizure prediction from electroencephalography",
        description:
            `The aim was to build a deep-learning model that predicts if a patient will have a seizure, given the scan of their electroencephalography (EEG).
    I explored models such as biLSTSMs, ConvNets and Transformers`,
        technologies: ["Python", "PyTorch", "EEG"],
    },
    {
        from: "January 20, 2020",
        to: "March 31, 2020",
        type: "Internship",
        location:
            "Center fro Mind/Brain Sciences (CIMeC) University of Trento, Italy",
        description:
            "I worked on a project that aimed at investigating (1) whether the topographical organization of the cortex can be explained by the anatomical adjacency between functionally and structurally connected brain areas, and (2) whether the individual efficiency in terms of topographical adjacency can predict behavioral efficiency (e.g.reaction times, IQ)",
        supervisor: "Professor Moritz Wurm",
        title: "Anatomical and functional network efficiency in the human brain",
        technologies: ["fMRI", "DTI (Diffusion Tensor Imaging)", "Python", "GraphX"],
    },
    {
        from: "January 20, 2020",
        to: "March 31, 2020",
        type: "Internship",
        location:
            "Center fro Mind/Brain Sciences (CIMeC) University of Trento, Italy",
        description:
            `During my internship, I analyzed data from a neuroimaging (FMRI) study on the conceptual organization of actions.
            In my first project, I learned key FMRI analysis steps such as design matrix generation, general linear models,
        and crossmodal multivoxel pattern decoding.
            I also tested how modifying the onset and duration of events affects decoding accuracy in a target brain area and at the whole brain level. In my second project,
        I formalized a cognitive model of action concept structure and tested it using representational similarity analysis (RSA),
        investigating whether it can explain variance in both the neural data and behavioral rating data.`,
        supervisor: "Professor Moritz Wurm",
        title: "Neural correlates of action concept structure",
        technologies: ["fMRI", "Python", "RSA", "TypeScript",],
    },
] as Experience[];

export type { Experience };
