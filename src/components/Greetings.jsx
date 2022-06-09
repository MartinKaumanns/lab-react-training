import '../Greetings.css';

const Greetings = (props) => {
  let greeting;
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello';
  }
  return (
    <div className="greeting">
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
};

export default Greetings;
