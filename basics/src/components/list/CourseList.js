
// import Course from "./Coursesss"

import Course from "./Course"

function CourseList() {

  const fruits = ["Apple", "Banana", "Mango"]
  const fruitList = fruits.map(fruit => <h2>{fruit}</h2>)
        
  return (
    <div>
      {
        fruitList
      }
    </div>
  )

  // const courses = [
  //   {
  //     no: "E01",
  //     name: "Programming",
  //     crieditHour: "5"
  //   },
  //   {
  //     no: "E04",
  //     name: "javaScript",
  //     crieditHour: "3"
  //   },
  //   {
  //     no: "E05",
  //     name: "Database",
  //     crieditHour: "5"
  //   },
  //   {
  //     no: "E011",
  //     name: "OOP",
  //     crieditHour: "3"
  //   },
  //   {
  //     no: "E09",
  //     name: "React",
  //     crieditHour: "3"
  //   }
  // ]

  // const courseList = courses.map(course => <Course key = {course.no} course={course}/> )
  // return <div> { courseList } </div>
}

export default CourseList