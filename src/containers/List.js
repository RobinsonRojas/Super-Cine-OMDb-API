import React from 'react'

import Card from '../components/Card/Card'

class List extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const res = await fetch('../../assets/data.json')
        const resJSON = await res.json()
        this.setState({ data: resJSON })
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.data.map(movie => {
                        return <Card movie={movie} />
                    })
                }
            </div>
        )
    }
}

export default List