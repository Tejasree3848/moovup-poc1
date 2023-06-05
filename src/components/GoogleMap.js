import React, { useRef, useState } from 'react';


function GoogleMap(lat,lon,value,picture) {
    const zoom = 10;
    return (
        <main>
        <div className="Comp1" hidden={value}>
            <iframe hidden={value}
               src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
                width="680"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="google map"
            ></iframe>
        </div>
         </main>
    );
  };
  
  export default GoogleMap;