
 function Course({course}) {
  return (
    <div>
      <p>The course that we are taking this semister are: 
        {course.name} and it has a number of 
        {course.no} and a credit hour of 
        {course.cr}
      </p>  
    </div>
  )
}

export default Course