import React from "react"
import clients1 from "../assets/clients1.jpg"
import clients2 from "../assets/clients2.jpg"
import clients3 from "../assets/clients3.jpg"
import clients4 from "../assets/clients4.jpg"
import clients5 from "../assets/clients5.jpg"

export default function Client() {
    const data = [clients1, clients2, clients3, clients4, clients5];
  
    return (
      <div className="clients">
        <div className="container">
          <div className="clients-container">
            {data.map((client, index) => {
              // Check if the client image is valid before rendering
              if (client) {
                return (
                  <div className="client" key={index}>
                    <img src={client} alt={`client-${index}`} />
                    {console.log(client)}
                  </div>
                );
              } else {
                // Optionally, render a placeholder or return null
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
  