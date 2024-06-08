'use client'

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

export default function Page() {
  const [alertVisible, setAlertVisiblity] = useState(false);

  return (
    <div>
        {alertVisible && <Alert color="success" onClose={() => setAlertVisiblity(false)}>You touched the butt</Alert>}
        <Button color="success" onClick={()=> setAlertVisiblity(true)}>Butt</Button>
    </div>
  );
}