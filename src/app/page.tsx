"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import html2canvas from "html2canvas";
import { Modal } from "antd";

export default function Home() {
  const [awardee, setAwardee] = useState("");
  const [days, setDays] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleDownload = () => {
    const element = document?.getElementById("downloadableDiv") as HTMLElement;

    html2canvas(element, {
      scale: 5,
    }).then((canvas) => {
      // Convert canvas to data URL
      const dataURL = canvas.toDataURL();

      // Create a link element
      const link = document.createElement("a");

      // Set the download attribute and convert data URL to Blob
      link.download = "downloaded_image.png";
      link.href = dataURL;

      // Trigger the download
      link.click();
    });
  };

  return (
    <main className="flex flex-col items-center justify-center py-12 overflow-x-hidden">
      <h2 className="font-bold text-4xl text-center ">
        StableNet Certificate Generator
      </h2>
      <div className="max-w-7xl w-full xl:grid grid-cols-2 xl:gap-96 justify-center px-2 flex flex-col items-center -mt-32">
        <div
          className="cert-bg w-[1056px] h-[750px] flex flex-col items-center gap-8 py-16 scale-[.35] md:scale-[.5]"
          id="downloadableDiv"
        >
          <div className="flex flex-col items-center gap-4">
            <Image src="/assets/badge.png" alt="badge" height={60} width={60} />
            <p className="text-5xl uppercase text-center leading-snug">
              Certificate <span className="block text-3xl">of completion</span>
            </p>
          </div>
          <div className="text-center space-y-4">
            <p className="text-4xl font-bold capitalize px-2">
              {awardee ? awardee : "Awardee Name"}
            </p>
            <p className="text-2xl">
              has successfully completed the {days ? days : 0}-day Training
              Combined and is now a
            </p>
          </div>
          <div className="">
            <p className="text-5xl font-bold text-[#1578af] text-center leading-[1.2]">
              STABLENET<span className="">®</span>
              <span className="block">CERTIFIED ENGINEER</span>
            </p>
          </div>
          <div className="relative flex flex-col justify-center items-center">
            <Image
              src="/assets/sig.png"
              alt="signature"
              height={200}
              width={200}
              className="absolute -mt-12"
            />
            <p className="text-2xl uppercase border-t border-black px-4 pt-2 mt-12">
              signature
            </p>
          </div>{" "}
          <div className="">
            <Image
              src="/assets/logo.png"
              alt="badge"
              height={200}
              width={200}
            />
          </div>
        </div>
        <Modal
          title="Basic Modal"
          open={isOpen}
          onCancel={() => setIsOpen(false)}
          onOk={handleDownload}
          okText={"Download"}
        >
          <div className="grid gap-4 mt-4">
            <div className="w-full grid gap-2">
              <label htmlFor="">Awardee Name</label>
              <input
                type="text"
                placeholder="Add name of Awardee"
                name=""
                id=""
                className="p-2 rounded w-full border outline-none hover:border-blue-500 duration-300"
                onChange={(e) => setAwardee(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="">Training Duration</label>

              <input
                type="number"
                placeholder="Add days of training"
                name=""
                id=""
                className="p-2 rounded w-full border outline-none hover:border-blue-500 duration-300"
                onChange={(e) => setDays(e.target.value)}
              />
            </div>
            {/* <button
              onClick={handleDownload}
              className="p-2 rounded w-full border outline-none bg-blue-500 hover:border-blue-500 duration-300 text-white uppercase font-bold mt-4"
            >
              download
            </button> */}
          </div>{" "}
        </Modal>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded w-full border outline-none bg-blue-500 hover:border-blue-500 duration-300 text-white uppercase font-bold -mt-48"
        >
          Add Awardee
        </button>
      </div>
    </main>
  );
}
