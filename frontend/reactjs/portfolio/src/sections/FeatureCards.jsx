import React from "react";
import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <section className="w-full px-5 md:px-20 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {abilities.map(({ imgPath, title, desc, tech }) => (
          <div
            key={title}
            className="card-border bg-black-100 rounded-xl p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 flex items-center justify-center mx-auto">
              <img src={imgPath} alt={title} className="object-contain w-10 h-10" />
            </div>
            <h3 className="text-white text-xl font-semibold text-center">{title}</h3>
            <p className="text-white-50 text-sm text-center">{desc}</p>
            {tech && (
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {tech.map((item, index) => (
                  <span
                    key={index}
                    className="text-xs border border-white-50 text-white-50 px-3 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
