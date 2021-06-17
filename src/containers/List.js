import React, { Fragment } from "react";

import Card from "../components/Card/Card";

console.log(process.env.API);
const API = process.env.API;

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: "",
      error: "",
      loading: true,
    };
  }

  async componentDidMount() {
    const res = await fetch(`${API}&s=batman`);
    const resJSON = await res.json();
    console.log(resJSON);
    this.setState({ data: resJSON.Search, loading: false });
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (!this.state.searchTerm) {
      return this.setState({ error: "Por favor colocar un texto valido" });
    }

    const res = await fetch(`${API}&s=${this.state.searchTerm}`);
    const data = await res.json();

    if (!data.Search) {
      return this.setState({ error: "No hay resultados" });
    }
    this.setState({ data: data.Search, error: "", searchTerm: "" });
  }

  render() {
    const { data, loading } = this.state;
    if (loading) {
      return (
        <div>
          <h1 className="text-white">Loading...</h1>
        </div>
      );
    }
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-4 offset-md-4 p-4">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input
                type="text"
                className="form-control"
                placeholder="Buscar"
                onChange={(e) => this.setState({ searchTerm: e.target.value })}
                autoFocus
                value={this.state.searchTerm}
              />
            </form>
            <p className="text-white">
              {this.state.error ? this.state.error : ""}
            </p>
          </div>
        </div>
        <div className="row">
          {data.map((movie, i) => {
            return <Card movie={movie} key={i} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default List;
