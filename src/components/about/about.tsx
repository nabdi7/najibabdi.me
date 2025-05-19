// import Image from "next/image";
import Link from "next/link";
import Work from "@/components/work/Work";

export default function About() {
  return (
    <>
      <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-start">
        <div className="flex-1">
          <p className="font-light space-y-4 text-muted-foreground">
            <span className="block">
              Hey, I&apos;m <span className="text-blue-500">Najib Abdi</span>. I
              am a Software Engineer and a Master&apos;s student in Computer
              Science at{" "}
              <a
                href="https://www.gatech.edu"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-blue-500"
              >
                Georgia Tech University
              </a>
              , specializing in Machine Learning.
            </span>

            <span className="block">
              My primary objective is to develop functional software solutions.
              I&apos;m passionate about Machine Learning, and Full-Stack
              development.
            </span>

            <span className="block">
              I attained a BS at the{" "}
              <a
                href="https://www.uwb.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                University of Washington
              </a>{" "}
              in Computer Science and a minor in Business Administration.
            </span>

            <span className="block">
              I have hands-on experience in full-stack web and mobile app
              development, as well as machine learning with a variety of
              programming languages and frameworks.
            </span>

            <span className="block">
              I have a passion for learning new libraries, languages, and
              frameworks, embracing challenges in software engineering. I enjoy
              solving complex problems, both independently and collaboratively.
            </span>

            <span className="block">
              In my free time, I enjoy writing and exploring the fascinating
              topics of physics, astronomy, and other scientific phenomena.
              Check out my{" "}
              <Link href="/blogs" className="text-blue-500">
                blogs
              </Link>{" "}
              to see what I&apos;ve been writing about.
            </span>
          </p>
        </div>
        {/* <div className="mb-4 md:mb-0">
          <Image
            className="rounded-lg grayscale"
            src="/najib.jpg"
            alt="Najib Abdi"
            width={175}
            height={175}
            priority
          />
        </div> */}
      </section>
      <Work />
    </>
  );
}
