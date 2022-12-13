
import { NavLink, Route, Routes, useLocation,  } from "react-router-dom";
import Home from "./Pages/Home";
import Todo from "./Pages/Todo";
import About from "./Pages/About";
import ErrorBoundary from "./Pages/ErrorBoundary";
import BookRoutes from "./Pages/BookRoutes";
import "./Components/Style.css"
function App() {
  const location = useLocation
  console.log(location)
  // let element = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "*",
  //     element: <ErrorBoundary />,
  //   },
  // ])
 

  return (
    <>
    {/* <Routes>
      <Route path="/books" element={<h1>Extra content</h1>} />
    </Routes> */}
    <nav>
      <ul>
        <li>
          <NavLink 
          to="/" state="hi"> 
            Home</NavLink>
          </li>
        <li>
          <NavLink to="/todo"> Todo </NavLink>
          </li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink end to="/books">BookLIst</NavLink></li>
      </ul>
      {/* {element} */}
    </nav>
    {location.state}
       <Routes>
<Route path="/" element={<Home />}/>
<Route path="/todo" element={<Todo />} />
<Route path="/about" element={<About />} />
<Route path="/books/*" element={<BookRoutes />} />

<Route path="*" element={<ErrorBoundary />} />
  </Routes>
  </>
 
  )
  
}

export default App;
