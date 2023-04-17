import React, { useState } from 'react'
import './projectGallery.css'
import { ImCancelCircle } from 'react-icons/im'
import { BiChevronLeftSquare, BiChevronRightSquare } from "react-icons/bi";

const ProjectGallery = ({projectImages}) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

  return (
    <div>
      {openModal && 
        <div className="sliderWrap">
          {/* <ImCancelCircle className="btnCLose" />
          <BiChevronLeftSquare className="btnPrev" />
          <BiChevronRightSquare className="btnNext" /> */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eaque velit consequatur ut fuga tenetur maiores expedita mollitia necessitatibus? Distinctio corporis, dolorum inventore quis a laborum dolor veniam sunt facere?
        </div>
      }
      <div className="galleryWrap w-full p-5 pb-10 mx-auto mb-10 gap-5 md:columns-3 columns-1  md:space-y-5">
        {projectImages &&
          projectImages.map((slide, index) => {
            return (
              <div className="single" key={index} onClick={ () => handleOpenModal(index)}>
                <img src={slide.img} alt="image" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProjectGallery