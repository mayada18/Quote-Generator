var cartona=''
const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },

     {'author': 'Andre Gide', 
     'quote': 'It is better to be hated for what you are than to be loved for what you are not.'
    },
    {'author': 'Mahatma Gandhi ', 
        'quote': 'Live as if you were to die tomorrow. Learn as if you were to live forever'
       },
   
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    document.getElementById(quoteOutput).innerHTML=`"${randomQuotes.quote}"`;
    document.getElementById(authorOutput).innerHTML=`-${randomQuotes.author}`;
    
}