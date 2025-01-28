const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  return (
    <>
      <h1>give feedback</h1>
      <Button text={"good"} />
      <Button text={"neutral"} />
      <Button text={"Bad"} />
    </>
  );
};

export default App;
