import "./App.css";
import experiences from "./experiences";
import education from "./education";
import ExperienceList from "./ExperienceView";
import EducationList from "./EducationView";
import ProgrammingLanguages from "./ProgrammingLanguages";

function App() {
    const links = [
        {
            icon_name: "fa-github",
            url: "https://github.com/salamanderxing",
        },
        {
            icon_name: "fa-globe",
            url: "https://salamanderxing.github.io/",
        },
        {
            icon_name: "fa-envelope",
            url: "mailto:g.zani@uva.nl",
        },
        {
            icon_name: "fa-chalkboard-teacher",
            url: "https://www.superprof.it/magistrale-intelligenza-artificiale-offre-lezioni-aiuto-progetti-python-machine-learning-deep-learning.html",
        },
    ];
    return (
        <>
            <div className="page">
                <div style={{ textAlign: "center" }}>
                    <h1>Giulio Zani</h1>
                </div>
                <div className="icon-container" style={{ marginBottom: '50px' }}>
                    {
                        links.map((link, i) => <a key={i} href={link.url} target="_blank">
                            <i className={`fa ${link.icon_name} fa-2x`}></i>
                        </a>)

                    }
                </div>
                <div style={{ width: '100%', paddingTop: '100' }}>
                    <img src="profile.jpeg" style={{ marginRight: '65px', shapeOutside: "circle()", width: '400px', height: "400px", borderRadius: '50%', objectFit: 'cover', float: 'left', margin: "margin: 0 0px 0px 0" }} />
                    <p
                        style={{
                            textAlign: "justify",
                        }}
                    >

                        I am a highly motivated AI master's student with a passion for
                        cutting-edge research in computer science and machine learning. With
                        a diverse range of experiences, from working on deep learning models
                        for epileptic seizure prediction to analyzing FMRI data on action
                        concept structure, I am equipped with a well-rounded skillset and a
                        strong drive to tackle complex problems. My private teaching
                        experience, combined with my technical and creative abilities, make
                        me a strong candidate for research positions and master thesis
                        projects. I am also deeply passionate about open source and enjoy
                        exploring new fields like graphics programming and biology. In my
                        free time, I enjoy collaborating with others and working on
                        challenging projects with a positive, sociable demeanor.
                    </p>
                </div>
                <h2>Experience</h2>
                <ExperienceList experiences={experiences.slice(0, 2)} />
            </div>
            <div className="page">
                <ExperienceList experiences={experiences.slice(2)} />
            </div>
            <div className="page">
                <h2>Skills</h2>
                <ul>
                    <li><strong>Passion</strong> for computer science and technology</li>
                    <li><strong>Active</strong> and physically fit, enjoys outdoor activities</li>
                    <li>
                        Strong interpersonal skills, ability to make friends and <strong>build
                            relationships</strong> easily
                    </li>
                    <li>Good <strong>problem-solving</strong> and critical thinking skills</li>


                    <li><strong>Love of learning</strong> and continuously developing skills</li>
                    <li>Excellent communication and interpersonal skills.</li>
                    <li>Ability to work <strong>independently</strong> and as part of a <strong>team.</strong></li>
                </ul>
                <h2>Spoken Languages</h2>
                <ul>
                    <li><strong>English:</strong> Fluent</li>
                    <li><strong>Italian:</strong> Native</li>
                    <li><strong>German:</strong> Fluent</li>
                </ul>
                <ProgrammingLanguages />
            </div>
            <div className="page">
                <h2>Education</h2>
                <EducationList education={education} />
            </div>
        </>
    );
}

export default App;
