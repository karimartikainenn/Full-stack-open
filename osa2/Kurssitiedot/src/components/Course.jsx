const Course = ({ probs }) => { 

    console.log(probs)
    const course = probs.course
    return (
      <div>
      <Header course={course} />
      </div>
    )
  }

  export default Course;  