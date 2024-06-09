'use client'

import { useState } from "react";
import styled from 'styled-components';


const List = styled.ul`
    list-style: none;
    padding: 0;
`;

interface ListItemProps {
    active: boolean;
}

const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${props => props.active ? 'blue' : 'none'};
`;
interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

export default function ListGroup({items, heading, onSelectItem}: Props) {
    const  [selectedIndex, setSelectedIndex] = useState(-1);

    const message = items.length === 0 && <p>No Item Found</p>;

    return (
        <>
            <h1>{heading}</h1>
            { message }
            <List> 
                {items.map((item, index) => (
                    <ListItem
                        active={index === selectedIndex}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                        >
                            {item}
                    </ListItem>
                ))}
            </List>
        </>
    );
}