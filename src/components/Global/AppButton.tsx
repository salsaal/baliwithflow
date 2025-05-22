import React from "react";

function AppButton({ title }: { title: string }) {
  return (
    <button className="px-5 py-2 bg-primary text-white rounded-xl cursor-pointer max-lg:text-2xl max-lg:py-4 max-lg:px-6">
      {title}
    </button>
  );
}

export default AppButton;
