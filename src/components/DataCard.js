import React from 'react'

// Create a new class that extends the React.Component
class DataCard extends React.Component {
    // The only thing your component absolutely needs is a render function that returns HTML.
    getCkanData() {
        fetch('https://data.nsw.gov.au/data/api/3/action/package_search?rows=10', {
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            credentials: 'omit',
            mode: 'cors'
            // body: {
            //     "test": "test"
            // }
        })
            .then((res) => res.json())
            .then((myJson) =>
                console.log(JSON.stringify(myJson))
            )
    }

    render() {
        return (
            <div className="card">
                {this.getCkanData()}
            </div>
        )
    }
}

export default DataCard