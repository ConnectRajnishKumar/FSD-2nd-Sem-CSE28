import Student from "./Student";

function App() {

  const students = [
    {
      name: "Rahul Sharma",
      course: "Computer Science",
      marks: 85
    },
    {
      name: "Anita Verma",
      course: "Information Technology",
      marks: 92
    },
    {
      name: "Rohan Gupta",
      course: "Electronics",
      marks: 78
    }
  ];

  return (
    <div className="container">

      <h1>Student Information System</h1>

      {students.map((student, index) => (
        <Student
          key={index}
          name={student.name}
          course={student.course}
          marks={student.marks}
        />
      ))}

    </div>
  );
}

export default App;