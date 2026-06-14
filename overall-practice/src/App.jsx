//1. Introduction to React and SPA
//A Single Page Application means the page never fully reloads. React just
// swaps out the content dynamically.

// function App() {
//   return (
//     <div>
//       <h1>Hello, this is a Single Page Application</h1>
//       <p>The page never reloads. React updates only what changes.</p>
//     </div>
//   );
// }
// export default App;

//2. JSX and Rendering Elements
//JSX looks like HTML but it is actually JavaScript. React converts it
//  behind the scenes.

// function App() {
//   const name = "Gul";
//   const age = 25;
//   const isloggedIn = true;
//   return (
//     <>
//       <h1>My name is: {name}</h1>
//       <p1>I am {age} years old</p1>
//       <p2>And i am {isloggedIn}</p2>
//       <p3>2-2: {2 - 2}</p3>
//       <p4>Uppercase name: {name.toUpperCase()}</p4>
//     </>
//   );
// }
// export default App;

//3. Components and Props
//Components are like reusable building blocks. Props are the data
//  you pass into them.

// function UserCard(props) {
//   return (
//     <>
//       <h2>Name: {props.name}</h2>
//       <p>Age: {props.age}</p>
//       <p>City: {props.city}</p>
//     </>
//   );
// }
// // We can also Destructure Properties directly
// function ProductCard({ title, price }) {
//   return (
//     <>
//       <h3>title: {title}</h3>
//       <p>Price: PKR{price}</p>
//     </>
//   );
// }
// // App uses both components and passes data as props
// function App() {
//   return (
//     <>
//       <UserCard name="Rahman" age={25} city="Peshawar"></UserCard>
//       <UserCard name="Sana" age={22} city="Mardan"></UserCard>

//       <ProductCard title="Laptop" price={50000}></ProductCard>
//       <ProductCard title="MacBook" price={100000}></ProductCard>
//     </>
//   );
// }
// export default App;

//4. State and useState Hook
//State is data that can change over time. When state changes, React
//re-renders the component.

// import { useState } from "react";
// function Counter() {
//    // useState returns two things: the current value, and a function to update it
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h2>Counter: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </>
//   );
// }
// //Another Example Toggling a value
// function SwitchLight() {
//   const [isOn, setIsOn] = useState(false);
//   return (
//     <>
//       <h2>Light is On:{isOn ? "ON" : "OFF"}</h2>
//       <button onClick={() => setIsOn(!isOn)}>Toggle Light</button>
//     </>
//   );
// }
// function App() {
//   return (
//     <>
//       <Counter />
//       <SwitchLight />
//     </>
//   );
// }
// export default App;

//5. Event Handling
//Handling clicks, input changes, form submits, and other user interactions.

// import { useState } from "react";
// function EventExample() {
//   const [message, setMessage] = useState("");
// //Click Event
//   function handleClick() {
//     alert("Button was clicked!");
//   }
//   //Input Change Event
//   function handleChange(event) {
//     setMessage(event.target.value);
//   }
// //Mouseover Event
//   function handleMouseOver() {
//     console.log("Mouse is over the box");
//   }
//   return (
//     <>
// //Click Event
//       <button onClick={handleClick}>Click Me</button>
//       //Input Change Event
//       <input
//         type="text"
//         onChange={handleChange}
//         placeholder="Type Something"
//       ></input>
//       <p>You typed: {message}</p>
//       //Mouseover Event
//       <div onMouseOver={handleMouseOver}>Hover over me</div>
//     </>
//   );
// }
// export default EventExample;

//6. Conditional Rendering
//Show or hide parts of the UI based on a condition.

// import { useState } from "react";
// function ConditionalExample() {
//   const [isloggedIn, setIsloggedIn] = useState(false);
//   const [score, setScore] = useState(75);
//   return (
//     <>
//       {isloggedIn ? <h2>Welcome back, Ahmed!</h2> : <h2>Please log in</h2>}
//       <button onClick={() => setIsloggedIn(!isloggedIn)}>
//         {" "}
//         {isloggedIn ? "Logout" : "Login"}
//       </button>
//       {isloggedIn && <p>You can now access to your dashboard</p>}
//       {score >= 90 && <p>Grade:A</p>}
//       {score > 70 && score < 90 && <p>Grade: B</p>}
//       {score < 70 && <p>Grade: C</p>}
//     </>
//   );
// }
// export default ConditionalExample;

