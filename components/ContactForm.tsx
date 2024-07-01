import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section className="flex justify-center items-center py-12 bg-textlightGray">
      <div className="max-w-xl w-full mx-auto bg-[#4B69E8] rounded-lg overflow-hidden py-8 px-10 animate__animated animate__zoomIn">
        <form className="space-y-4 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-center text-white">
            Request a plumbing service call today
          </h2>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 px-3 py-4 w-full border-2 rounded-md border-white bg-transparent text-white placeholder-white text-xs"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              className="mt-1 px-3 py-4 w-full border-2 rounded-md border-white bg-transparent text-white placeholder-white text-xs"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 px-3 py-4 w-full border-2 rounded-md border-white bg-transparent text-white placeholder-white text-xs"
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 px-3 py-4 w-full border-2 rounded-md border-white bg-transparent text-white placeholder-white text-xs"
              placeholder=" message"
            />
          </div>
          <div className="text-start">
            <button
              type="submit"
              className="bg-bprimary text-white py-2 px-12 rounded-2xl font-normal text-xs hover:bg-[#FEC32C]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
