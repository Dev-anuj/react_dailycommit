import React from 'react';
import { BoltLoader } from "react-awesome-loaders";


const BoltLoaderComponent = () => {
  return (
    <>
      <BoltLoader
        className={"loaderbolt"}
        boltColor={"red"}
        backgroundBlurColor={"#E0E7FF"}
      
      />
    </>
  );
};
export {BoltLoaderComponent};