function List(props) {
  const fru = props.items;
  const cato = props.cata;

  const Listitems = fru.map((items) => (
    <li key={items.id}>
      {items.name}: &nbsp; <b>{items.health}</b>
    </li>
  ));
  return (
    <>
      <h2 className="header">{cato}</h2>
      <ol className="lists">{Listitems}</ol>
    </>
  );
}
export default List;
