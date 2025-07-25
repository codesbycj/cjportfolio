import React from "react";
import me from "../assets/Okeke_Memoji.png";

export const Hero = () => {
  return (
    <div className="h-screen bg-black text-white flex items-center justify-center flex-col gap-8">
      <div className="flex items-center gap-7">
        <div className="rounded-full flex items-center justify-center w-20 h-20
        bg-white">
          <img src={me} alt="" className="object-contain mt-3" />
        </div>
        <p className="text-lg font-bold border border-gray-400 p-3 rounded-xl">I'm Gabokeke Emmanuel</p>
      </div>

      <div className="text-center">
        {/* <p className="text-4xl">A</p> */}
        <h1 className="text-9xl font-semibold">FRONT-END</h1>
        <h1 className="text-9xl font-semibold">DESIGNER</h1>
        <h1 className="text-9xl font-semibold">& DEVELOPER</h1>
      </div>

      <div className="text-center">
        <p className="text-4xl">I create and have created scalable applications <br />that borders
          on efficiency, aesthetics & functionality
        </p>
      </div>

      <div>
        <h1>Essential Tools I Use</h1>
        <p>Discover the powerful tools and technologies I use to create exceptional,
           high-performing websites & applications</p>

        <div>
          <div>
            <img src="" alt="" />
            <div>
              <p>CSS3</p>
              <p>User Interface</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
