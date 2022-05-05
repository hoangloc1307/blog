import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CategoryAndSearch from '~/components/category_and_search/CategoryAndSearch';

function PostLayout() {
  const [showSearch, setShowSearch] = useState(false);
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  //Show and hide search bar
  const handleSearchShow = (action) => {
    if (action === 'open') {
      setShowSearch(true);
    }
    if (action === 'close') {
      setShowSearch(false);
    }
    setKeyword('');
  };

  //Press enter to search
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/post?search=${keyword}`, {});
      setShowSearch(false);
    }
  };

  //Two way binding
  const handleKeywordChange = (value) => {
    setKeyword(value);
  };

  return (
    <div className='container'>
      <CategoryAndSearch
        showSearch={showSearch}
        keyword={keyword}
        onSearchShow={handleSearchShow}
        onSearch={handleSearch}
        onKeywordChange={handleKeywordChange}
      />
      <Outlet context={keyword} />
    </div>
  );
}

export default PostLayout;
