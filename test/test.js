const json = {
    "_id": {
        "$oid": "60d5ec49f8d4a24b8e5b38b8"
    },
    "nombre": "Juan Pérez",
    "correo_electronico": "juan.perez@example.com",
    "fecha_de_nacimiento": {
        "$date": "1990-01-15T00:00:00Z"
    },
    "direccion": {
        "calle": "Calle Falsa",
        "numero": 123,
        "ciudad": "Ciudad de México",
        "estado": "CDMX",
        "codigo_postal": "01234"
    },
    "telefonos": [
        {
            "tipo": "casa",
            "numero": "55-5555-5555"
        },
        {
            "tipo": "móvil",
            "numero": "55-1234-5678"
        }
    ],
    "activo": true,
    "fecha_de_registro": {
        "$date": "2023-05-28T14:21:00Z"
    },
    "roles": ["usuario", "admin"]
}


export default {json}