const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ name, exercise }) => {
  return (
    <p>
      {name} {exercise}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercise={part.exercises} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  const exercises = parts.map((part) => part.exercises);
  const total = exercises.reduce(
    (accumulator, value) => accumulator + value,
    0
  );
  return <b>total of {total} exercises</b>;
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
