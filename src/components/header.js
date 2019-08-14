import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {search : ""}
    }

    clickHandler = (event)=>{
        this.setState({
            search : event.target.value
        })
    }
    render(){
        return(   
            <div> 
                <div className="container-fluid bg-info">
                    <nav className="nav-bar px-3">
                        <form className="form-inline mr-auto text-white p-2">
                            <h3 className="mr-auto" >News React</h3>
                            <input onChange={this.clickHandler} className="form-control col-3 form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                            <i className="fas fa-search" aria-hidden="true"></i>
                        </form>
                    </nav>
                </div>
                <div className="container">
                    <section>{this.state.search}</section>
                </div>
            </div>                    
        )
    }
}
export default Header;   