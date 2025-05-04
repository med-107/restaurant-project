import React from "react";
import Lcouscous from './image/Lcouscous.jpg'
import './style/global.css'
import Footer from "./footer";
import Cat from "./category"
import {addCart} from './store'
import { useDispatch ,useSelector} from "react-redux";

const Home = () => {
    let heroBack = {backgroundImage:`url(${Lcouscous})`,width:'100%',height:'400px',backgroundRepeat:'no-repeat',backgroundSize: 'cover'}
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    
    const dishes = [
        {id:0, name:'tajine de poulie', description:'blablablablablablablablablablablablablablablabla', quantity:0, price:40, imgPath:'/img/tajinePouli.jpg'},
        {id:1, name:'tajine de Brkok', description:'blablablablablablablablablablablablablablablabla', quantity:0, price:50, imgPath:'/img/tajineBrkok.jpg'},
        {id:2, name:'couscous', description:'blablablablablablablablablablablablablablablabla', quantity:0, price:25, imgPath:'/img/couscous.jpg'},
        {id:3, name:'shbakiya', description:'blablablablablablablablablablablablablablablabla', quantity:0, price:30, imgPath:'/img/shbakiya.jpg'}
    ]

    function addToCart(id){
        if(cart.find(item => item.id === id)){
            return
        }
        dispatch(addCart(dishes[id]))
    }

    return(
        <>
            <div className="hero">
                <div style={heroBack} id='image'></div>
                <div className="over-img">
                    <span className="text">Discover the Flavors <br />         of Morocco</span>
                    <button className="btn">explore dishes</button>
                </div>
            </div>
            <div className="dish-example">
                {
                    dishes.map(dish => {
                        let style = {  backgroundImage:`url(${dish.imgPath})`,backgroundRepeat:'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center'};
                        return(
                            <div className="card c1" key={dish.id} style={style}>
                                <div className="title">{dish.name.toUpperCase()}</div>
                                <div className="desciption">{dish.description}</div>
                                <span className="price">{dish.price} DH</span>
                                <button className="btn" onClick={() => addToCart(dish.id)}>add to cart</button>
                            </div>
                        )
                    })
                }
                
            </div>
            <Footer/>
        </>
    )
}

export default Home