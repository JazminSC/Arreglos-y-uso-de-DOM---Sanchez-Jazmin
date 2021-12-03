const aceptar = function Pascal(){
    //Variable para las filas
    var n = document.getElementById("Filas").value;  
    
    //Número de filas y creacion la matriz bidimensional A(n,n)  
     var matrizPascal=new Array(n);  
    for (var i=1;i<=n;i++) 
    {  
        matrizPascal[i] = new Array(n);  
    }  
     //rellenar la matriz  
    for(i=1;i<=n;i++)
    {  
        for(j=1;j<=i;j++)
        {  
            matrizPascal[i][j]=combina(i-1,j-1);  
        }  
    }  
     //Imprimir resultados
     var texto=0;  
    for(i=1;i<=n;i++)
    {  
        for(j=1;j<=i;j++)
        {  
            texto+=matrizPascal[i][j];  
            texto+= " ";  
        }  
      texto+= "<br>";  
    }  
    //Imprime el resultado
     document.getElementById("resultado").innerHTML = "<br>"+ texto;

     //Función que calcula el número combinatorio p sobre q  
     function combina(p,q)
    {  
      return  Math.round(factorial(p)/(factorial(q)*factorial(p-q)));   
    }  

     //función que calcula el factorial  
     function factorial(h)
     {  
        var f=1;  
        if (h!==0)
        {  
            for (k=1;k<=h;k++)
            {  
                f*=k;  
            }  
        }  
      return f;  
     }  
    }