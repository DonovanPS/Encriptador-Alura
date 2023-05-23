

function validateInput(event) {


    let textArea = document.getElementById("texto");

    var text = textArea.value.toLowerCase();
    text = text.replace(/[áäàâ]/g, 'a');
    text = text.replace(/[éëèê]/g, 'e');
    text = text.replace(/[íïìî]/g, 'i');
    text = text.replace(/[óöòô]/g, 'o');
    text = text.replace(/[úüùû]/g, 'u');
    textArea.value = text;


    if(textArea.value === "") {

        console.log("No hay texto");

        let imagen = document.querySelector('.salida img');
        imagen.style.display = 'block';
    
      
        let h4 = document.querySelector('.salida h4');
        h4.style.display = 'block';
        document.getElementById("salida").innerText ="Ningún mensaje fuen encontrado";
     
        let boton = document.querySelector('.salida button');
        boton.style.display = 'none';
    }
}

function encriptar() {
    let texto = document.getElementById("texto").value;

    let textoEncriptado = texto.replace(/[aeiou]/g, function (match) {
        switch (match) {
            case "a":
                return "ai";
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "o":
                return "ober";
            case "u":
                return "ufat";
        }
    });

    // Ocultar la imagen
    let imagen = document.querySelector('.salida img');
    imagen.style.display = 'none';

    // Ocultar el <h4>
    let h4 = document.querySelector('.salida h4');
    h4.style.display = 'none';

    // Mostrar el boton
    let boton = document.querySelector('.salida button');
    boton.style.display = 'block';



    document.getElementById("salida").innerText = textoEncriptado;
}


function desencriptar() {
    let textoEncriptado = document.getElementById("texto").value;
    console.log(textoEncriptado);

    let textoDesencriptado = textoEncriptado.replace(/ai|enter|imes|ober|ufat/g, function (match) {
        switch (match) {
            case "ai":
                return "a";
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ober":
                return "o";
            case "ufat":
                return "u";
        }
    });

       // Ocultar la imagen
       let imagen = document.querySelector('.salida img');
       imagen.style.display = 'none';
   
       // Ocultar el <h4>
       let h4 = document.querySelector('.salida h4');
       h4.style.display = 'none';
   
       // Mostrar el boton
       let boton = document.querySelector('.salida button');
       boton.style.display = 'block';

    document.getElementById("salida").innerText = textoDesencriptado;
}



// copiar


const h2Element = document.getElementById('salida');


function copiar() {
    const textoCopiado = h2Element.innerText;
  
    navigator.clipboard.writeText(textoCopiado)
      .then(() => {
        console.log('Texto copiado al portapapeles: ' + textoCopiado);
      })
      .catch((error) => {
        console.error('Error al copiar el texto: ' + error);
      });
}





