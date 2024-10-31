const Contact = () => {
  return (
    <main>
      <section className="bg-green-100 text-center py-16 px-8 lg:px-24">
        <h1 className="question">Got Question?</h1>
        <p>
          Get in touch with resikel team and we’ll get back to you and help as
          soon as we can!
        </p>
      </section>
      <section className="bg-white text-center py-16 px-8 lg:px-24 text-xl font-bold">
        <h2>Frequently Asked Questions</h2>

        {/* Accordion Faq */}
        <div className="py-8 text-left">
          <div className="collapse collapse-arrow bg-white border rounded-lg my-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl text-gray-700 font-semibold">
              Apa itu Resikel?
            </div>
            <div className="collapse-content">
              <p className="font-light text-gray-600">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. make up the bulk of the card's
                content. card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Make up the bulk of the card's
                content. Some quick example text to build on the. make up the
                bulk of the card's content.Some quick example text to build on
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white border rounded-lg my-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-gray-700 font-semibold">
              Apa itu sampah?
            </div>
            <div className="collapse-content">
              <p className="font-light text-gray-600">hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white border rounded-lg my-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-gray-700 font-semibold">
              Apa jenis sampah?
            </div>
            <div className="collapse-content">
              <p className="font-light text-gray-600">hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white border rounded-lg my-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-gray-700 font-semibold">
              Apa itu pengolahan sampah?
            </div>
            <div className="collapse-content">
              <p className="font-light text-gray-600">hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white border rounded-lg my-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-gray-700 font-semibold">
              Bagaimana cara menggunakan Resikel?
            </div>
            <div className="collapse-content">
              <p className="font-light text-gray-600">hello</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Contact */}
      <section className="bg-gray-100 text-center py-8 px-8 lg:px-24 text-xl font-bold">
        <h2>Contact</h2>
        <div className="py-8">
          <form className="space-y-4 flex flex-col items-center">
            <div className="text-left w-4/5 py-4">
              <label className="font-light text-gray-600 pb-8">Your Name</label>
              <input
                type="text"
                className="block w-full border border-gray-300 rounded-md p-3"
              />
            </div>
            <div className="text-left w-4/5 py-4 mt-3">
              <label className="font-light text-gray-600 pb-8">
                Your Email
              </label>
              <input
                type="email"
                className="block w-full border border-gray-300 rounded-md p-3"
              />
            </div>
            <div className="text-left w-4/5 py-4">
              <label className="font-light text-gray-600 pb-8">
                What would you like to learn?
              </label>
              <textarea
                type="textarea"
                className="block w-full border border-gray-300 rounded-md p-4"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-300 text-white py-2 px-16 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
