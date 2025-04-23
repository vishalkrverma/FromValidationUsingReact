export default Profile = ({ data, setData, errors }) => {
  const { name, email, age } = data;
  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label> Name : </label>

        <input
          type="text"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label> Email : </label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label> Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />
        {errors.age && <span className="error">{errors.name}</span>}
      </div>
    </div>
  );
};
