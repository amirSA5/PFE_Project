import React from 'react'
import Navbar from '../Navbar'
import { Bar } from 'react-chartjs-2';


export default function FilesListe() {
    return (

        <>
        <Navbar />
        <div>
            <input type='text'className='search' placeholder='search' style={{color:'black'}}   />
        </div>
        
        
        <table cellPadding={50} cellSpacing={50} >
            <thead >
                <td >Nom Client</td>
                <td >N_Série</td>
                <td >Nom Technicien</td>
                <td >Actions</td>
                
                
            </thead>
            <tbody>
                <tr>
                    <td style={{color:'black'}}>Mouhamed feki</td>
                    <td style={{color:'black'}}>0067429592</td>
                    <td style={{color:'black'}}>samir mharsi</td>
                    
                    <td>
                         <button>Generate Pdf</button>
                       <input type='submit'className='button' style={{color:'black'}}  />
                        <button style={{color:'black'}}><span>Delete</span></button>
                    </td>
                </tr>
                <tr>
                    <td style={{color:'black'}}>Mourad swayah</td>
                    <td style={{color:'black'}}>4552353252</td>
                    <td style={{color:'black'}}> najwa louati</td>
                    <td>
                         <button>Generate Pdf</button>
                       <input type='submit'className='button' style={{color:'black'}}  />
                        <button style={{color:'black'}}><span>Delete</span></button>
                    </td>
                </tr>
                <tr>
                    <td style={{color:'black'}}>Hamdi abd lwaheb</td>
                    <td style={{color:'black'}}>124124214</td>
                    <td style={{color:'black'}}> sonia Cherif</td>
                    <td>
                         <button>Generate Pdf</button>
                       <input type='submit'className='button' style={{color:'black'}}  />
                        <button style={{color:'black'}}><span>Delete</span></button>
                    </td>
                </tr>
             
               
              
            </tbody>
           
        </table>
     
        
        </>
    )
}
