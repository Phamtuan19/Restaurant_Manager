import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { images } from '~/assets/image';

const ImageLazyLoading = ({ className, src, alt }) => {
   return (
      <LazyLoadImage
         className={className}
         src={src || images.noImage}
         alt={alt || 'image'}
         effect="blur"
         width="100%"
         height="100%"
         style={{ objectFit: 'cover' }}
      />
   );
};

export default ImageLazyLoading;
