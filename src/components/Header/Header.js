import React from 'react';
import {useState,useEffect} from 'react'
import News from '../News/News';



const Header = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
      const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f8ca6fd9bf7043358828ef28d7cefda0'
      fetch(url)
      .then(res=>res.json())
      .then(data=> setArticles(data.articles))
   
    }, [])
    
    return (
        <div>
            <h1> top headLines{articles.length}</h1>
            {
                articles.map(article=> <News art={article}></News>)
            }
        </div>
    );
};

export default Header;