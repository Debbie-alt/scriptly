import React from "react";

const FreeVsPaid = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-6 text-[#3b2e7e]">Free vs Paid Features</h1>
    <p className="mb-4 text-gray-800">Scriptly offers both free and premium features:</p>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      <li><span className="font-semibold">Free:</span> Basic essay writing, AI tools with daily limits, and grammar checks.</li>
      <li><span className="font-semibold">Paid:</span> Unlimited access, advanced research tools, priority support, and expert review.</li>
    </ul>
    <p className="mt-4 text-gray-700">See our <a href="/resources#pricing" className="text-[#3b2e7e] underline">pricing page</a> for full details.</p>
  </div>
);

export default FreeVsPaid;
