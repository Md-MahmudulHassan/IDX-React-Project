import { React } from 'react'
import {Hero} from '../Components/hero/hero'
import {Popular} from '../Components/popular/popular'
import {New_collection} from '../Components/new_collection/new-collection'
import{Offer} from '../Components/offers/offer'
import {Footer} from '../Components/footer/footer'

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <New_collection />
      <Offer />
      <Footer />
      
    </div>
  )
}
