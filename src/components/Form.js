import React from 'react';
import Downshift from 'downshift';
import {all as starWarsNames} from 'starwars-names'
import {matchSorter} from 'match-sorter'
import { useState } from 'react';


const items = starWarsNames.map(name => ({
    value: name,
    id: name.toLowerCase(),
}))

const getItems = value => value ? matchSorter(items, value, {keys: ['value']}) : items

const itemToString = item => item ? item.value : ''

class Form extends React.Component {
    render() {
        return (
            <div>
                <h1>Autocomplete Rocks</h1>
                <div>
                    <Downshift itemToString={itemToString}>
                        {({
                            getLabelProps, 
                            getInputProps, 
                            getMenuProps, 
                            getItemProps,
                            getToggleButtonProps,
                            highlightedIndex,
                            selectedItem,
                            clearItem,
                            isOpen, 
                            inputValue,
                        }) => (
                            <div>
                                <label {...getLabelProps()} >Star Wars Character</label>
                                <input {...getInputProps()} />
                                <button {...getToggleButtonProps()}>
                                    {isOpen ? 'close' : 'open'}
                                </button>
                                {selectedItem ? <button onClick={clearItem}>X</button> : null }
                                <ul {...getMenuProps()}>
                                    {isOpen 
                                    ? getItems(inputValue).map((item, index) => (
                                        <li key={item.id} {...getItemProps({item, key:item.id, style: {
                                            backgroundColor: index === highlightedIndex ? 'lightgray' : null,
                                        }})}>{item.value}</li>
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