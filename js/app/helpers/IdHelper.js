class IdHelper {

    static getId(lista) {
        
        if(lista.length > 0) {
            return lista[lista.length - 1].id + 1;
        } else {
            return 0;
        } 
    }
}