import { home } from "./home_page";
import { menu } from "./menu_page";
import { about } from "./about_page";
import './style.css';
import icon from './20230102_132514.jpg'; 

const content_div = document.getElementById('content')
document.addEventListener('DOMContentLoaded', startup);
const home_btn = document.getElementById('home_btn');
const menu_btn = document.getElementById('menu_btn');
const about_btn = document.getElementById('about_btn');
home_btn.addEventListener('click', () => { 
    clear_content();
    home(content_div)
})
menu_btn.addEventListener('click', () => { 
    clear_content();
    menu(content_div)
})
about_btn.addEventListener('click', () => { 
    clear_content();
    about(content_div)
})

function startup (){ 
    
    // background_setup(content_div);
    home(content_div);
}

function clear_content (){ 
    content_div.removeChild(content_div.firstChild)
}

