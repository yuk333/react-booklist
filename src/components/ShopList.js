import React from 'react';
function Menu({type,onChange}){
    return(
        <li onClick={()=>onChange(type)}>{type}</li>
    )
}
function List({list}){
    return(
        <li>
            <span>{list.type}</span>
            <span>{list.name}</span>
            <span className='price'>{list.price}</span>
        </li>
    )
}
function ShopList({lists,typelist,onChange}){
    return(
        <div>
            <ul className='menu'>
                {typelist.map((type,index) => <Menu type={type} key={index} onChange={onChange}/>)}
            </ul>
            <ul className='list'>
                {lists.map((list,index) =><List list={list} key={index} />)}
            </ul>
        </div>
    )
}
export default ShopList;