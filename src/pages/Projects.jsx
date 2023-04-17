import React, { useEffect } from 'react'
import o3 from "../assets/gallery/03.jpg";
import o4 from "../assets/gallery/04.jpg";
import o5 from "../assets/gallery/05.jpg";
import o8 from "../assets/gallery/08.jpg";
import o10 from "../assets/gallery/10.jpg";
import o31 from "../assets/gallery/31.jpg";
import o24 from "../assets/gallery/24.jpg";
import o13 from "../assets/gallery/13.jpg";
import o14 from "../assets/gallery/14.jpg";
import o15 from "../assets/gallery/15.jpg";
import o16 from "../assets/gallery/16.jpg";
import o17 from "../assets/gallery/17.jpg";
import o18 from "../assets/gallery/18.jpg";
import o19 from "../assets/gallery/19.jpg";
import o20 from "../assets/gallery/20.jpg";
import o21 from "../assets/gallery/21.jpg";
import o23 from "../assets/gallery/23.jpg";
import image1 from "../assets/gallery/project-image -1.jpg";
import image3 from "../assets/gallery/project-image -3.jpg";
import image5 from "../assets/gallery/project-image -5.jpg";
import image6 from "../assets/gallery/project-image -6.jpg";
import image7 from "../assets/gallery/project-image -7.jpg";
import image8 from "../assets/gallery/project-image -8.jpg";
import image11 from "../assets/gallery/project-image -11.jpg";
import image13 from "../assets/gallery/project-image -13.jpg";
import image15 from "../assets/gallery/project-image -15.jpg";
import image16 from "../assets/gallery/project-image -16.jpg";
import image17 from "../assets/gallery/project-image -17.jpg";
import image18 from "../assets/gallery/project-image -18.jpg";
import image19 from "../assets/gallery/project-image -19.jpg";
import image20 from "../assets/gallery/project-image -20.jpg";
import image21 from "../assets/gallery/project-image -21.jpg";
import image23 from "../assets/gallery/project-image -23.jpg";
import image26 from "../assets/gallery/project-image -26.jpg";
import bs1 from "../assets/gallery/bussa1.jpg";
import bs2 from "../assets/gallery/bussa2.jpg";
import bs3 from "../assets/gallery/bussa3.jpg";
import bs4 from "../assets/gallery/bussa4.jpg";
import bs5 from "../assets/gallery/bussa5.jpg";
import bs6 from "../assets/gallery/bussa6.jpg";
import bs7 from "../assets/gallery/bussa7.jpg";
import bs8 from "../assets/gallery/bussa8.jpg";
import bs9 from "../assets/gallery/bussa9.jpg";
import bs10 from "../assets/gallery/bussa10.jpg";
import bs11 from "../assets/gallery/bussa11.jpg";
import bs12 from "../assets/gallery/bussa12.jpg";
import bs13 from "../assets/gallery/bussa13.jpg";
import bs14 from "../assets/gallery/bussa14.jpg";
import bs15 from "../assets/gallery/bussa15.jpg";
import bs16 from "../assets/gallery/bussa16.jpg";
import bs17 from "../assets/gallery/bussa17.jpg";
import bs18 from "../assets/gallery/bussa18.jpg";
import bs19 from "../assets/gallery/bussa19.jpg";
import bs20 from "../assets/gallery/bussa20.jpg";
import bs21 from "../assets/gallery/bussa21.jpg";
import img8 from "../assets/images/project-image-8.jpeg"
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";


