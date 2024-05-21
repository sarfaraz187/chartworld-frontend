import MapComp from "../ui/Map";
import PrimaryButton from "../ui/components/PrimaryButton";
import { useContext } from "react";
import Context from "../state/Context";

const Home = () => {
  const context = useContext(Context);

  if (!context) return "";

  const handleBtnClick = () => {
    context.setToggleBtnState({
      title: context.toggleBtnState.isActive ? "WMS Layer off" : "WMS Layer on",
      isActive: !context.toggleBtnState.isActive,
    });
  };

  return (
    <>
      {context?.toggleBtnState && <PrimaryButton title={context.toggleBtnState.title} emitClick={handleBtnClick} />}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MapComp />
      </div>
    </>
  );
};

export default Home;
