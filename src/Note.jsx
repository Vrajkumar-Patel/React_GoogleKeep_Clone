import React from 'react';

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    };

    return (
        <>
            <div className='note-box'>
                <h3 className='word-wrap'>{props.title}</h3>
                <p className='word-wrap'>{props.content}</p>
                <button className='delete-btn' onClick={deleteNote}>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        </>
    )
}

export default Note;