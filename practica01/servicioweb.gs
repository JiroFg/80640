//Edson Jair Fuentes García 
// regresa de forma textual los parámetros leidos con get
  const doGet = (e = {}) => {
    const { parameter } = e;
    const { name, sName, age, tel} = parameter;
    const salida = `Hola ${name} ${sName} ${age} ${tel} `;
    return ContentService.createTextOutput(salida);
  };

// regresa de forma textual los parámetros leidos con post
  const doPost = (e = {}) => {
    const { parameter } = e;
    const { name, sName, age, tel} = parameter;
    const salida = `Hola ${nombre} ${apellido} ${age} ${tel}`;
    return ContentService.createTextOutput(salida);
  };
