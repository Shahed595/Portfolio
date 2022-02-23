import React from "react";
import Layout from "../components/Layout";
import { FaReact, FaJava, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
// import portfolioImages from '../shahedProfile.JPG'

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="h-screen bg-theme">
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0 border-white transform rotate-12 md:rotate-0 mx-5 z-10 bg-theme">
            <div className="h-1/2">
              <lottie-player
                src="https://assets9.lottiefiles.com/private_files/lf30_WdTEui.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="font-bold md:px-5 text-white">
              <h1 className="text-6xl md:text-4xl">
                Hi, I am <b className="text-yellow-500">SHAHED</b>
              </h1>
              <h1 className="text-4xl md:text-xl">
                Mern-Stack <b className="text-red-500">Developer</b> Competitive{" "}
                <b className="text-orange-500">Programmer</b>
              </h1>
            </div>
          </div>
        </div>
        {/* technologies */}
        <div className="mt-20">
          <h1 className="text-4xl text-blue-800 font-bold text-center my-8">
            Technologies I Use
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <FaReact
              size={180}
              color="#61DBFB"
              className="w-full text-center mt-20"
            />
            <FaJava
              size={180}
              color=" #D0A384"
              className="w-full text-center mt-20
              animate-bounce"
            />
            <DiJavascript1
              size={180}
              color="#F0DB4F"
              className="w-full text-center
              mt-20
              animate-bounce"
            />
            <FaHtml5
              size={180}
              color="#F06529"
              className="w-full text-center mt-20"
            />
            <FaNodeJs
              size={180}
              color="#68A063"
              className="w-full text-center mt-20
              animate-bounce"
            />
            <SiFirebase
              size={180}
              color="#FFA611"
              className="w-full text-center
              mt-20"
            />

            <FaCss3Alt
              size={180}
              color="#FF8A27"
              className="w-full text-center
              mt-20"
            />

            <DiMongodb
              size={180}
              color="#4DB33D"
              className="w-full text-center
              mt-20
              animate-bounce"
            />
          </div>
        </div>
        {/* mern-stack buff */}
        <div className="my-20">
          <div className="text-center h-52 bg-primary">
            <h1 className="text-white font-bold text-4xl py-10">
              I Am A<b className="text-orange-500"> MERN-STACK</b> BUff
            </h1>
          </div>
          <div className="md:mx-5 mx-32 bg-gray-50 shadow-2xl -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_sSF6EG.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <p className="text-xl my-5 font-semibold md:px-5 px-14 py-10">
              React is a JavaScript library created by Facebook React is a User
              Interface (UI) library React is a tool for building UI components.
            </p>
          </div>
        </div>
        {/* dev-stack section */}
        <div className="my-20">
          <div className="text-center h-52 bg-red-500">
            <h1 className="text-white font-bold text-4xl py-10">
              My DEVELOPMENT Stack
            </h1>
          </div>
          <div className="md:mx-5 mx-32 bg-gray-50 shadow-2xl -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_xrmk3h1x.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-3 p-5">
              <div>
                <h1 className="text-xl font-bold">Front End</h1>
                <hr />
                <p className="font-semibold mt-2">HTML5/CSS3</p>
                <p className="font-semibold mt-2">JAVASCRIPT</p>
                <p className="font-semibold mt-2">REACT</p>
                <p className="font-semibold mt-2">REDUX</p>
              </div>
              <div className="text-center">
                <h1 className="text-xl font-bold">UI / UX</h1>
                <hr />
                <p className="font-semibold mt-2">BOOSTRAP</p>
                <p className="font-semibold mt-2">TAILWIND</p>
                <p className="font-semibold mt-2">MUI</p>
                <p className="font-semibold mt-2">REACT HOOK FORM</p>
              </div>
              <div className="text-right">
                <h1 className="text-xl font-bold">Backend and DB</h1>
                <hr />
                <p className="font-semibold mt-2">NODE JS</p>
                <p className="font-semibold mt-2">EXPRESS JS</p>
                <p className="font-semibold mt-2">FIREBASE</p>
                <p className="font-semibold mt-2">MONGO DB</p>
              </div>
            </div>
          </div>
        </div>
        {/* dev info */}
        <div>
          <h1 className="text-4xl text-gray-500 text-center font-bold">
            Who is Shahed ?
          </h1>
          <div className="h-screen relative text-gray-800">
            <div className="h-full">
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_dcatp5cr.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">
                Hi, Hello, AssalamuAlaikum...
                <hr />
                <pre className="text-xl md:text-sm my-5 font-mont font-semibold ">
                  {JSON.stringify(
                    {
                      name: "Shahed Ahmed",
                      age: "21",
                      gender: "Male",
                      country: "Bangladesh",
                    },
                    null,
                    2
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
