React.createCreate({
  render: function() {
    return (
      <div>
        <h1>User Information</h1>
        <UserWidget name=this.props.name />
      </div>
    );
  }
});