//7. Lists and Keys
//Rendering a list of items using the map function. Keys help React identify which items changed.

// function ListsExample() {
//   const fruits = ["Apple", "Banana", "Mango", "Orange"];
//   const students = [
//     { id: 1, name: "Gul", grade: "A" },
//     { id: 2, name: "Kami", grade: "B" },
//     { id: 3, name: "Ahmad", grade: "C" },
//   ];
//   return (
//     <>
//       <h2>Fruits</h2>
//       <ul>
//         {fruits.map((fruit) => (
//           <li key={fruit}>{fruit}</li>
//         ))}
//       </ul>

//       <h2>Students</h2>
//       {students.map((student) => (
//         <div key={student.id}>
//           <p>
//             {student.name}-Grade: {student.grade}
//           </p>
//         </div>
//       ))}
//     </>
//   );
// }
// export default ListsExample;

//8. Forms and Controlled Components
//In controlled components, React state controls the form input values at all times.
// import { useState } from "react";
// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     agree: false,
//   });

//   // One single handler for all inputs
//   function handleChange(event) {
//     const { name, value, type, checked } = event.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log("Form is submitted:", formData);
//     alert(`Welcome ${formData.name}!`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Your Name"
//         value={formData.name}
//         onChange={handleChange}
//       ></input>
//       <input
//         type="text"
//         name="email"
//         placeholder="Your Email"
//         value={formData.email}
//         onChange={handleChange}
//       ></input>
//       <select name="gender" value={formData.gender} onChange={handleChange}>
//         <option value="">Select Gender</option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//       </select>

//       <label>
//         <input
//           type="checkbox"
//           name="agree"
//           checked={formData.agree}
//           onChange={handleChange}
//         ></input>
//         I agree to terms
//       </label>

//       <button type="submit">Register</button>
//     </form>
//   );
// }
// export default RegistrationForm;

//9. Basic Styling — CSS, Inline Styles, className, and Tailwind CSS

// import "./styles.css";

// import ExternalStyling from "./components/ExternalStyling";
// import InlineStyling from "./components/InlineStyling";
// import TailwindStyling from "./components/TailwindStyling";

// function App() {
//   return (
//     <>
//       <ExternalStyling />
//       <InlineStyling />
//       <TailwindStyling />
//     </>
//   );
// }

// export default App;

//10. React Developer Tools and Debugging Basics
//No code to install — this is a browser extension. But here is how you debug in code:
// import { useState, useEffect } from "react";

// function DebuggingExample() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Ahmed");

//   // console.log runs every time the component re-renders
//   console.log("Component re-rendered. Count is:", count);

//   // useEffect with console.log to watch a specific value change
//   useEffect(() => {
//     console.log("Count changed to:", count);
//   }, [count]); // only runs when count changes

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       {/* You can also temporarily show state values directly on screen for debugging */}
//       <pre>{JSON.stringify({ count, name }, null, 2)}</pre>
//     </div>
//   );
// }

// export default DebuggingExample;

//11. useEffect Hook and Lifecycle Understanding
//useEffect runs side effects in your component. It replaces lifecycle methods //like componentDidMount, componentDidUpdate, and componentWillUnmount.

// import { useState, useEffect } from 'react';

// function LifecycleExample() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState('Ahmed');

//   // Runs once when component mounts (like componentDidMount)
//   useEffect(() => {
//     console.log('Component mounted');
//   }, []);

//   // Runs every time count changes (like componentDidUpdate)
//   useEffect(() => {
//     console.log('Count changed to:', count);
//   }, [count]);

//   // Runs every time any state changes (no dependency array)
//   useEffect(() => {
//     console.log('Component re-rendered');
//   });

