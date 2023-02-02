import React from 'react'
import axios from 'axios';
import  {useState, useEffect} from 'react';
import './List.css'



function List() {

  

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    
      useEffect(() => {
          const loadPost = async () => {
    
              
              setLoading(true);
    
              
              const response = await axios.get(
              "https://jsonplaceholder.typicode.com/users");
    
              
              setPosts(response.data);
    
              
              setLoading(false);
          }
    
          
          loadPost();
      }, []);
      

    return (
  
      <div className="App">
        
        {loading ? (
                      <h4>Loading...</h4>) :
                      (posts.map((item) => 
                        
                      <ul key = { item.id } className='List'  >
                      <li ><h3><b>{ item.company.name } </b></h3></li>
                       <li ><h6>Contact </h6><span>{ item.name }</span> </li>
                       <li ><h6>City</h6><span> { item.address.city } </span></li>
                       
                       
                       <li ><details >
                          <summary className='More' id="btn">View Details</summary>
                        
                          <li><table className='Tabl'>
                          <li><h5>Description</h5><span> { item.company.catchPhrase } <br></br>{ item.company.bs } </span></li>
          
                          <tr><td><h5>Contact Person</h5><span> { item.name } </span></td>
                          <td><h5>Email</h5><span> { item.email } </span></td></tr>
                          <tr><td><h5>Phone Number</h5><span> { item.phone } </span></td>
                          <td><h5>Address</h5><span> { item.address.suite }, { item.address.street }, { item.address.city } - { item.address.zipcode } </span></td></tr>
                          <h5>Website</h5><span><a href="https://{item.website}" target="_blank"> {item.website}</a> </span>
                          </table></li>
                          </details>
                        </li>
                          
                      </ul>
                      
                      ))
        }
        </div>
      
    );
    }
export default List