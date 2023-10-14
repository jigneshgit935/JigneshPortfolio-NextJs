import Image from 'next/image';

const Skills = () => {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="skills"
    >
      <div className="max-w-[1250px] mx-auto">
        <div className="inline-block">
          <p className="section-title">
            <span className="mb-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0 L16 8 L8 16 L0 8 L8 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            Skills
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 grid-cols-2 max-xs:grid-cols-1 mt-10">
          <div className="bg-light-bg p-8 rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image
              src={'/assets/html.png'}
              width={100}
              height={100}
              alt="html"
            />
            <span>HTML</span>
          </div>
          <div className="bg-light-bg p-8 rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image src={'/assets/css.png'} width={100} height={100} alt="css" />
            <span>CSS</span>
          </div>
          <div className="bg-light-bg p-8 rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image src={'/assets/js.png'} width={100} height={100} alt="js" />
            <span>Javascript</span>
          </div>
          <div className="bg-light-bg p-8 rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image
              src={'/assets/react.png'}
              width={100}
              height={100}
              alt="react"
            />
            <span>ReactJS</span>
          </div>
          <div className="bg-light-bg p-8 rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image
              src={'/assets/node.png'}
              width={100}
              height={100}
              alt="node"
            />
            <span>NodeJS</span>
          </div>
          <div className="bg-light-bg p-8 rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image
              src={'/assets/mongo.png'}
              width={100}
              height={100}
              alt="mongo"
            />
            <span>MongoDB</span>
          </div>
          <div className="bg-light-bg p-8 rounded-md text-center flex flex-col items-center shadow-sm justify-center">
            <Image src={'/assets/git.png'} width={100} height={100} alt="git" />
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
