import React, { useState, useEffect } from "react";
import './Form.css';
import axios from "axios";
import Badge from 'react-bootstrap/Badge';

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
        <i className="fas fa-search search-bar-icon"></i>
        <input className="search-bar"
          type="text"
          placeholder="Rechercher un verbe..."
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <div className="list-result">
        {loading ? (
          <p>Chargement ...</p>
        ) : (
          posts
          .filter((value) => {
            console.log("value1", value);
            if (searchTitle === "") {
             //return value;
              return null;
            } else if (
              value.title.toLowerCase().startsWith(searchTitle.replace(/[']/g, "'").toLowerCase())
            ) {
              console.log("value2", value)
              return value;
            }
          })
            .map((item) => 
            <ul className="list-group">
              <li className="list-item" key={item.id}>
                <p>{item.title}</p>
                <Badge variant="primary">Badge</Badge>{' '}
              </li>
            </ul>
            )
        )}
        </div>
      </div>
    );
  }
  
  export default Form;