import React, { useState } from 'react';

const CreateNote = (props) => {

    const [item, setItem] = useState({
        title: '',
        content: ''
    })

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setItem(
            (preData) => {
                return {
                    ...preData, 
                    [name]: value,
                }
            }
        )

    }

    const sendNote = () => {
        props.passNote(item);

        setItem(
            {
                title: '',
                content: '',
            }
        );
    }

    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <input value={item.title} name='title' type='text' className='card-title' placeholder='Title' onChange={inputEvent} />
                    <textarea value={item.content} name='content' className='card-subtitle' placeholder='Write a Note' onChange={inputEvent}></textarea>
                    <br />
                    <button className='button' onClick={sendNote}>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <br />
        </>
    )
}

export default CreateNote;