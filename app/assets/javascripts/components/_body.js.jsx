class Body extends React.component{

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/todos.json')
      .then((responce)=>{return responce.json()})
      .then((data)=>{this.setState({items: data})});
  }

  render(){
    return(
      <div>
        <AllItems items={this.state.items} />
      </div>
    )
  }

}