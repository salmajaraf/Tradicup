import "../assets/css/foods.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import { useState,useEffect } from "react";
import axios from "axios";
import { TiHeartFullOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

function Foods(){
    let favfood = [];
    if(localStorage.getItem('favfood')===null){
        localStorage.setItem('favfood',JSON.stringify(favfood));
    }
    const [jsonData,setJsonData]=useState({"id":1,"name":"Couscous","price":"8.90€","description":"A delicious dish made with steamed couscous, vegetables, and your choice of meat.","image":"https://www.diari.tn/sites/default/files/image/recette/couscous-viande_0.jpg"});
    const [foods,setFoods]=useState([]);
    useEffect(()=>{
        axios.get("https://world-cup2030-api.onrender.com/foods").then(
            (res)=>{
                setFoods(res.data);
            }
        ).catch(error => {
            console.error('Une erreur s\'est produite lors de la requête', error);
          });
    },[]);
    const extand2 = ()=>{
        let content = document.getElementById("voir2");
        let arrow = document.getElementById("arrow2");
        if(content.style.display==="flex"){
            content.style.display="none";
            arrow.style.transform="rotate(0deg)";
        }
        else{
            content.style.display="flex";
            arrow.style.transform="rotate(180deg)";
        }
    };
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

    const checkID = (id) =>{
        let tab = JSON.parse(localStorage.getItem('favfood'));
        for(let i=0;i<tab.length;i++){
            if(tab[i].id===`${id}`){
                return false;
            }
        }
        return true;
    };
    const favoris = (food)=>{
        let favfood = JSON.parse(localStorage.getItem('favfood'));
        if(checkID(food.id)){
            favfood.push({"id":`${food.id}`,"name":`${food.name}`,"price":`${food.price}`,"description":`${food.description}`,"image":`${food.image}`})
            localStorage.setItem("favfood",JSON.stringify(favfood))
        }
    };
    return(
        <div className="foodcontainer">
            <h3 className="ticlair">Traditional foods</h3>
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
            <div className="visible">
                {foods.map((food, index) => {
                    if([1,2,3,4].includes(food.id)){
                        if(food.id%2===1){
                            return(
                                <div className="foodgroup" key={food.id}>
                                    <div className='card1' key={food.id}>
                                        <div className='imgcard'>
                                            <TiHeartFullOutline className="heartfood" onClick={()=>{favoris(food)}}/>
                                            <img src={food.image} alt="imgfood.jpg" />
                                        </div>
                                        <div className='cont'>
                                            <h3>{food.name}</h3>
                                            <IoIosInformationCircle className="infobtn" onClick={()=>{popup2(food.id)}}/>
                                        </div>
                                    </div>
                                    <div className='card1' key={food.id+1}>
                                        <div className='imgcard'>
                                            <TiHeartFullOutline className="heartfood" onClick={()=>{favoris(foods[index+1])}}/>
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
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="nonvisible" id="voir2">
                {foods.map((food, index) => {
                    if([1,2,3,4].includes(food.id)){
                        return null;
                    }
                    else{
                        if(food.id%2===1 && food.id!==13){
                            return(
                                <div className="foodgroup" key={food.id}>
                                    <div className='card1' key={food.id}>
                                        <div className='imgcard'>
                                            <TiHeartFullOutline className="heartfood" onClick={()=>{favoris(food)}}/>
                                            <img src={food.image} alt="imgfood.jpg" />
                                        </div>
                                        <div className='cont'>
                                            <h3>{food.name}</h3>
                                            <IoIosInformationCircle className="infobtn" onClick={()=>{popup2(food.id)}}/>
                                        </div>
                                    </div>
                                    <div className='card1' key={food.id+1}>
                                        <div className='imgcard'>
                                            <TiHeartFullOutline className="heartfood" onClick={()=>{favoris(foods[index+1])}}/>
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
                    }
                        
    
                })}
            </div>
            <div className="btnsec">
                <button className="btnvoir" onClick={extand2}>See More<IoIosArrowDown className="voiricone" id="arrow2"/></button>
            </div>
        </div>
    );
}



export default Foods;