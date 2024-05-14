import React from "react";

function useLocalStorage(itemName, initialValue){
    //se coloca aca debido a que debe traer el state despues de la confirmacion
    const [item, setItem] =React.useState(initialValue); //enviamos como argumento del state. estado inicial es initialvalue
    //estado de carga y error, del estado inicial; estado inicial por defecto es verdadero, apenas cargaa esta cargadon y cuando ya cargo entonces el estado cambia a false
    const [loading, setLoading] =React.useState(true);
    //por defecto apenas carga no va generar el error, pero una vez cargado se puede ejecutar en caso de haber error
    const [error, setError] =React.useState(false);

    React.useEffect(() => {
      setTimeout(()=>{
        try {
          //localstorage llama su contenido interno item, cambiamos todos por item 
          const localStorageItem = localStorage.getItem(itemName);
    
          let parsedItem;
        
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify([initialValue]));
            parsedItem = [initialValue];//estado inicial en este caso tiene este estado que puee ser vaqcio o lo que quiera que le queramos asignar
          }else{
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem)
          }
          setLoading(false)
          } catch (error) {
            setLoading(false)
            setError(true)
          }
      },2000);
    },[]);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem)); //Actualizando ellocal storage 
  
      setItem(newItem); //actualizandolo en el estado
    };
  
    return {item,
       saveItem,
       loading,
       error
      }; //item nos ayuda a consumir el estado de react con la info de localstorage,save item nos ayuda a actualizar el estado de customhook como actualizar a localstage
}

export { useLocalStorage }