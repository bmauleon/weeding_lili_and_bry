import React, { useState, useCallback } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageViewer from "react-simple-image-viewer";

export default function StandardImageList() {
  const listItems = [];

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const images = [];

  for (let i = 1; i <= 93; i++) {
    images.push(`../src/assets/gallery/foto_${i}.jpeg`);
    listItems.push(
        <ImageListItem key={`../src/assets/gallery/foto_${i}.jpeg`}>
        <img
          srcSet={`../src/assets/gallery/foto_${i}.jpeg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={`../src/assets/gallery/foto_${i}.jpeg?w=164&h=164&fit=crop&auto=format`}
          alt={'ByL'}
          loading="lazy"
          onClick={() => openImageViewer(i-1)}
        />
      </ImageListItem>
    );
  }

  return (
    <div>
      <ImageList sx={{ width: 1, height: { xs: 450, sm: 600 } }} cols={3} rowHeight={{ xs: 164, sm: 250 } }>
        {listItems}
      </ImageList>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
            marginTop: 50
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}