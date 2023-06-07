export default function Errorwhy(props) {
  return (
    <>
      <h1 className="title">ERROR</h1>
      <p>{props.params.default}</p>
    </>
  );
}
