const NumbersTable = (props) => {
  /* const [backgroundColor, setBackgroundColor] = useState('red'); */
  let numbers = [];
  for (let i = 1; i < props.limit; i++) {
    numbers.push(i);
  }

  return (
    <div>
      {props.limit}
      {numbers.map((number) => (
        <span
          className="chessboard"
          key={number}
          style={{
            padding: '20px',
            backgroundColor: 'red',
            border: '1px solid black',
          }}
          width="20px"
          height="20px"
        >
          {number}
        </span>
      ))}
    </div>
  );
};

export default NumbersTable;
