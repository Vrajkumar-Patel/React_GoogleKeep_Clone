import React, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';

const App = () => {

    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        setAddItem(
            (oldItems) => {
                return [...oldItems, note];
            }
        );
    };

    const onDelete = (id) => {
        setAddItem(
            (oldData) => {
                return (
                    oldData.filter(
                        (data, i) => {
                            return i !== id;
                        }
                    )
                )
            }
        )
    }

    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />

            {
                addItem.map(
                    (val, index) => {
                        return (
                            <Note
                                key={index}
                                id={index}
                                title={val.title}
                                content={val.content}
                                deleteItem={onDelete}
                            />
                        )
                    }
                )
            }


            <Footer />
        </>
    )
};

export default App; 