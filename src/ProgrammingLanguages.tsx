export default () => {
  return (
    <>
      <h2>Programming Languages</h2>
      <table>
        <tbody>
          <tr>
            <td style={{ width: "50%", paddingRight: 10 }}>
              <h3>Python</h3>
              <p>The librairies I use the most are:</p>
              <div className="skills-pill-container">
                {["Jax/Flax", "PyTorch/PyTorch Lightning", "Tensorflow/Keras"]
                  .map((pill, i) => (
                    <span key={i} className="pill-span">{pill}</span>
                  ))}
              </div>
              <p>And the standard data science stack:</p>
              <div className="skills-pill-container">
                {["Numpy", "Pandas", "Scikit-learn", "Scipy", "Matplotlib"].map(
                  (pill, i) => <span key={i} className="pill-span">{pill}
                  </span>,
                )}
              </div>
            </td>
            <td style={{ width: "50%", paddingLeft: 10 }}>
              <h3>JavaScript/TypeScript</h3>
              <p>Current setup when I have to do something front-end:</p>
              <div className="skills-pill-container">
                <div className="pill-span">TypeScript</div>
                <div className="pill-span">React</div>
                <div className="pill-span">Vite</div>
              </div>
              <p>
                Computer graphics libraries which I use to display algorithms
                (hobby):
              </p>
              <div className="skills-pill-container">
                <div className="pill-span">Three.js</div>
                <div className="pill-span">WebGL/GLSL</div>
                <div className="pill-span">Tensorflow.js</div>
              </div>
              <h3>Other Languages</h3>
              <div className="skills-pill-container">
                {["C", "HTML/CSS", "R", "SQL", "Swift"].map((pill, i) => (
                  <span key={i} className="pill-span">{pill}</span>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
