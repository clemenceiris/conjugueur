import React, { useState, useEffect } from "react";
import './Form.css';
import axios from "axios";

function Form() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
  
    useEffect(() => {
      const loadPosts = async () => {
        setLoading(true);
        const response = await axios.get(
          "https://conjugueur.drupal.pm/json/verbes.json"
        );
        setPosts(response.data);
        setLoading(false);
      };
  
      loadPosts();
    }, []);
  
    return (
      <div className="search-bar-container">
        <h3>Recherche</h3>
        <i class="fas fa-search search-bar-icon"></i>
        <input className="search-bar"
          type="text"
          placeholder="Taper un verbe..."
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        {loading ? (
          <h4>Chargement ...</h4>
        ) : (
          posts
            .filter((value) => {
              if (searchTitle === "") {
               //return value;
                return null;
              } else if (
                value.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => <h5 key={item.id}>{item.title}</h5>)
        )}
      </div>
    );
  }
  
  export default Form;