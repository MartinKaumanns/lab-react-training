import '../Greetings.css';

const Random = (props) => {
  const { min, max } = props;
  const generateNumber = (val1, val2) =>
    Math.floor(val1 + Math.random() * (val2 - val1));
  const randomNumber = generateNumber(min, max);

  return (
    <div className="greeting">
      A random Number between {min} and {max} =&gt; {randomNumber}
    </div>
  );
};
export default Random;
