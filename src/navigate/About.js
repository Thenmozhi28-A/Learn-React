import { useLocation } from "react-router-dom";

function About() {
  
  const location =useLocation();
  console.log(location);
  
  const {msg}=location.state;

  return(

  <div>
  <h2>This is About Page</h2>
  <p>{msg}</p>
  </div>

  );
}

export default About;
