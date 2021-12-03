const Aceptar = function MatrizSuperior()
{
    //Variables para las filas y columnas de la matriz
    var columna= document.getElementById("Columna").value;
    var fila = document.getElementById("Fila").value;
    
    if (columna==fila) //Compara si una matriz es cuadrada
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
            //Formula de la matriz superior, donde si i>j entonces ira un 0 para ser una matriz superior
            if(i>j)
            {
                //Agrega el numero 0 en la parte inferior de la matriz
                filas.push(0);

            }
            else
            {
                //Agrega numeros ramdom a ala matriz
                filas.push (Math.floor(Math.random()*9+1));
            }
        }
        matriz.push(filas);

    }
    for(let i=0;i<matriz.length;++i){

        document.getElementById("resultado").innerHTML +=  matriz[i] + "<br>";
        
    }

  } 
    