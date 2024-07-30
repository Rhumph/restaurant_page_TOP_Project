// const content_div = document.getElementById('content')
const the_child = document.createElement('div')
const the_child_two = document.createElement('div')
const background_test = document.createElement('div')

export function home(content_div){ 

    
       
    content_div.innerHTML = "Hellow, I'm doing gtreatlec2ecw2evc2wy";
    content_div.appendChild(the_child)
    the_child.innerHTML = "I am the child hhhhhhhhhh";
    content_div.appendChild(the_child_two)
    the_child_two.innerHTML = "i am also aaaaaaabb child"
    content_div.appendChild(background_test)
    background_test.innerHTML = "efknevnreviwnr";
    background_test.classList.add('tester')
}

// document.addEventListener('DOMContentLoaded', tezter);


   