'use client'

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BsCalendarFill } from "react-icons/bs";
import Like from "./components/Like";

export default function Page() {
  const [alertVisible, setAlertVisiblity] = useState(false);
  // let items = [
  //   'New Orleans',
  //   'San Deigo',
  //   'Tokyo'
  // ]
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  return (
    <div>
      <Like onClick={() => console.log('pressed')}></Like>
        {
          /* 
          {alertVisible && <Alert color="success" onClose={() => setAlertVisiblity(false)}>You touched the butt</Alert>}
          <Button color="success" onClick={()=> setAlertVisiblity(true)}>Butt</Button>
          <ListGroup items ={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup> 
          <BsCalendarFill color = 'red' size = '40'></BsCalendarFill>
          */
        }
    </div>
  );
}