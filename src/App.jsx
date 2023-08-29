import Cover from "./components/cover";
import InvitationDetail from "./components/invitation-detail";

import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center lg:justify-between">
      <Cover isOpen={isOpen} onOpen={() => setIsOpen(true)} />
      {isOpen && <InvitationDetail isOpen={isOpen} />}
    </div>
  );
}

export default App;
