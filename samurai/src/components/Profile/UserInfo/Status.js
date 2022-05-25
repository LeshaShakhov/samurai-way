import React from "react";

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.status !== prevProps.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () => {
       this.setState(
           {
               editMode: true
           }
       )
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }
    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    render() {
        return (
            <div className='status'>
                {
                    !this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode} className="status-text">
                        {this.state.status || 'Введите ваш статус'}
                    </div>
                }
                {
                    this.state.editMode &&
                    <div className="status-edit">
                        <input
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                            onChange={(e)=>{this.onChangeStatus(e)}}
                            type="text"
                        />
                    </div>
                }

            </div>
        )
    }
}

export default Status;