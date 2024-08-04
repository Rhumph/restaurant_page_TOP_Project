const heading = document.createElement('h1')
const p_one = document.createElement('p')
const p_two = document.createElement('p')
const p_three = document.createElement('p')
const p_four = document.createElement('p')
const background_test = document.createElement('div')
const background_tile = document.createElement('div')
import icon from './milky_Lane.jpg'; 
const food_pic = document.createElement('img')

export function menu(content_div){ 

    content_div.appendChild(background_tile)
    background_tile.classList.add('background_tile')
    background_tile.appendChild(heading)
    heading.innerHTML = "Menu";
    heading.classList.add('page-heading')
    background_tile.appendChild(p_one)
    background_tile.appendChild(p_two)
    background_tile.appendChild(p_three)
    background_tile.appendChild(p_four)
    background_tile.appendChild(food_pic)
    food_pic.src = icon
    food_pic.classList.add("tr-photo")
    p_one.classList.add("body-text-one")
    p_two.classList.add("body-text-two")
    p_three.classList.add("body-text-three")
    p_four.classList.add("body-text-four")
    p_one.innerHTML = "Eat well, drink well, Rothwell’s. A timeless restaurant in a historic setting, made for long lunches, evening cocktails and intimate dining moments."
    p_two.innerHTML = "The menu includes our signature Beef Wellington, a selection of top quality steaks and fresh seafood from our Marble Bar."
    p_three.innerHTML = "For any enquiry please contact our friendly staff at reservations@rothwellsbrisbane.com.au"
    p_four.innerHTML = "Prebook your parking spot in Queens Plaza for $8 using the code ROTHWELLS1 from 4pm Tuesday till Friday, and all day Saturday. Book parking here."
}