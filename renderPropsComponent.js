//benfits
//1. Since render props can be different each time, we can make components that receive render props highly reusable for multiple usecases.

// 2.  Separation of concerns: We can separate our app's logic from rendering components through render props.
// The stateful component that receives a render prop can pass the data onto stateless components, which merely render the data.

// 3.  Solution to HOC problems: Since we explicitly pass props, we solve the HOC's implicit props issue.
//   The props that should get passed down to the element, are all visible in the render prop's arguments list. We know exactly where certain props come from.
 function Input(props) {
  const [value, setValue] = useState("");
   //These props receive the value of the input, which they convert to the correct temperature in either K or °F.
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {props.renderKelvin({ value: value + 273.15 })}
      {props.renderFahrenheit({ value: (value * 9) / 5 + 32 })}
    </>
  );
}

export default function App() {
  
  return (
    <Input
      renderKelvin={({ value }) => <div className="temp">{value}K</div>}
      renderFahrenheit={({ value }) => <div className="temp">{value}°F</div>}
    />
  );
}
