** useLayoutEffect**, on the other hand, runs synchronously after a render but before the screen is updated.runs, and React waits for it to finish.The screen is visually updated.
**useLayoutEffect** can cause performance issues if used excessively because it delays painting.

useEffect runs asynchronously and after a render is painted to the screen.React renders your component.The screen is visually updated.THEN useEffect runs

//Adjusting an Element's Position Based on Its Size. ensures this measurement and adjustment happen before the browser paints the screen,
const tooltipRef = useRef();
  const [tooltipStyle, setTooltipStyle] = useState({});

  useLayoutEffect(() => {
  //tooltip's dimensions are calculated using getBoundingClientRect()
    const { height, width } = tooltipRef.current.getBoundingClientRect();
    
    // Adjust the tooltip's position based on its size
    setTooltipStyle({
      top: `calc(50% - ${height / 2}px)`,
      left: `calc(50% - ${width / 2}px)`,
    });
  }, []);

  ... return (
    <div
      ref={tooltipRef}
      style={{
        position: "absolute",
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        ...tooltipStyle,
      }}
    >

 //Synchronizing Animations or Scroll Positions: based on changes in the DOM, 
 ensures that the scroll position is synchronized before the user sees the page, preventing an awkward scroll jump.
 
 useLayoutEffect(() => {
    // Scroll to the bottom of the container
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  });

 ...  <div
      ref={containerRef}
      style={{ height: "200px", overflow: "auto", backgroundColor: "#f0f0f0" }}
    >
      <div style={{ height: "500px", padding: "10px" }}>
        Scroll to the bottom on load or resize.
      </div>


**Avoiding useEffect with callback refs**
1.
const ref = React.useRef(null)

// it assumes that the ref is "filled" when the effect runs. but:
    Form renders.
    input is not rendered, ref is still null.
    effect runs, does nothing.
    input is shown, ref will be filled, but will not be focussed because effect won't run again.

React.useEffect(() => {
 // 🚨 ref.current is always null when this runs
  ref.current?.focus()

}, [])

return <input ref={ref} defaultValue="Hello world" />
2.I like to think about refs on React elements as functions that are called after the component has rendered. 
This function gets the rendered DOM node passed as argument. If the React element unmounts, it will be called once more with null.
React will run this function after every render. 
<input

  ref={(node) => {

    ref.current = node;

  }}

  defaultValue="Hello world"

/>

3.callback ref is bound to the lifecycle of the DOM node, not of the component that mounts it. Further, 
it will not execute twice in strict mode (when running in the development environment)
 uses one hook instead of two. 

 React uses referential stability to check if the callback ref should be run or not.
 That means if we pass the same ref(erence, pun intended) to it, execution will be skipped.

And that is where useCallback comes in, because that is how we ensure a function is not needlessly created. Maybe that's why they are called callback-refs.

const ref = React.useCallback((node) => {

  node?.focus()

}, [])



**What is a higher-order component?** ta function that takes a component and returns a new component with additional behavior or logic. . similar to the render props pattern,withRouter ,react context 
Code Reusability,Separation of Concerns,
// accept a Component as an argument
const withSomeLogic = (WrappedComponent) => {
  // do something
 useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted with props:`, props);

      // Cleanup function runs when the component unmounts
      return () => {
        console.log(`Component ${WrappedComponent.name} unmounted.`);
      };
    }, []); // Empty dependency array means this effect runs once on mount and once on unmount.
    
  // return a component that renders the component from the argument
  return (props) => <WrappedComponent {...props} />;
};
type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>
}
const ButtonWithSomeLogic = withSomeLogic(Button);


Use Case: 
Adding Conditional Authentication to a Component  :  return isAuthenticated ? <WrappedComponent {...otherProps} /> : null;   //WrappedComponent can be userprofile
for logging :
const withLogging = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted with props:`, props);

      // Cleanup function runs when the component unmounts
      return () => {
        console.log(`Component ${WrappedComponent.name} unmounted.`);
      };
    }, []); // Empty dependency array means this effect runs once on mount and once on unmount.

    // Render the wrapped component and pass down all props
    return <WrappedComponent {...props} />;
  };
};
const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>User Profile</h1>    
    </div>
  );
};

// Applying the HOC to add logging to the UserProfile component
const LoggedUserProfile = withLogging(UserProfile);
....    const user = { name: 'John Doe' };  <LoggedUserProfile user={user} />
      
