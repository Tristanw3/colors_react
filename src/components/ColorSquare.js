import React from 'react'

// Create a new class that extends the React.Component
class ColorSquare extends React.Component {

    state = {
        backgroundColor: this.changeColor()
    }
    // The only thing your component absolutely needs is a render function that returns HTML.
    getColVal() {
        return Math.floor(Math.random() * 256);
    }
    changeColor() {
        return 'rgb(' + this.getColVal() + ',' + this.getColVal() + ',' + this.getColVal() + ')'
    }
    changeColorOnClick() {
        this.setState((state) => {
            return { backgroundColor: this.changeColor() }
        });
    }


    render() {

        let stylesObj = {
            backgroundColor: this.changeColor()
        }

        return (

            <div className="square" style={stylesObj} onClick={() => this.changeColorOnClick()}  >

            </ div >
        )
    }
}

export default ColorSquare;