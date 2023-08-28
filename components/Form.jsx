import React, { useState } from 'react'
import PromptCard from './PromptCard'

const Form = ({data,handleTagClick}) => {
  return (
    <div className='w-full max-w-full flex-start flex-col'>
      {data.map((post)=>{
        <PromptCard 
        key={post.id}
        post={post}
        handleTagClick={handleTagClick}
        />
      })}
    </div>
  )
}

const Feed= ()=> {
  const [allPosts, setAllPosts] = useState([]);

  //Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
}

export default Form
