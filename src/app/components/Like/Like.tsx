'use client'

import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
    onClick: () => void;
}

const Like = ({onClick}: Props) => {
    const [full, setFull] = useState(false);

    const toggle = () => {
        setFull(!full);
        onClick();
    }

    if (full) 
        return <AiFillHeart color='ff6b81' size={20} onClick={toggle}></AiFillHeart>
    return <AiOutlineHeart size={20} onClick={toggle}></AiOutlineHeart>
};


export default Like