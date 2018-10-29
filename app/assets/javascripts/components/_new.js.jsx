const New = (props) => {
  return(
    <div>
      <h2>Add new Item in TODO list</h2>
      <div class="add_item">
        <div className={'Name'}>
          <label>Name: </label>
          <input type={'text'} className={'input_name'}></input>
        </div>
        <br/>
        <div className={'desc'}>
          <label>Desc:</label>
          <textarea className={'input_desc'}></textarea>
        </div>
        <div>
          <button onClick={'/home/index'}>Add</button>
          <button><a href={'/home/index'}>New Button </a></button>
        </div>
      </div>
    </div>
  )
}