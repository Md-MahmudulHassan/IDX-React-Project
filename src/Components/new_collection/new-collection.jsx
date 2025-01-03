import React from 'react'
import './new-collection.css'
import { Item } from '../Items/Item'
import new_collection from '../../assets/new_collections'

export const New_collection = () => {
  return (
    <div className='new-collection'>
        <h1>New Collection</h1><hr/>
        <div className="collection">
            {new_collection.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}
