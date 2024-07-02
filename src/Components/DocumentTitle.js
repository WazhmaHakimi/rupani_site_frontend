import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DocumentTitle = (title) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
  }, [title, pathname]);
};

export default DocumentTitle;