import React, { useEffect } from 'react';

function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | Blog';
  }, []);

  return <div>NotFound</div>;
}

export default NotFound;
