import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  

  const About = () => {
    navigate("/about",{state:{msg:"Hi Thenmozhi,"}}); 
  };

  return (
    <div>
      <h2>This is Home</h2>
      <button className="click" onClick={About}>Go to About</button>
    </div>
  );
}


export default Home;
