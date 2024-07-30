import { home } from "./home_page";
import './style.css';
import icon from './20230102_132514.jpg'; 


const content_div = document.getElementById('content')



function startup (){ 
    
    // background_setup(content_div);
    home(content_div);
}

document.addEventListener('DOMContentLoaded', startup);
