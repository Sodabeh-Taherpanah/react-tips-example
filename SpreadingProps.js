//Bad way : This will try to add the unknown HTML attribute "isActive" to the DOM element.

const ComponentA = () => (<SpreadComponent isActive={true} className="content"/>);
const SpreadComponent = (props) => (<div {...props}>SpreadComponent</div>);

//Good way : we can use prop destructuring with ...rest . Actually, we use a PureComponent, 
//when an update happens it re-renders the component even if domProps did not change.

const ComponentA = () => (<SpreadComponent isActive={true} className="content"/>);
const SpreadComponent = ({ isActive, ...domProps }) => (<div {...domProps}>SpreadComponent</div>);
