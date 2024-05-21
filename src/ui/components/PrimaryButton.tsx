const PrimaryButton = (props: { title: string; emitClick: () => void }) => {
  return (
    <button onClick={props.emitClick} style={{ cursor: "pointer" }}>
      {props.title}
    </button>
  );
};
export default PrimaryButton;
