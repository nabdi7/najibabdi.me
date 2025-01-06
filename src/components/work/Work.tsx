"use client";
import React from "react";
import { workData, educationData } from "./index";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const Work = () => {
  return (
    <section className="">
      {/* Work experience */}
      <div className="mb-12">
        <h1 className="text-2xl font-bold no-underline">Work Experience</h1>
        <p className="mt-3 font-light text-muted-foreground">
          My professional work journey.
        </p>
        <div className="mt-8 space-y-8">
          {workData.map((job, index) => (
            <div className="group relative flex gap-x-5" key={index}>
              <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-border">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <Image
                    className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-lg"
                    src={job.imageUrl}
                    alt={`${job.company} Image`}
                    height={500}
                    width={300}
                  />
                </div>
              </div>
              <div className="grow pb-8 group-last:pb-0">
                <h3 className="mb-1 text-sm font-light text-muted-foreground">
                  {job.date}
                </h3>
                <p className="font-semibold text-foreground">
                  {job.position}{" "}
                  <span className="text-blue-500">@ {job.company}</span>
                </p>
                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                  {job.achievements.map((achievement, i) => (
                    <li
                      className="ps-1 font-light text-muted-foreground"
                      key={i}
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h1 className="text-2xl font-bold no-underline">Education</h1>
        <div className="grid md:grid-cols-1 gap-4 mt-8">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="border-0 border-t border-b dark:border"
            >
              <CardContent className="pt-6">
                {edu.svgIcon}
                <h3 className="mb-1 text-sm font-light text-muted-foreground">
                  {edu.date}
                </h3>
                <p className="font-semibold text-foreground">{edu.degree}</p>
                <p className="mt-1 font-light text-muted-foreground">
                  {edu.institute}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
