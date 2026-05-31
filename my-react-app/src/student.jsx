function Student(props) {
  return (
    // <div>
    //   <h1>Welcome to my world</h1>
    //   <h2>hello</h2>
    //   <p>This is a simple React app.</p>
    //   <div>CSE 28</div>
    //   <img src ="https://images.pexels.com/photos/25112101/pexels-photo-25112101.jpeg" height={720} width={1280} alt="Wedding Ceremony" />
    //   <button>Click me</button>
    //   <iframe src="https://www.youtube.com/embed/Pi---zQ2CS8" width={560} height={315} />
    //   <audio controls>
    //     <source src="" type="audio/mp3" />
    //   </audio>
    //   <video controls>
    //     <source src="" type="video/mp4" />
    //   </video>
    // </div>
    <div className="student-info">
      <h2>Name: {props.name}</h2>
      <h3>Course: {props.course}</h3>
      <h3>Marks: {props.marks}</h3>
    </div>
  )
}

export default Student
