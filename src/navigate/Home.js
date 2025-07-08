import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const About = () => {
    navigate("/about"); 
  };

  return (
    <>
      <h2>This is Home Page</h2>
      <button className="click" onClick={About}>Go to About</button>
    </>
  );
}

export default Home;
