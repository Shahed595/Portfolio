import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import projectsData from "../resources/projects";

const Project = () => {
  // const [projects,setProjects]=useState([]);
  // useEffect(()=>{
  //   fetch('projects.json')
  //   .then(res=>res.json())
  //   .then(data=>setProjects(data));
  // },[])
  return (
    <Layout>
      <div className="mt-20">
        <div className="h-screen">
          <div className="h-3/4">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_ygiuluqn.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <p className="text-xl font-semibold text-center">What I Know Is A Drop, What I Don't Know Is An Ocean</p>
          <h1 className="text-4xl text-center font-bold mt-5 ">Because</h1>
        </div>
        <div className="font-semibold text-center bg-red-500 mx-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5">
          <h1 className="text-7xl md:text-2xl">THE GAME IS...</h1>
          <h1 className="text-7xl md:text-2xl">CONSISTANCY</h1>
        </div>
      </div>


      <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-5 mx-20 md:mx-5 mb-10">
          {
            projectsData.map(project=>{
              return <div>
                <div className=" relative p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400">
                <img src={project.image} height="200" width="200" alt=""/>
                <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80">
                  <h1 className="text-2xl font-semibold text-white">{project.title}</h1>
                  <button className="border-5 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white"><a target="_blank" href={project.link}>DEMO</a></button>
                </div>
                </div>
              </div>
            })
          }
      </div>
    </Layout>
  );
};

export default Project;
