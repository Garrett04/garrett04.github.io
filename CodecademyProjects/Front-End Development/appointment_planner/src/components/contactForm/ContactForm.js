import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name={name} onChange={({target}) => setName(target.value)} required />
        <input 
          name={phone} type="tel" 
          pattern="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$" // (+44)(0)20-12341234 | 02012341234 | +44 (0) 1234-1234 
          onChange={({target}) => setPhone(target.value)} required 
        />
        <input name={email} type="email" onChange={({target}) => setEmail(target.value)} required />
        <input type='submit'/>
      </form>
    </>
  );
};

