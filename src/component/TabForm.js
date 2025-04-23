import Profile from "./Profile";
import Settings from "./Settings";
import Interests from "./Interests";
import { useState } from "react";

export default TabFrom = () => {
  // Store the data at the center place to handle it easily...
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Vishal Kr Verma",
    age: "22",
    email: "vishalkrverma302004@gmail.com",
    interests: ["coding", "music"],
    theme: "dark",
  });
  {
    /* We use config to make the form scalable and reliable  */
  }
  {
    /* Config is an array of the objects */
  }
  const [errors, setErorrs] = useState({});
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.name = "Email is not valid";
        }
        if (!data.age || data.age < 18) {
          err.name = "Age is not valid";
        }
        setErorrs(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleast one Interests";
        }
        setErorrs(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handleSubmitClick = () => {
    // Make API callback or perform the tasks...
    window.confirm("Are want to Submit ?");
  };
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          // this needs a callback fnx to execute the code in onClick event
          <div
            // here we use the key due to use of the Map...
            key={index}
            className="heading"
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        {/* Now pass the data into the activeComponents */}
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
};
