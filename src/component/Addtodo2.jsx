function Todoitem2() {
  let todoName = 'Go to College';
  let todeDate = '04/10/22';
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todeDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem2;
