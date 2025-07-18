const Skills = () => {
  return (
    <div className="skills montserrat">
      <div className="mb-4">
        <strong>languages</strong>
        <div className="d-flex flex-wrap gap-2 mt-2">
          <p
            className="card shadow-sm"
            style={{
              width: "fit-content",
              padding: "0.5rem",
              textWrap: "nowrap",
            }}
          >
            HTML
          </p>
          <p
            className="card shadow-sm"
            style={{
              width: "fit-content",
              padding: "0.5rem",
              textWrap: "nowrap",
            }}
          >
            CSS
          </p>
          <p
            className="card shadow-sm"
            style={{
              width: "fit-content",
              padding: "0.5rem",
              textWrap: "nowrap",
            }}
          >
            JavaScript
          </p>
          <p
            className="card shadow-sm"
            style={{
              width: "fit-content",
              padding: "0.5rem",
              textWrap: "nowrap",
            }}
          >
            Typescript
          </p>
          <p
            className="card shadow-sm"
            style={{
              width: "fit-content",
              padding: "0.5rem",
              textWrap: "nowrap",
            }}
          >
            Python
          </p>
        </div>
      </div>
      <div className="mb-4">
        <strong>frameworks</strong>
        <div className="d-flex flex-wrap gap-2 mt-2">
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
        <div className="d-flex flex-wrap gap-2 mt-2">
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
