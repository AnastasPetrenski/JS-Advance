function delimiter(...array){
    let words = array[0];
    let delimiter = array[1];

    console.log(words.join(delimiter));
}

delimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
)

delimiter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
)