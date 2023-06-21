import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs as Bread, Typography } from '@mui/material';
import { Link as BaseLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

export default function BreadCrumbs(props) {
   const { currentPage, breadcrumbs, ...rest } = props;
   return (
      <Bread {...rest} separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
         {breadcrumbs.map((item) => (
            <Link key={item.name} to={item.link}>
               {item.name}
            </Link>
         ))}
         <Typography color='text.primary'>{currentPage}</Typography>
      </Bread>
   );
}

const Link = styled(BaseLink)(({ theme }) => ({
   textDecoration: 'none',
   color: '#797979',
   ':hover': {
      textDecoration: 'underline'
   }
}));

BreadCrumbs.propTypes = {
   currentPage: PropTypes.string,
   breadcrumbs: PropTypes.arrayOf(
      PropTypes.shape({
         link: PropTypes.string,
         name: PropTypes.string
      })
   )
};
BreadCrumbs.defaultProps = {
   currentPage: 'Trang chủ',
   breadcrumbs: []
};
