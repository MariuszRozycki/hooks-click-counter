const ADDITION = 'addition';
const RESET = 'reset';
const SUBTRACTION = 'subtraction';

const Counter = (props) => {
  const [count, setCount] = React.useState(0);
  const [result, setResult] = React.useState(props.result);

  const handleMathClick = (type, number = 1) => {
    if (type === SUBTRACTION) {
      setCount(count - number);
      setResult(result + 1);
    } else if (type === RESET) {
      setCount(props.result);
      setResult(result + 1)
    } else if (type === ADDITION) {
      setCount(count + number);
      setResult(result + 1);
    }
  }

  return (
    <React.Fragment>
      <MathButton
        name="-10"
        number={10}
        type={SUBTRACTION}
        click={handleMathClick}
      />
      <MathButton
        name="-1"
        number={10}
        type={SUBTRACTION}
        click={handleMathClick}
      />
      <MathButton
        name="Reset"
        type={RESET}
        click={handleMathClick}
      />
      <MathButton
        name="+1"
        number={1}
        type={ADDITION}
        click={handleMathClick}
      />
      <MathButton
        name="+10"
        number={10}
        type={ADDITION}
        click={handleMathClick}
      />
      <ResultPanel
        count={count}
        result={result}
      />
    </React.Fragment>
  )
};

const MathButton = ({ click, name, number, type }) => {
  const handleOnClick = () => click(type, number);

  return (
    <button onClick={handleOnClick}>{name}</button>
  )
};

const ResultPanel = ({ count, result }) => {
  const additionalInformation = count > 10 ? (
    <span> Processor overloaded!</span>
  ) : null;


  return (
    <>
      <h2>Click: {count}{additionalInformation}</h2>
      <h2>Result of all click: {result}</h2>
    </>
  )
}
const startValue = 0;

ReactDOM.render(<Counter result={startValue} />, document.getElementById('root'));