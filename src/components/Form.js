import React from 'react';
import Downshift from 'downshift';
import {all as starWarsNames} from 'starwars-names'

const items = starWarsNames.map(name => ({
    value: name,
    id: name.toLowerCase(),
}))

const itemToString = item => item ? item.value : ''

class Form extends React.Component {
    render() {
        return (
            <div>
                <h1>Autocomplete Rocks</h1>
                <div>
                    <Downshift itemToString={itemToString}>
                        {({getLabelProps, getInputProps, getMenuProps, isOpen, selectItem}) => (
                            <div>
                                <label {...getLabelProps()} >Star Wars Character</label>
                                <input {...getInputProps()} />
                                <ul {...getMenuProps()}>
                                    {isOpen ? items.map(item => (
                                        <li key={item.id} onClick={() => selectItem(item)}>{item.value}</li>
                                    )) : null}
                                </ul>
                            </div>
                        )}
                    </Downshift>
                </div>
            </div>
        )
    }
}

export default Form