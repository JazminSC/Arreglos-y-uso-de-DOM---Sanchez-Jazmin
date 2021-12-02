var ingresar = function MatrizS(){
    
    var a= document.getElementById("Fila").value;
    var b = document.getElementById("Colum").value;
    
    if (a==b){
        console.log();
        document.getElementById("Respuesta").innerHTML =  "Esta matriz es triangular superiror"+ "<br>"+ "<br>";
    }else{
        document.getElementById("Respuesta").innerHTML =  "Esta matriz no es triangular superiror" + "<br>"+ "<br>";
    }

    let matriz =[];
    for (let i =0; i < a; ++i){
        let fila = [];
        for (let j =0; j < b; ++j){
            if(i>j){
                fila.push(0);

            }else{
                

                fila.push (Math.floor(Math.random()*9+1));
            }
        }
        matriz.push(fila);

    }
    for(let i=0;i<matriz.length;++i){

        document.getElementById("Respuesta").innerHTML +=  matriz[i] + "<br>";
        
    }

  } 
    