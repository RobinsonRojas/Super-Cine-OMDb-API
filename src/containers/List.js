import React, { Fragment } from 'react'

import Card from '../components/Card/Card'

const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=14744ce2'

class List extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            searchTerm: '',
            error: ''
        }
    }

    async componentDidMount() {
        //const res = await fetch('../../assets/data.json')
        const res = await fetch(`${API}&s=batman`)
        const resJSON = await res.json()
        console.log(resJSON)
        this.setState({ data: resJSON.Search })
    }

    async handleSubmit(e) {
        e.preventDefault()
        if (!this.state.searchTerm) {
            return this.setState({ error: 'Por favor colocar un texto valido' })
        }

        const res = await fetch(`${API}&s=${this.state.searchTerm}`)
        const data = await res.json();

        if (!data.Search) {
            return this.setState({ error: 'No hay resultados' })
        }
        this.setState({ data: data.Search, error: '', searchTerm: ''})
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-4 offset-md-4 p-4">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar"
                                onChange={e => this.setState({ searchTerm: e.target.value })}
                                autoFocus
                                value={this.state.searchTerm}
                                />
                        </form>
                        <p className="text-white">
                            {this.state.error ? this.state.error : ''}
                        </p>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.data.map((movie, i) => {
                            return <Card movie={movie} key={i}/>
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default List