import React from "react";

/**
 * @author
 * @function ContactUs
 **/

export const ContactUs = (props) => {
  return (
    <div className="page-details contact_page">
      <div>
        <form>
          <div>
            <input placeholder="Email address" required></input>
          </div>
          <div>
            <input placeholder="Subject"></input>
          </div>
          <div>
            <textarea placeholder="Enter message here ..."></textarea>
          </div>
          <div>
            <button>Send Email</button>
          </div>
        </form>
      </div>
    </div>
  );
};
