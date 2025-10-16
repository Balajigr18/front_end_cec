import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard";
// import ListExample from "./components/ListExample";
// import TableExample from "./components/TableExample";
import FormExample from "./components/Form";
// import AdvancedList from "./components/AdvancedList";
// import AdvancedForm from "./components/AdvancedForm";

function App() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div style={{ padding: "10px" }}>
      <h1>React Components Demo</h1>

      {/* Nav Tabs */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("form")}>Form</button>
        {/* <button onClick={() => setActiveTab("list")}>List</button>
        <button onClick={() => setActiveTab("table")}>Table</button>
        <button onClick={() => setActiveTab("advancelist")}>advancelist</button>
        <button onClick={() => setActiveTab("advanceform")}>advanceform</button> */}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "profile" && <ProfileCard />}
        {activeTab === "form" && <FormExample />}
        {/* {activeTab === "list" && <ListExample />}
        {activeTab === "table" && <TableExample />}
        {activeTab === "advancelist" && <AdvancedList />}
        {activeTab === "advanceform" && <AdvancedForm />} */}
      </div>
    </div>
  );
}

export default App;

