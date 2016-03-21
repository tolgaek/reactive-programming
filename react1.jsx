React.createCreate({
  getDefaultState: function() {
    return {
      name: 'Tolga'
    }
  },

  render: function() {
    return (
      <div>
        <h1>User Information</h1>
        <UserWidget name=this.state.name />
      </div>
    );
  }
});
