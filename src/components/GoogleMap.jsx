import React from "react";
import Box from '@mui/material/Box';

const GoogleMap = ({src}) => {
  return (
    <div>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <iframe
          title="google map"
          src={src}
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <iframe
          title="google map"
          src={src}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </div>
  );
};
export default GoogleMap;