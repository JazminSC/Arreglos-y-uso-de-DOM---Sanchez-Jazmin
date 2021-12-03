const Aceptar = function MatrizSuperior()
{
    
    var columna= document.getElementById("Columna").value;
    var fila = document.getElementById("Fila").value;
    
    if (columna==fila)
    {
        console.log();
        document.getElementById("resultado").innerHTML =  "Esta matriz es triangular superiror"+ "<br>"+ "<br>";
    }else
    {
        document.getElementById("resultado").innerHTML =  "Esta matriz no es triangular superiror" + "<br>"+ "<br>";
    }

    let matriz =[];
    for (let i =0; i < columna; ++i)
    {
        let filas = [];
        for (let j =0; j < fila; ++j)
        {
            if(i>j)
            {
                filas.push(0);

            }
            else
            {
                

                filas.push (Math.floor(Math.random()*9+1));
            }
        }
        matriz.push(filas);

    }
    for(let i=0;i<matriz.length;++i){

        document.getElementById("resultado").innerHTML +=  matriz[i] + "<br>";
        
    }

  } 
    