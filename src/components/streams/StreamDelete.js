import React from 'react';
import Modal from '../Modal';
import history from '../../history';
const StreamDelete=()=>{
    const actions=(
        <div>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>

        </div>
    );
    return (
    <div>StreamDelete
        <Modal title="Delete Stream" content="Are You Sure You Want To Delete This Stream?"
        actions={actions}
        onDismiss={()=>history.push('/')}
        />
    </div>)
}
export default StreamDelete;