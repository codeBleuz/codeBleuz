



// Of course, the page will load at lightning speed, far before the "console log" and the "p tag" say, it's still loading.
// It is so small that it loads instantaneously, but, what if it wasn't so small.
// What if it was huge and full of Images, Videos, Animations of all kinds.
// Not to mention, Database Queries to id, recall settings and preferences, and such.
// Or, cart items and the list goes on and on, as we all know there are many things that need to be on a site.
// That's why they can become slow and cumbersome to load on many of the devices in the wide wild, world wide web

// The "console logs" there to simulate a way for the developer to see the difference


console.log ('The page is loading, it will be here in just a moment.');

const txt = () => {
        
    var hdr = document.createElement('h3');
    var txt = document.createElement('p'); 
        
    hdr.innerText = 'Shawn Gillis Web Design Website Template';
    txt.innerText = 'The page is loading, it will be here in just a moment.'; 
        
    txt.style.color = 'rgb(255, 0, 0)'; 
    txt.style.textAlign = 'right'; 
        
    document.body.appendChild(hdr);
    document.body.appendChild(txt);

window.onload = () => {
   
    
        
        const nuTxt = () => {
        
            setTimeout(( ) => {
                hdr.remove();
                txt.remove();
            
                var nuHdr = document.createElement('h3');
                var bodyP1 = document.createElement('p');
                var bodyP2 = document.createElement('p');
                var bodyP3 = document.createElement('p');
            
                nuHdr.innerText = 'Shawn Gillis Web Design Website Template';
                bodyP1.innerText = 'Of course, the page will load at lightning speed, far before the "console log" and the "p tag" say, it is still loading. It is so small that it loads instantaneously, but, what if it was not so small. What if it was huge and full of Images, Videos, Animations of all kinds. Not to mention, Database Queries to id, recall settings and preferences, and such. Or, cart items and the list goes on and on, as we all know there are many things that need to be on a site. That is why they can become slow and cumbersome to load on many of the devices in the wide wild, world wide webThis paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time. This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time. This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time. This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time. This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time';
                bodyP2.innerText = 'This example uses a Timeout Function to simulate a few second of loading time. This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time. This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time. This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time. This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time. This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time';
                bodyP3.innerText = ' This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time. This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time. This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time. This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time. This paragragh is Shawn Gillis Web Designs Website Template in action, over an over, again and again, and repeating itself time after time';
            
                nuHdr.style.color = 'rgba(127, 155, 200, .9)';
                nuHdr.style.textAlign = 'center'
                bodyP1.style.color = 'rgba(127, 155, 200, .9)';
                bodyP1.style.textAlign = 'left'
                bodyP2.style.color = 'rgba(127, 155, 200, .9)';
                bodyP2.style.textAlign = 'center'
                bodyP3.style.color = 'rgba(127, 155, 200, .9)';
                bodyP3.style.textAlign = 'left'

                document.body.appendChild(nuHdr);
                document.body.appendChild(bodyP1);
                document.body.appendChild(bodyP2);
                document.body.appendChild(bodyP3);
            
                function backgroundChange () {
                    document.getElementById('body');
                    body.style.backgroundColor = 'rgba(127, 255, 212, .15)';
                    console.log ('The page is fully loaded.');
                }
                backgroundChange ();
          
            }, 2500);
            
        }
        nuTxt();
        
    }

    
}

txt();


