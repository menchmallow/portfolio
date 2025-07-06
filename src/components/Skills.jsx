const Skills = () => {
  return (
    <div className="skills">
      <div className="mb-4">
        <strong>languages</strong>
        <div className="d-flex gap-2 mt-2">
          <p
            className="card shadow-sm"
            style={{ width: "fit-content", padding: "0.5rem" }}
          >
            HTML
          </p>
          <p
            className="card shadow-sm"
            style={{ width: "fit-content", padding: "0.5rem" }}
          >
            CSS
          </p>
          <p
            className="card shadow-sm"
            style={{ width: "fit-content", padding: "0.5rem" }}
          >
            JavaScript
          </p>
          <p
            className="card shadow-sm"
            style={{ width: "fit-content", padding: "0.5rem" }}
          >
            Python
          </p>
        </div>
      </div>
      <div className="mb-4">
        <strong>frameworks</strong>
        <div className="d-flex gap-2 mt-2">
          <p
            className="card shadow-sm"
            style={{ width: "fit-content", padding: "0.5rem" }}
          >
            React + Vite
          </p>
          <p
            className="card shadow-sm"
            style={{ width: "fit-content", padding: "0.5rem" }}
          >
            Django
          </p>
        </div>
      </div>
      <div className="mb-4">
        <strong>database</strong>
        <div className="d-flex gap-2 mt-2">
          <p
            className="card shadow-sm"
            style={{ width: "fit-content", padding: "0.5rem" }}
          >
            PostgreSQL
          </p>
          <p
            className="card shadow-sm"
            style={{ width: "fit-content", padding: "0.5rem" }}
          >
            SQLite
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
