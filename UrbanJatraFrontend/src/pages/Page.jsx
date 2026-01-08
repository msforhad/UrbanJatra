import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen px-4 md:px-10 py-10 bg-white text-black">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Page</h1>
        <p className="text-gray-600">This is a sample static page.</p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
          officia. This page can be used for About, Policy, Terms & Conditions
          or any custom content.
        </p>

        <p className="text-gray-700 leading-relaxed">
          You can freely customize this page content based on your project
          needs. Add text, images, sections or components.
        </p>

        <div className="border p-5 rounded bg-gray-100">
          <h2 className="text-2xl font-semibold mb-2">Why this page?</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Custom Information</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
