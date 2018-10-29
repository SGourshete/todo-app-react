const AllItems = (props) => {

  var items = props.items.map((item) => {
    return (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <label>{item.description}</label>
      </div>
    )
  })

  return (
    <div>
      {items}
    </div>
  )

}