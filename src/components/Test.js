import React, { useState } from "react";


function Test() {
    const [name, setName] = useState('')
  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
    </div>
  );
}

export default Test;
