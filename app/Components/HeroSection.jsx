"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import theme from '../theme';
import { Button } from '@chakra-ui/react';

const HeroSection = () => {
  const [isHireMeHovered, setIsHireMeHovered] = useState(false);
  const [isDownloadCVHovered, setIsDownloadCVHovered] = useState(false);

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-black mb-4 text-4xl lg:text-6xl font-extrabold">
            <div
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${theme.colors.blue.light}, ${theme.colors.blue.medium}, ${theme.colors.blue.dark})`,
              }}
            >
              {" "}
              Hello, I&apos;m{" "}
            </div>

            <TypeAnimation
              sequence={[
                "Victoria",
                1000,
                "Full Stack Developer",
                1000,
                "English Teacher",
                1000,
                "English-Spanish Translator",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
            &quot;Nothing is impossible, the word itself says &apos;I&apos;m
            possible.&apos;&quot; — Audrey Hepburn
          </p>

          <div className="flex flex-col lg:flex-row">
            <div className="flex container lg:py-4 flex-wrap items-center justify-center">
              <Link
                href={
                  "https://www.linkedin.com/in/mar%C3%ADa-victoria-correas-148049b2/"
                }
              >
                <Button
                  style={{
                    borderRadius: "40px",
                    padding: "30px",
                    backgroundColor: isHireMeHovered ? "pink" : theme.colors.darkRed,
                    border: theme.colors.darkRed,
                    color: "white",
                  }}
                  onMouseEnter={() => setIsHireMeHovered(true)}
                  onMouseLeave={() => setIsHireMeHovered(false)}
                >
                  Hire Me
                </Button>
              </Link>
              <br />
              <Link
                href={
                  "https://docs.google.com/document/d/1zfPcWKAGVxaABC14XVrj5TwG9Kj3l8SSabcTmzd-tuQ/edit?usp=sharing"
                }
              >
                <Button
                  style={{
                    borderRadius: "40px",
                    padding: "30px",
                    backgroundColor: isDownloadCVHovered ? "pink" : theme.colors.darkRed,
                    color: "white",
                    marginLeft: '10px'
                  }}
                  onMouseEnter={() => setIsDownloadCVHovered(true)}
                  onMouseLeave={() => setIsDownloadCVHovered(false)}
                >
                  Download CV
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div
            className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border-8 overflow-hidden"
            style={{
              backgroundColor: theme.colors.darkRed,
              borderColor: "#a72848",
            }}
          >
            <Image
              src="/ProfilePic.jpg"
              alt="portfolio"
              className="absolute left-0 top-0 w-full h-full object-cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
