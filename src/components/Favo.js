import "../assets/css/favorites.css";
import { useState,useEffect } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { FaTrash } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Favo(){
    let favfood = [];
    if(localStorage.getItem('favfood')===null){
        localStorage.setItem('favfood',JSON.stringify(favfood));
    }
    const [jsonData,setJsonData]=useState({"id":1,"name":"Couscous","price":"8.90€","description":"A delicious dish made with steamed couscous, vegetables, and your choice of meat.","image":"https://www.diari.tn/sites/default/files/image/recette/couscous-viande_0.jpg"});
    const [foods,setFoods]=useState([]);
    useEffect(()=>{
        setFoods(JSON.parse(localStorage.getItem("favfood")));
    },[]);
    const popup2 = (idFood)=>{
        const filtre = document.getElementById("filtre2");
        const stade = document.getElementById("food");
        stade.style.display="block";
        filtre.style.display="block";
        fetch(`https://world-cup2030-api.onrender.com/foods/${idFood}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setJsonData(data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données:', error);
        });
    };
    const close2 = ()=>{
        const filtre = document.getElementById("filtre2");
        const stade = document.getElementById("food");
        stade.style.display="none";
        filtre.style.display="none";
    };
    const supprimer = (id)=>{
        favfood = JSON.parse(localStorage.getItem('favfood'));
        for(let i=0;i<favfood.length;i++){
            if(favfood[i].id===id){
                favfood.splice(i,1);
            }
        }

        localStorage.setItem("favfood",JSON.stringify(favfood));
    };
    if(true){
        setInterval(() => {
            setFoods(JSON.parse(localStorage.getItem("favfood")));
        }, 100);
    }
    return(
        <div className="favocont">
            <h3 className="ticlair">FAVORITES</h3>
            {/*pop up */}
            <div className="overlay2" id="filtre2"></div>
            <div id="food">
                <div className="imgfood">
                    <img src={jsonData.image} alt="food.jpg"/>
                </div>
                <div className="content">
                    <div className="cont1">
                        <h3>{jsonData.name}</h3>
                        <IoClose className="iconeclosefood" onClick={close2}/>
                    </div>
                    <div className="cont2">
                        <p>Price : from {jsonData.price}</p>
                        <h4>Description</h4>
                    </div>
                    <div className="cont4">
                        <p>{jsonData.description}</p>
                    </div>
                </div>
            
            </div>
            {/*pop up */}
            <div className="visible" id="home">
                {(foods.length===0)?(
                    <div className="dfavop">
                    <p className="favop">No Favorites Found</p>
                </div>)
                :(
                    foods.map((food, index) => {
                        if(index%2===0 && (index<foods.length-1)){
                            return(
                                <div className="foodgroup" key={index+10}>
                                    <div className='card1' key={index}>
                                        <div className='imgcard'>
                                            <FaTrash className="trashfood" onClick={()=>{supprimer(food.id)}}/>
                                            <img src={food.image} alt="imgfood.jpg" />
                                        </div>
                                        <div className='cont'>
                                            <h3>{food.name}</h3>
                                            <IoIosInformationCircle className="infobtn" onClick={()=>{popup2(food.id)}}/>
                                        </div>
                                    </div>
                                    <div className='card1' key={index+1}>
                                        <div className='imgcard'>
                                            <FaTrash className="trashfood" onClick={()=>{supprimer(foods[index+1].id)}}/>
                                            <img src={foods[index + 1].image} alt="imgfood.jpg" />
                                        </div>
                                        <div className='cont'>
                                            <h3>{foods[index + 1].name}</h3>
                                            <IoIosInformationCircle className="infobtn" onClick={()=>{popup2(foods[index+1].id)}}/>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else{
                            return null;
                        }
                        
                    })
                    
                    
                )}
                {(foods.length%2===1)?(
                        <div className="foodgroup" key={foods[foods.length-1].id+10}>
                                <div className='card1' key={foods[foods.length-1].id}>
                                    <div className='imgcard'>
                                        <FaTrash className="trashfood" onClick={()=>{supprimer(foods[foods.length-1].id)}}/>
                                        <img src={foods[foods.length-1].image} alt="imgfood.jpg" />
                                    </div>
                                    <div className='cont'>
                                        <h3>{foods[foods.length-1].name}</h3>
                                        <IoIosInformationCircle className="infobtn" onClick={()=>{popup2(foods[foods.length-1].id)}}/>
                                    </div>
                                </div>
                            </div>
                    ):(null)}
            </div>
        </div>
    );
}

export default Favo;

