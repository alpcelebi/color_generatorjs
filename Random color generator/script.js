
const hex_keys= ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];
const my_button = document.getElementById('btn');
const color_span = document.getElementById('colorspan');


function give_me_random_color()
{
    var color = '#';
    for(i=1;i<=6;i++)
    {
       let random_color_index =  Math.floor(Math.random() *hex_keys.length);
       color+=hex_keys[random_color_index];
    }
    document.getElementById('mybody').style.backgroundColor=color;
    color_span.innerHTML=color;
}

my_button.addEventListener("click",give_me_random_color);
