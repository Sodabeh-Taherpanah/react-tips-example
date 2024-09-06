** The SOLID principles are a set of design guidelines from object-oriented programming (OOP) that can also be applied to React development to help create more maintainable, scalable, and flexible code.**

    
    Single responsibility principle (SRP) :A class (or component) should have only one reason to change, meaning it should only do one thing.
    Avoid components that do too much, like handling UI, API calls, and state management in one place.
  
  const UserProfile = () => {  return <UserDetails />;
  };

  const UserDetails = () => {
  // Only responsible for displaying user details
  return <div>User Info</div>;
  };


    Open-closed principle (OCP): Software entities (classes, components, functions) should be open for extension but closed for modification.
    You should be able to extend a component's behaviour (e.g., using props or higher-order components) without modifying its core logic.

    
   const Button = ({ label, onClick }) => {  return <button onClick={onClick}>{label}</button>;
   };
   
    Liskov substitution principle (LSP): If you have reusable components or inherit components (e.g., by wrapping or extending), the new components should behave like the original.
    PrimaryButton behaves exactly like Button, with added styling.

  const PrimaryButton = (props) => <Button {...props} className="primary" />;
   
    Interface segregation principle (ISP): Components should only receive the props they need. Do not pass a large set of unnecessary props to components. 
    const UserProfile = ({ name, age }) => {
  const UserProfile = ({ name, age }) => { return <div>{name}, {age}</div>;
};
    Dependency inversion principle (DIP)

    Dependency Inversion Principle (DIP)
Components should rely on abstracted logic (e.g., hooks, context, or external libraries) rather than being tightly coupled to implementation details.
const useUserData = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);
  
  return user;
};
//the UserProfile component doesn't know how the user data is fetched; it simply relies on the useUserData hook.
const UserProfile = () => {
  const user = useUserData();
  
  return user ? <div>{user.name}</div> : <div>Loading...</div>;
};
    
