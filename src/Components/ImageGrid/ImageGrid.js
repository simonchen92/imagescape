import React from "react";
import UseFirestore from "../Firebase/UseFirestore";

import { motion } from "framer-motion";

import "./ImageGrid.scss";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = UseFirestore("images");

  return (
    <div className="image-container">
      {docs &&
        docs.map((image) => {
          return (
            <motion.div
              layout
              className="image"
              key={image.id}
              whileHover={{ opacity: 1 }}
              onClick={() => setSelectedImg(image.url)}
            >
              <motion.img
                src={image.url}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