//   // Cleanup function runs when component unmounts (like componentWillUnmount)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log('Timer running');
//     }, 1000);

//     // This cleanup runs when component is removed from screen
//     return () => {
//       clearInterval(timer);
//       console.log('Component unmounted, timer cleared');
//     };
//   }, []);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Type name"
//       />
//     </div>
//   );
// }

// export default LifecycleExample;

//12. Context API
// Context API lets you share data across many //components without passing props manually through every level.
// import { createContext, useContext, useState } from 'react';

// // Step 1 — Create the context
// const UserContext = createContext();

// // Step 2 — Create a provider component that wraps your app
// function UserProvider({ children }) {
//   const [user, setUser] = useState({ name: 'Ahmed', role: 'Admin' });

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// // Step 3 — Any component deep inside can read from context
// function Navbar() {
//   const { user } = useContext(UserContext);
//   return <h2>Logged in as: {user.name} ({user.role})</h2>;
// }

// function Profile() {
//   const { user, setUser } = useContext(UserContext);

//   return (
//     <div>
//       <p>Profile Name: {user.name}</p>
//       <button onClick={() => setUser({ name: 'Sara', role: 'User' })}>
//         Switch User
//       </button>
//     </div>
//   );
// }

// // Step 4 — Wrap your components inside the provider
// function App() {
//   return (
//     <UserProvider>
//       <Navbar />
//       <Profile />
//     </UserProvider>
//   );
// }

// export default App;

//13. Lifting State Up
//When two sibling components need the same data, move the state
//  up to their common parent and pass it down as props.
// import { useState } from "react";
// // Both components need to share the same temperature value
// // So we lift the state up to the parent App component
// function CelsiusInput({ celsius, onCelsiusChange }) {
//   return (
//     <>
//       <label>Celsius:</label>
//       <input
//         type="number"
//         value={celsius}
//         onChange={(e) => onCelsiusChange(e.target.value)}
//       />
//     </>
//   );
// }
// function FahrenheitDisplay({ celsius }) {
//   const fahrenheit = (celsius * 9) / +32;
//   return <p>Farhenheit:{fahrenheit}</p>;
// }
// function App() {
//   const [celsius, setCelsius] = useState(0);
//   return (
//     <>
//       <h2>Temperature Convertor</h2>
//       <CelsiusInput celsius={celsius} onCelsiusChange={setCelsius} />
//       <FahrenheitDisplay celsius={celsius} />
//     </>
//   );
// }
// export default App;

//14. React Router
//React Router lets you navigate between different pages without reloading the browser.
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useParams,
//   useNavigate,
// } from "react-router-dom";
// //Page Components:
// function Home() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <h2>Home</h2>
//       <button onClick={() => navigate("/About")}>Go to About</button>
//     </>
//   );
// }
// function About() {
//   return <h2>About Page</h2>;
// }
// function Products() {
//   const products = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Phone" },
//   ];
//   return (
//     <>
//       <h2>Poducts</h2>
//       {products.map((p) => (
//         <div key={p.id}>
//           <Link to={`/products/${p.id}`}>{p.name}</Link>
//         </div>
//       ))}
//     </>
//   );
// }

// function ProductDetails() {
//   const { id } = useParams();
//   return <h2>Showing details for product ID:{id}</h2>;
// }
// function NotFound() {
//   return <h2>404-Page not found</h2>;
// }

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link> | {""}
//       <Link to="/about">About</Link>| {""}
//       <Link to="/products">Products</Link>| {""}
//     </nav>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

//15. Handling APIs — fetch demo and Axios demo
//Demo 1 — Using fetch
// import { useState, useEffect } from "react";
// function FetchDemo() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Something is wrong");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   return (
//     <>
//       <h2>Users from API (fetch)</h2>
//       {users.map((user) => (
//         <div key={user.id}>
//           <p>
//             {user.name}-{user.email}
//           </p>
//         </div>
//       ))}
//     </>
//   );
// }

// export default FetchDemo;

