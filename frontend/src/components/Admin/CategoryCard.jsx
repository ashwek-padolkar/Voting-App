import React from "react";

const CategoryCard = ({ count, label, href, extra }) => {
  return (
    <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
      <div className="flex justify-between mb-6">
        <div>
          <div className="flex items-center mb-1">
            <div className="text-2xl font-semibold">{count}</div>
            {extra && (
              <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                {extra}
              </div>
            )}
          </div>
          <div className="text-sm font-medium text-gray-400">{label}</div>
        </div>
      </div>

      <a
        href={href}
        className="text-[#f84525] font-medium text-sm hover:text-red-800"
      >
        View
      </a>
    </div>
  );
};

export default CategoryCard;
