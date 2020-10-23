
                //HORA INGRESOS

let dateAm = data.filter( e => 
      
    e.hora_ingreso.split(':')[0]  >= 8 &&
    e.hora_ingreso.split(':')[0]  <= 12
);

let datePM = data.filter( e => 
      
    e.hora_ingreso.split(':')[0]  >= 1 &&
    e.hora_ingreso.split(':')[0]  <= 7
);


const  horaIngresoAm = dateAm.map( (e) => {

    const { hora_ingreso, ingreso_salida_vi  } = e;

    const Type = hora_ingreso.substr(0, hora_ingreso.length -2);
    
    // const  horaIngresoAm =  `${ id }   ${Type} AM` ;

    return [ Type, ingreso_salida_vi];

});


const  horaIngresoPm = datePM.map( (e) => {

    const { hora_ingreso, ingreso_salida_vi  } = e;

    const Type = hora_ingreso.substr(0, hora_ingreso.length -2);
    
    // const  horaIngresoPm =  `${ id }   ${Type} PM` ;

    return [ Type, ingreso_salida_vi];
});


 

 //HORA SALIDAS



let date_hora_salida_am = data.filter( e => 
      
    e.hora_salida.split(':')[0]  >= 8 &&
    e.hora_salida.split(':')[0]  <= 12
);

let date_hora_salida_pm = data.filter( e => 
      
    e.hora_salida.split(':')[0]  >= 1 &&
    e.hora_salida.split(':')[0]  <= 7
);


const horaSalidaAm = date_hora_salida_am.map( (e) => {

    const { hora_salida, ingreso_salida_vi  } = e;

    const Type = hora_salida.substr(0, hora_salida.length -2);
    
    // const  horaSalidaAm =  `${ id }   ${Type} AM` ;

    return [ Type, ingreso_salida_vi];
   
});

const horaSalidaPm = date_hora_salida_pm.map( (e) => {

    const { hora_salida, ingreso_salida_vi  } = e;

    const Type = hora_salida.substr(0, hora_salida.length -2);
    
    // const  horaSalidaPm =  
    
    return [ Type, ingreso_salida_vi];

});


// UPDATE INGRESO


/* ------------------------------------------------------------ */

// const updateHoraIngresoAm = horaIngresoAm.map( (e) =>{


//     const updateSql = `UPDATE ingreso_salida_visitante SET hora_ingreso = '${ e[0].trim()} AM' WHERE ingreso_salida_vi = ${  e[1] };`;

//     return updateSql;
// });
// document.getElementById("query").innerHTML = updateHoraIngresoAm.join('<br>') ;
// console.log( updateHoraIngresoAm );

/* ------------------------------------------------------------ */




/* ------------------------------------------------------------ */

// const updateHoraIngresoPm = horaIngresoPm.map( (e) =>{


//     const updateSql = `UPDATE ingreso_salida_visitante SET hora_ingreso = '${ e[0].trim()} PM' WHERE ingreso_salida_vi = ${  e[1] };`;

//     return updateSql;
// });
// document.getElementById("query").innerHTML = updateHoraIngresoPm.join('<br>') ;
// console.log( updateHoraIngresoPm );

/* ------------------------------------------------------------ */



// UPDATE SALIDA



/* ------------------------------------------------------------ */

// const updateHoraSalidaAm = horaSalidaAm.map( (e) =>{


//     const updateSql = `UPDATE ingreso_salida_visitante SET hora_salida = '${ e[0].trim()} AM' WHERE ingreso_salida_vi = ${  e[1] };`;

//     return updateSql;
// });
// document.getElementById("query").innerHTML = updateHoraSalidaAm.join('<br>') ;
// console.log( updateHoraIngresoPm );

/* ------------------------------------------------------------ */



/* ------------------------------------------------------------ */

// const updateHoraSalidaPm = horaSalidaPm.map( (e) =>{


//     const updateSql = `UPDATE ingreso_salida_visitante SET hora_salida = '${ e[0].trim()} PM' WHERE ingreso_salida_vi = ${  e[1] };`;

//     return updateSql;
// });
// document.getElementById("query").innerHTML = updateHoraSalidaPm.join('<br>') ;
// console.log( updateHoraIngresoPm );

/* ------------------------------------------------------------ */




// console.log( horaIngresoAm );
// console.log( horaIngresoPm );
// console.log( horaSalidaAm );
// console.log( horaSalidaPm );



































// let datePM = data.filter( e => 
      
//     e.hora_ingreso.split(':')[0]  >= 1 &&
//     e.hora_ingreso.split(':')[0]  <= 7
// );
//  datePM.map( (e) => {

//     const { hora_ingreso, hora_salida, id  } = e;

//     const Type = hora_salida.substr(0, hora_salida.length -2);
    
//     const  horaSalida =  `${ id }   ${Type} PM` ;
//     console.log( horaSalida );
//  });

   



// data.map( ( e ) => { 

//     const { hora_ingreso, hora_salida, id } = e;

//     const time = '8';

   

//     // if( JSON.stringify(hora_ingreso) > '8' ){

//     //     console.log( hora_ingreso );
//     // }
    
    
// });


    // AM
    // if( hora_ingreso > '8:00:00' ){
    //     console.log( hora_ingreso );

        
    //     // if( '11:59:59' < hora_ingreso ){

    //     //     // const Type = hora_ingreso.substr(0, hora_ingreso.length -2);
    //     //     // console.log(Type + 'AM' );

    //     //     console.log( hora_ingreso );

    //     // }
        
    // }
    // // PM   
    // if ( hora_ingreso > '12:00:00' &&  hora_ingreso < '12:59:59' ) {
        
    //     // const Type = hora_ingreso.substr(0, hora_ingreso.length -2);
    //     // console.log(Type + 'PM' );

    //     console.log( hora_ingreso );

    // }

    // if ( hora_ingreso > '1:00:00' && hora_ingreso < '7:00:00') {
            
    //     // const Type = hora_ingreso.substr(0, hora_ingreso.length -2);
    //     // console.log(Type + 'PM' );

    //     console.log( hora_ingreso );
    // }


    // Hora Salida

    // if( hora_salida > '8:00:00'){

    //     if( '11:59:59' < hora_salida ){
        
    //         const Type = hora_salida.substr(0, hora_salida.length -2);
    //         console.log(Type + 'AM');
        
    //     } 
    // }

    // if ( hora_salida > '12:00:00' &&  hora_salida < '12:59:59' ) {
        
    //     const Type = hora_salida.substr(0, hora_salida.length -2);
    //     console.log(Type + 'PM' );

    // }

    // if ( hora_salida > '1:00:00' && hora_salida < '7:00:00') {
            
    //     const Type = hora_salida.substr(0, hora_salida.length -2);
    //     console.log(Type + 'PM' )
    // }

// });



