import React from "react"

export const Item = ({ item }) => (
    <section className="item">
        <div><img src={item.imageURL} className="item_image"/></div>
        <h3 className="item__name">{item.name}</h3>
        <ul className="item__list">
        <li className="item__type">Type: {item.type}</li>
        <li className="item__websiteLink">Website Link: <a href="">{item.websiteLink}</a></li>
        <li className="item__price">Price: ${item.price}</li>
        <li className="item__describtion">Describtion: {item.describtion}</li>
        </ul>
    </section>
)

