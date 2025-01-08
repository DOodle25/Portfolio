import React, { useEffect } from 'react';
import './footer3.css';

const Footer = () => {
  useEffect(() => {
    const siteFooter = () => {
      const siteContent = document.getElementById('site-content');
      const siteFooterElem = document.getElementById('site-footer');
      
      const siteContentHeight = siteContent.clientHeight;
      const siteContentWidth = siteContent.clientWidth;
      
      const siteFooterHeight = siteFooterElem.clientHeight;
      const siteFooterWidth = siteFooterElem.clientWidth;
      
      console.log('Content Height = ' + siteContentHeight + 'px');
      console.log('Content Width = ' + siteContentWidth + 'px');
      console.log('Footer Height = ' + siteFooterHeight + 'px');
      console.log('Footer Width = ' + siteFooterWidth + 'px');
      
      siteContent.style.marginBottom = `${siteFooterHeight + 50}px`;
    };
    
    // Initial footer setup
    siteFooter();
    
    // Update footer on window resize
    window.addEventListener('resize', siteFooter);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', siteFooter);
    };
  }, []);

  return (
    <div>
      <div id="site-content"></div>
      <div id="site-footer"></div>
    </div>
  );
};

export default Footer;