//Demo 2 — Using Axios
//import { useState, useEffect } from "react";
// import axios from "axios";

// function AxiosDemo() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Axios automatically parses JSON, no need for .json()
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
//       .then((response) => {
//         setPosts(response.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Failed to fetch posts");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>Posts from API (Axios)</h2>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h4>{post.title}</h4>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AxiosDemo;

//16. Custom Hooks
//A custom hook is just a function that starts with "use" and contains reusable logic.
// import { useState, useEffect } from "react";
// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((result) => {
//         setData(result);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to fetch");
//         setLoading(false);
//       });
//   }, [url]);
//   return { data, loading, error };
// }

// function useLocalStorage(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     const saved = localStorage.getItem(key);
//     return saved ? JSON.parse(saved) : initialValue;
//   });

//   function updateValue(newValue) {
//     setValue(newValue);
//     localStorage.setItem(key, JSON.stringify(newValue));
//   }
//   return [value, updateValue];
// }

// function App() {
//   const { data, loading, error } = useFetch(
//     "https://jsonplaceholder.typicode.com/users/1",
//   );
//   const [username, setUsername] = useLocalStorage("username", "");

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   return (
//     <>
//       <h2>User from Custom useFetch hook:</h2>
//       <p>{data.name}</p>
//       <p>{data.email}</p>
//       <h2>saved Username(persists after refresh):</h2>
//       <input
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Type a username"
//       />
//       <p>Saved: {username}</p>
//     </>
//   );
// }

// export default App;

//17. Memoization — React.memo, useMemo, useCallback
//These tools prevent unnecessary re-renders and recalculations to improve performance.

// import { useState, useMemo, useCallback, memo } from "react";
// const ChildComponent = memo(function ChildComponent({ name, onGreet }) {
//   console.log("ChildComponent rendered");
//   return (
//     <>
//       <p>Child name:{name}</p>
//       <button onClick={onGreet}>Greet</button>
//     </>
//   );
// });
// function App() {
//   const [count, setCount] = useState(0);
//   const [name] = useState("Ahmad");
//   const expensiveValue = useMemo(() => {
//     let total = 0;
//     for (let i = 0; i < 100; i++) {
//       total += i;
//     }
//     return total + count;
//   }, [count]);
//   const handleGreet = useCallback(() => {
//     alert(`Hello ${name}`);
//   }, [name]);
//   return (
//     <>
//       <h2>Count:{count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       <p>Expensive Value: {expensiveValue}</p>
//       <ChildComponent name={name} onGreet={handleGreet}></ChildComponent>
//     </>
//   );
// }
// export default App;

//18. Advanced Hooks — useReducer, useLayoutEffect, useRef
// import { useReducer, useLayoutEffect, useRef, useState } from "react";

// // ---- useReducer ----
// // Good for complex state logic with multiple actions
// // Works like Redux but local to one component

// const initialState = { count: 0, name: "Ahmed" };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + 1 };
//     case "decrement":
//       return { ...state, count: state.count - 1 };
//     case "reset":
//       return initialState;
//     case "changeName":
//       return { ...state, name: action.payload };
//     default:
//       return state;
//   }
// }

// function ReducerExample() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h2>Count: {state.count}</h2>
//       <p>Name: {state.name}</p>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//       <button onClick={() => dispatch({ type: "changeName", payload: "Sara" })}>
//         Change Name
//       </button>
//     </div>
//   );
// }

// // ---- useRef ----
// // Two main uses: accessing a DOM element directly, and storing a value
// // that does not cause a re-render when it changes

// function RefExample() {
//   const inputRef = useRef(null);
//   const countRef = useRef(0); // this does not cause re-render

//   function focusInput() {
//     inputRef.current.focus(); // directly accesses the DOM input element
//   }

//   function incrementWithoutRerender() {
//     countRef.current += 1;
//     console.log("Ref count:", countRef.current); // updates silently
//   }

//   return (
//     <div>
//       <input ref={inputRef} placeholder="Click button to focus me" />
//       <button onClick={focusInput}>Focus Input</button>
//       <button onClick={incrementWithoutRerender}>
//         Increment without re-render
//       </button>
//     </div>
//   );
// }

// // ---- useLayoutEffect ----
// // Same as useEffect but fires synchronously after DOM updates
// // Use it when you need to measure or change the DOM before the browser paints

// function LayoutEffectExample() {
//   const boxRef = useRef(null);
//   const [width, setWidth] = useState(0);

//   useLayoutEffect(() => {
//     // Reads the DOM size before browser paints to screen
//     // This prevents any visual flicker
//     const boxWidth = boxRef.current.offsetWidth;
//     setWidth(boxWidth);
//   }, []);

//   return (
//     <div>
//       <div
//         ref={boxRef}
//         style={{ width: "300px", background: "lightblue", padding: "10px" }}
//       >
//         This box is measured before paint
//       </div>
//       <p>Box width measured by useLayoutEffect: {width}px</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <ReducerExample />
//       <RefExample />
//       <LayoutEffectExample />
//     </div>
//   );
// }

// export default App;

//19. Error Boundaries
//Error boundaries catch JavaScript errors in child components and show a fallback UI
// instead of crashing the whole app. They must be class components.
// import { useState } from "react";
// import { Component } from "react";
// //Error boundaries must be class components
// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false, errorMessage: "" };
//   }
//   //Runs when a child component throws an error
//   static getDerivedStateFromError(error) {
//     return { hasError: true, errorMessage: error.message };
//   }

//   //You can also log the error here
//   componentDidCatch(error, info) {
//     console.log("Error Caught:", error);
//     console.log("Component stack:", info.componentStack);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <>
//           <h2>Something went wrong</h2>
//           <p>{this.state.errorMessage}</p>
//           <button onClick={() => this.setState({ hasError: false })}>
//             Try Again
//           </button>
//         </>
//       );
//     }
//     return this.props.children;
//   }
// }
// //This component will crash on purpose
// function BuggyComponent() {
//   const [crash, setCrash] = useState(false);
//   if (crash) {
//     throw new Error("I crashed on  purpose!");
//   }
//   return (
//     <>
//       <p>This component is working fine</p>
//       <button onClick={() => setCrash(true)}>Crash the component</button>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <h1>Error Boundary Demo</h1>
//       <ErrorBoundary>
//         <BuggyComponent />
//       </ErrorBoundary>
//     </>
//   );
// }
// export default App;

//20. Redux and Redux Toolkit Counter
//Demo 1 — Plain Redux counter
// App.js — plain Redux
// import { useSelector, useDispatch } from 'react-redux';

// function App() {
//   const count = useSelector((state) => state.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Plain Redux Counter</h2>
//       <h3>Count: {count}</h3>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
//     </div>
//   );
// }

// export default App;

// App.js — Redux Toolkit
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

// function App() {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Redux Toolkit Counter</h2>
//       <h3>Count: {count}</h3>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//       <button onClick={() => dispatch(reset())}>Reset</button>
//       <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
//     </div>
//   );
// }

// export default App;

//21. Performance Optimization — Lazy Loading and Code Splitting
//By default React loads all components at once. Lazy loading means a component only loads when it is actually needed.

//Without LazyLoading:
// import About from "./About";
// //👉 Problem: About component is loaded even if user never visits it
// function App() {
//   return (
//     <div>
//       <About />
//     </div>
//   );
// }
// export default App;

//With Lazy Loading(Code Splitting):
// import { Suspense, lazy } from "react";

// // Lazy load the component
// const About = lazy(() => import("./About"));
// import { Component } from 'react';
// import { Component } from 'react';
// import { use } from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Home Page</h1>

//       {/* Suspense shows fallback while loading */}
//       <Suspense fallback={<p>Loading page...</p>}>
//         <About />
//       </Suspense>
//     </div>
//   );
// }

// export default App;

//22. Higher Order Components (HOCs)
//A HOC is a function that takes a component and returns a new enhanced component.
//HOC that adds a loading state to any component
// HOC that adds a loading state to any component
// function withLoading(Component) {
//   return function ({ isLoading, ...props }) {
//     if (isLoading) return <p>Loading...</p>;
//     return <Component {...props} />;
//   };
// }

// function UserList({ users }) {
//   return (
//     <ul>
//       {users.map((u) => (
//         <li key={u.id}>{u.name}</li>
//       ))}
//     </ul>
//   );
// }

// const UserListWithLoading = withLoading(UserList);

// function App() {
//   return (
//     <UserListWithLoading
//       isLoading={false}
//       users={[
//         { id: 1, name: "Ahmed" },
//         { id: 2, name: "Sara" },
//       ]}
//     />
//   );
// }

// export default App;

//23.AOS Library (Animate On Scroll)
//AOS is a JavaScript library that adds animations to elements when you scroll the page.
// function App() {
//   return (
//     <>
//       <div
//         data-aos="fade-up"
//         style={{ margin: "200px ", padding: "2rem", background: "#e0f7e9" }}
//       >
//         Fade Up
//       </div>
//       <div
//         data-aos="fade-right"
//         style={{ margin: "200px 0", padding: "2rem", background: "#cce5ff" }}
//       >
//         Fade Right
//       </div>
//       <div
//         data-aos="zoom-in"
//         style={{ margin: "200px 0", padding: "2rem", background: "#f8d7da" }}
//       >
//         Zoom in
//       </div>
//     </>
//   );
// }

// export default App;

//24.React Hook Form (Simple Explanation)
//react-hook-form is a library that helps you manage forms in React easily and efficiently.
// import { useForm } from "react-hook-form";
// function App() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("name")} placeholder="Enter name" />
//       <input {...register("email")} placeholder="Enter Email" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default App;

//25.React Drag and Drop (Simple Explanation)
//React Drag and Drop packages let you move items on the screen using mouse dragging.
// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// function App() {
//   const [items, setItems] = useState([
//     { id: 1, text: "Apple" },
//     { id: 2, text: "Banana" },
//     { id: 3, text: "Mango" },
//   ]);

//   function handleDragEnd(result) {
//     if (!result.destination) return;

//     const newItems = Array.from(items);
//     const [movedItem] = newItems.splice(result.source.index, 1);
//     newItems.splice(result.destination.index, 0, movedItem);

//     setItems(newItems);
//   }

//   return (
//     <DragDropContext onDragEnd={handleDragEnd}>
//       <Droppable droppableId="list">
//         {(provided) => (
//           <ul ref={provided.innerRef} {...provided.droppableProps}>
//             {items.map((item, index) => (
//               <Draggable
//                 key={item.id}
//                 draggableId={item.id.toString()}
//                 index={index}
//               >
//                 {(provided) => (
//                   <li
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     style={{
//                       padding: "10px",
//                       margin: "5px",
//                       background: "lightblue",
//                       ...provided.draggableProps.style,
//                     }}
//                   >
//                     {item.text}
//                   </li>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </ul>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// }

// export default App;

//26. React Query (Simple Explanation)
//React Query is a library that helps you fetch, cache, and manage server data easily in React.
// import {useQuery } from "@tanstack/react-query";
// function App() {
//   const fetchUsers = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     return res.json();
//   };
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["users"],
//     queryFn: fetchUsers,
//   });
//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error Loading data</p>;
//   return (
//     <>
//       <h2>Users List(React Querry)</h2>
//       {data.map((user) => (
//         <p key={user.id}>
//           {user.name}-{user.email}
//         </p>
//       ))}
//     </>
//   );
// }
// export default App;

//27. Render Props Pattern (Simple Explanation)
//Render props is a React pattern where you pass a function as a prop to control what a component renders.
// import React from "react";
// //Child Component
// function Box({render}){
//   return(
//     <div style={{border:"2px solid black",padding:"10px"}}>
//       {render()}
//     </div>
//   );
// }
// //Parent Component
// function App(){
//   return(
//     <div>
//       <h2>Render Props Example</h2>
//       <Box
//       render={()=>{
//         return <h3>Hello from Render Props</h3>
//       }}/>
//       <Box
//       render={()=>{
//         return <p>This is dynamic UI content</p>
//       }}/>
//     </div>
//   )
// }
// export default App;

//28. 🚀 Advanced Performance Optimization (Simple Explanation)
//In React, performance optimization means:
//👉 Making your app fast and smooth by avoiding extra work.
//🧠 1. Profiling
// 👉 Checking which components are slow or re-rendering too much
// ✔ Tool: React DevTools Profiler
// ✔ Helps find performance problems
// 🧠 2. Memoization
// 👉 Storing results so React does not re-calculate again and again
// Types:
// React.memo → stops unnecessary component re-render
// useMemo → saves expensive calculation result
// useCallback → saves function so it doesn’t change every render
// 🧠 3. Unnecessary Rendering
// 👉 React re-renders components even when not needed
// ✔ Optimization = stop useless re-renders
// import React, { useState, useMemo, useCallback, memo } from "react";
// //Child component (memo prevents unnecessary re-render)
// const Child = memo(({ onClick }) => {
//   console.log("Child rerendered");
//   return <button onClick={onClick}>Click Me</button>;
// });

// function App() {
//   const [count, setCount] = useState(0);
//   //useMemo-> expensive calculation runs only when count changes
//   const expensiveValue = useMemo(() => {
//     console.log("Calcualting...");
//     return count * 1000;
//   }, [count]);

//   //useCallback-> function does not change every render
//   const handleClick = useCallback(() => {
//     alert("Button Clicked");
//   }, []);

//   return (
//     <>
//       <h2> Count:{count}</h2>
//       <h3>Value:{expensiveValue}</h3>
//       <button onClick={() => setCount(count + 1)}>increase count</button>
//       <Child onClick={handleClick} />
//     </>
//   );
// }
// export default App;

//29.1. React Suspense (Simple Explanation)
//Suspense lets React show a fallback UI (like a loading message or spinner) while waiting for something to load.
// import React, { lazy, Suspense } from "react";
// const About = lazy(() => import("./About"));
// function App() {
//   return (
//     <>
//       <h1>React Suspense Example</h1>
//       <Suspense fallback={<p>Loading...</p>}>
//         <About />
//       </Suspense>
//     </>
//   );
// }
// export default App;

//29.2.Concurrent Mode
//Concurrent features help React keep the UI responsive when heavy work is happening.
// import { useState, useTransition } from "react";
// function App() {
//   const [text, setText] = useState("");
//   const [list, setList] = useState([]);
//   const [isPending, startTransition] = useState();
//   function handleChange(e) {
//     setText(e.target.value);
//     startTransition(() => {
//       const items = [];
//       for (let i = 0; i < 10; i++) {
//         items.push(e.target.value);
//       }
//       setList(items);
//     });
//   }
//   return (
//     <div>
//       <input
//         value={text}
//         onChange={handleChange}
//         placeholder="Type Something"
//       />
//       {isPending && <p>Updating...</p>}
//       {list.map((item, index) => (
//         <p key={index}>{item}</p>
//       ))}
//     </div>
//   );
// }
// export default App;

//30. Testing React Apps (Jest & React Testing Library)
//Testing means:
//👉 Checking if your React app works correctly before users use it.
//📌 Jest
//Jest is a testing framework.
//👉 It runs your tests and tells you whether they pass or fail.
//📌 React Testing Library (RTL)
//React Testing Library helps you test React components the way a user uses them.

//31. State Management in Complex Apps (Simple Explanation)
//In big React apps, many components need to share data.
//👉 State management helps us store and share data easily across the app.

//31.1. Zustand (Very Simple & Lightweight)
//👉 Zustand is a small and easy global state library
//One store = shared data
//Any component can use it directly

//31.2 Recoil Simple Idea
//👉 State is split into small atoms
//👉 Components subscribe to only what they need

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p>Welcome to my first React app.</p>
    </div>
  );
}

export default App;
