
// para disminuir el tamano del SW, creamos esta funcion
// para actualizar el cache dinamico
function actualizarCacheDinamico (dynamicCache, req, res){
;
    if (res.ok) {
        // si retorna una promesa, colocamos un return
        return caches.open (dynamicCache).then(cache => {

            cache.put (req, res.clone());
                return res.clone();
        });
    }else {
        // no hay mucho que hacer, regresamos lo que vino en la respuesta
        return res;
    }
}