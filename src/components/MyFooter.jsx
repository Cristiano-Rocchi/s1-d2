const MyFooter = (props) => {
  console.log("FOOTER", props);
  return (
    <footer>
      <h4 className="fs-5">Diritti Riservati</h4>
      <p className="text-secondary">{props.firm}</p>
    </footer>
  );
};
export default MyFooter;
