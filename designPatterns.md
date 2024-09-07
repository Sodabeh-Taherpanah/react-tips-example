Component Composition: Building complex UIs from simpler components.
Container and Presentational Components: Separating state management from UI rendering.
Higher-Order Components (HOCs): Enhancing components with additional functionality.
Render Props: Sharing state or logic with other components via a function prop.
Hooks: Managing state and side effects in functional components.
Context API: Providing a way to pass data through the component tree without prop drilling.

// Higher-Order Component 
//higher-order component is a function that takes a component and returns a new component with additional props or functionality. HOCs are used for code reuse and cross-cutting concerns.
function withLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component mounted:', WrappedComponent.name);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

// Usage
function MyComponent(props) {
  return <div>{props.message}</div>;
}

const MyComponentWithLogging = withLogging(MyComponent);

// Component with render prop
//: A pattern where a component uses a function as a prop to share state or behavior with other components. This allows for greater flexibility and code reuse.
class DataProvider extends React.Component {
  state = { data: [] };

  componentDidMount() {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

// Usage
function App() {
  return (
    <DataProvider render={data => (
      <ul>
        {data.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    )} />
  );
}
