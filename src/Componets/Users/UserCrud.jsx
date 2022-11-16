import React, { Component } from "react";
import Main from "../template/Main";

const headeProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: incluir, listar , alterar excluir",
};
const baseUrl = "http://localhost:3001/users";
const initialState = {
  user: { name: "", email: "" },
  list: [],
};

export default class UserCrud extends Component {
  state = { ...initialState };
  componentWillUnmount(){
    axios(baseUrl).then( resp => {
        this.setState({list: resp.data})
    })

  }
  clear() {
    this.setState({ user: initialState.user });
  }

  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? "$(baseUrl)/user.id" : baseUrl;
    acios[method](url, user).then((respo) => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ user: initialState.user, list });
    });
  }
  getUpdatedList(user) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    list.unshift(user);
  }
  updateFild(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }
  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onRateChange={(e) => this.updateFild(e)}
                placeholder="Digite o nome..."
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="fom-group"></div>
            <label>E-mail</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={this.state.user.email}
              onChange={(e) => this.updateFild(e)}
              placeholder="Digite o e-mail...."
            />
          </div>
          <hr />
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <button className="btn btn-primary" onClick={(e) => this.save(e)}>
                salvar
              </button>
              <button
                className="btn btn-secondary ml-2"
                onClick={(e) => this.save(e)}
              >
                cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

    load(user){
        this.setState({user})
    }
    remove(user){
        axios.delete('${baseUrl}/${user.id}').then (resp =>{
            const list = this.state.list.filter(u => u !==user)
        })
    }
    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <tr>Nome</tr>
                        <tr>E-mail</tr>
                        <tr>Ações</tr>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
    renderRows(){
        return this.state.list.map(user =>{
           return(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
            
           ) 
        })
    }
  render() {
    return <Main {...headeProps}>{this.renderForm()}</Main>;
  }
}
