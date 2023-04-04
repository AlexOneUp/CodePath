import React from "react";

const Gallery = ({ images, roverName }) => {
  console.log(images, "This is from GALLERY COMPONENT")
    return (
      <div>
        <h2> Your {roverName} Gallery!</h2>
        {
          images.length > 0 ? (
              <h3>You have {images.length} images in your gallery so far</h3>
            ) : (
              <h3>You have no images yet!</h3>
          )
        }
        <div className="image-container">
          {images && images.length > 0 ? (
            images.map((pic, index) => (
                <li className="gallery" key={index}>
                  <img
                    className="gallery-screenshot"
                    src={pic}
                    alt="Undefined screenshot from query"
                    width="500"
                  />
                </li>
              )
            )
          ) : (
            <div>
              <h3>Make a screenshot!</h3>
            </div>
          )}
        </div>
        
      </div>
    );
  };
  
  export default Gallery;