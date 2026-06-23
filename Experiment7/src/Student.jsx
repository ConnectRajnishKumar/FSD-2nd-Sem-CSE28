function Student({ name, course, marks }) {

  let grade;

  if (marks >= 90)
    grade = "A+";
  else if (marks >= 75)
    grade = "A";
  else if (marks >= 60)
    grade = "B";
  else
    grade = "C";

  return (
    <div className="student-card">

      <h2>{name}</h2>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <p>
        <strong>Marks:</strong> {marks}
      </p>

      <p>
        <strong>Grade:</strong> {grade}
      </p>

    </div>
  );
}

export default Student;