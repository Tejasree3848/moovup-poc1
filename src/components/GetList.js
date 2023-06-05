
import React, { useEffect, useState } from 'react';
import EmployeesService from '../services/EmployeesService';
import GoogleMap from './GoogleMap';
import {StyleSheet,Image} from 'react-native';

const GetList= () =>{
    const [shown, setShown] = useState(true);
    const [longi, setLongi] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [name, setName] = useState("");
    const [picture, setPicture] = useState([]);
    const [employees,setEmployees]=useState([]);

    useEffect(()=>{
        EmployeesService.getAllEmployees().then((response)=>{

            setEmployees(response.data);
            console.log(response.data);
        }).catch((error)=>{
        console.log(error)
    })
    },[])

    function handleChange(longitudeValue, latitudeValue, shownValue ,firstName,lastName,profile){
      setShown(shownValue);
      setLongi(longitudeValue);
      setLatitude(latitudeValue);
      setName(firstName+" "+lastName);
      setPicture(profile);
    }

 return (
  <React.Fragment>
   <h1><p>Friends Location Tracking</p></h1> ̰
  <div class="row">
  <div class="column">
    <table>
      <tr>
      </tr>
       {
          
employees.map(
  employee =>
   <tr key ={employee._id}> 
        <div onClick={()=>handleChange(employee.location.latitude, employee.location.longitude, !setShown,employee.name.first,employee.name.last,employee.picture ) }>
        <td> <Image  style={styles.image} source={employee.picture} /></td>
        <p>{employee.name.first}{employee.name.last} </p>
        </div>  
    </tr>
    ) 
    }
   </table>
  </div>
  <div class="column" hidden={shown}>
    <table>
    <section>      
     {GoogleMap(longi,latitude,shown)}
     <th> <Image  style={styles.image} source={picture} />{name}  
</th>
  </section>
    </table>
  </div>
</div>      
</React.Fragment>     
)
};

const styles = StyleSheet.create({ 
      image: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderRadius: 75,
      },
  });
  
export default GetList;