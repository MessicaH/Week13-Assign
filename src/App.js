import logo from './logo.svg';
import './App.css';
import Navigation from "./nav"; // Created a variable that "holds" all the info "nav..js" component is putting out (returning)
import Welcome from "./welcome";
import Login from "./login";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Welcome/>
      <Login/>
    </div>
  );
}

export default App;

/* -- ALL YOUR COMPONENT/STYLE IMPORTS HERE -- 
import './App.css'  // Collecting all the different styling used within the overall "App.js" file running thru "index.html"

// Now anytime "<Navigation>" is used, it imports the styling, format, etc. of the elements in "nav.js" file - but in one line!
import Welcome from "./welcome"
 
    <!--insert NAV menu here with React script - 2-3 links -->
    <!--insert H3 welcome area that says "LOGIN" with a border-->
    <!--insert 2 Input fields for "Username" and "Password"-->

function App() {
  return (
  <div className="App">
    <Navigation></Navigation>
    <Welcome/>
    <div>
      <p>Hello World</p>
    </div>
  </div>
  )
}

export default App */
