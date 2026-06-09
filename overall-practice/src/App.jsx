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

function ListsExample() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  const students = [
    { id: 1, name: "Gul", grade: "A" },
    { id: 2, name: "Kami", grade: "B" },
    { id: 3, name: "Ahmad", grade: "C" },
  ];
  return (
    <>
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <h2>Students</h2>
      {students.map((student) => (
        <div key={student.id}>
          <p>
            {student.name}-Grade: {student.grade}
          </p>
        </div>
      ))}
    </>
  );
}
export default ListsExample;