function Projects() {

    useEffect(() => {
      Aos.init({ duration: 2000 }, []);
    });
  return (
    <div className="md:mt-36 mt-16 font-monserrat">
      <div className="col-span-12 md:mt-11 mt-11 bg-slate-900 text-white">
        <div className="flex md:w-[50%] mx-auto flex-col items-start justify-center -mt-20 md:-mt-40 text-xl p-6 md:p-20 mb-10">
          <div className="text-lg font-semibold md:text-3xl">
            <p>
              Over the years we are know for offering a satisfactory,
              exceptional, quality service and uncompromising integrity in all
              our civil engineering and electrical services
            </p>
          </div>
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl bg-slate-900 font-semibold uppercase flex flex-col justify-between items-start py-10">
              <span className="font-bold md:text-5xl text-xl text-warning">
                Our Clients Since 1991
              </span>
              <span className="w-11 h-3 ml-10 bg-green-700"></span>
            </div>

            <div className="flex">
              <div className="flex items-center justify-center">
                <ul className="steps steps-vertical text-white">
                  <li data-content="" className="step step-gray"></li>
                  <li data-content="" className="step step-gray"></li>
                  <li data-content="" className="step step-warning"></li>
                  <li data-content="" className="step step-warning"></li>
                </ul>
              </div>
              <div>
                <ul className="text-lg md:text-xl">
                  <li className="border-b py-2" data-aos="flip-left">
                    {" "}
                    Central Asia Development Group (CADG)
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    Federal Ministry of Water Resources
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    {" "}
                    Federal University of Petroleum Resources Effurun
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    Federal Fire Service
                  </li>
                  <li className="border-b py-2">
                    Niger Delta Development Commission
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    Edo state Government
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    Delta state Government
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    Energy commission of Nigeria
                  </li>
                  <li className="py-2" data-aos="flip-left">
                    {" "}
                    Rural Water Supply and Sanitation Agency, RUWASA, Delta
                    State
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-6">
          <h1 className="text-6xl font-bold py-4">Welcome to our Gallery</h1>
          <div className="py-5 flex gap-3">
            <Link
              to="edo"
              smooth={true}
              duration={500}
              className="btn btn-primary rounded-full"
            >
              Edo state Government
            </Link>
            <Link
              to="bussa"
              smooth={true}
              duration={500}
              className="btn btn-active rounded-full"
            >
              Bussa Projects
            </Link>
            <Link
              to="others"
              smooth={true}
              duration={500}
              className="btn btn-secondary rounded-full"
            >
              Other Projects
            </Link>
          </div>
        </div>
        <div className="w-full px-5 md:px-5">
          <h1 className="md:text-4xl text-xl font-semibold capitalize" id="edo">
            Edo State Goverment{" "}
            <span className="text-green-600 font-normal">Project</span>
          </h1>
          <hr className="my-5" />
          <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 md:columns-3 columns-1  md:space-y-5">
            <img src={o20} alt="project-image-1" data-aos="zoom-in" />
            <img src={img8} alt="project-image-1" data-aos="zoom-in" />
            <img src={image5} alt="project-image-1" data-aos="zoom-in" />
            <img src={image13} alt="project-image-1" data-aos="zoom-in" />
          </div>

          <div id="bussa" className="w-full px-5 md:px-5">
            <h1 className="md:text-4xl text-xl font-semibold capitalize">
              Bussa <span className="text-green-600 font-normal">Project</span>
            </h1>
            <hr className="my-5" />
            <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 md:columns-3 columns-1  md:space-y-5">
              <img src={bs1} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs2} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs3} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs4} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs5} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs6} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs7} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs8} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs9} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs10} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs11} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs12} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs13} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs14} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs15} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs16} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs17} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs18} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs19} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs20} alt="Bussa project images" data-aos="zoom-in" />
              <img src={bs21} alt="Bussa project images" data-aos="zoom-in" />
              <img src={o3} alt="project-image-1" data-aos="zoom-in" />
              <img src={o4} alt="project-image-1" data-aos="zoom-in" />
              <img src={o5} alt="project-image-1" data-aos="zoom-in" />
              <img src={o8} alt="project-image-1" data-aos="zoom-in" />
              <img src={o10} alt="project-image-1" data-aos="zoom-in" />
              <img src={o31} alt="project-image-1" data-aos="zoom-in" />
              <img src={o24} alt="project-image-1" data-aos="zoom-in" />
              <img src={o13} alt="project-image-1" data-aos="zoom-in" />
              <img src={o14} alt="project-image-1" data-aos="zoom-in" />
              <img src={o15} alt="project-image-1" data-aos="zoom-in" />
              <img src={o16} alt="project-image-1" data-aos="zoom-in" />
              <img src={o17} alt="project-image-1" data-aos="zoom-in" />
              <img src={o18} alt="project-image-1" data-aos="zoom-in" />
              <img src={o19} alt="project-image-1" data-aos="zoom-in" />
              <img src={o21} alt="project-image-1" data-aos="zoom-in" />
              <img src={o23} alt="project-image-1" data-aos="zoom-in" />
            </div>
          </div>

          <h1
            className="md:text-4xl text-xl font-semibold capitalize mx-5"
            id="others"
          >
            Other <span className="text-green-600 font-normal">Project</span>
          </h1>
          <hr className="my-5" />

          <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 md:columns-3 columns-1  md:space-y-5">
            <img src={image1} alt="project-image-1" data-aos="zoom-in" />
            <img src={image3} alt="project-image-1" data-aos="zoom-in" />
            <img src={image6} alt="project-image-1" data-aos="zoom-in" />
            <img src={image7} alt="project-image-1" data-aos="zoom-in" />
            <img src={image8} alt="project-image-1" data-aos="zoom-in" />
            <img src={image11} alt="project-image-1" data-aos="zoom-in" />
            <img src={image15} alt="project-image-1" data-aos="zoom-in" />
            <img src={image16} alt="project-image-1" data-aos="zoom-in" />
            <img src={image17} alt="project-image-1" data-aos="zoom-in" />
            <img src={image18} alt="project-image-1" data-aos="zoom-in" />
            <img src={image19} alt="project-image-1" data-aos="zoom-in" />
            <img src={image20} alt="project-image-1" data-aos="zoom-in" />
            <img src={image21} alt="project-image-1" data-aos="zoom-in" />
            <img src={image23} alt="project-image-1" data-aos="zoom-in" />
          </div>
          <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 md:columns-3 columns-1  md:space-y-5">
            <img src={image26} alt="Bussa project images" data-aos="zoom-in" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects