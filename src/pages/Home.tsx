import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const guiState = useSelector((state) => state);

  console.log("🚀 ~ Home ~ guiState:", guiState);
  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default Home;
