import React from "react";

export const ContactPicker = ({
  contacts,
  onChange,
  value,
  name
}) => {
  return (
    <select 
      name={name} 
      onChange={onChange}
      value={value}
    >
      <option value="">--No Contact Selected--</option>
      {contacts.map((item, index)=>(
        <option key={index}>{item.name}</option>
      ))}

    </select>
  );
};
