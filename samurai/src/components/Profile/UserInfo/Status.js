import React from "react";

class Status extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        console.log(this);
       this.setState(
           {
               editMode: true
           }
       )
    }

    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
    }
    render() {
        return (
            <div className='status'>
                {
                    !this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode} className="status-text">
                        {this.props.status || 'Введите ваш статус'}
                    </div>
                }
                {
                    this.state.editMode &&
                    <div className="status-edit">
                        <input  autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} type="text"/>
                    </div>
                }

            </div>
        )
    }
}

export default Status;