let DESCRIPCION_CATEGORIAS=[
    {id:1, nombre: "LLanto maldito", descripcion: "pelicula de terror", director:"Mark suquenber", ano:"2000", taquilla:"A01", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzi12ZYBPfcPINAgMG46oJg-eCEEQ4ep1VX6O7D-nJn3aFpCrLNgmIjlyjLfdfZ676QA0&usqp=CAU", idSec:1},
    {id:2, nombre: "Un lugar tranquilo", descripcion: "pelicula de terror", director:"Obama", ano:"2006", taquilla:"A02", url:"https://los40.com/los40/imagenes/2019/10/25/album/1572019225_928456_1572019648_album_normal.jpg", idSec:1},
    {id:3, nombre: "Sinister", descripcion: "pelicula de terror", director:"La liendra", ano:"2008", taquilla:"A03", url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sinister-1633081365.jpeg?crop=0.9877333333333334xw:1xh;center,top&resize=480:*", idSec:1},
    {id:4, nombre: "Expendiente warren", descripcion: "pelicula de terror", director:"Maluma", ano:"2009", taquilla:"A04", url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/expediente-warren-the-conjuring-1633081192.jpeg", idSec:1},
    {id:5, nombre: "Hereditary", descripcion: "pelicula de terror", director:"Arcangel", ano:"2010", taquilla:"A05", url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/images-8-1666767363.jpeg?crop=0.9625668449197861xw:1xh;center,top&resize=480:*", idSec:1},
    {id:6, nombre: "La abuela", descripcion: "pelicula de terror", director:"Amparo grisales", ano:"2012", taquilla:"A06", url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/images-5-1666767062.jpeg?crop=1xw:0.9986111111111111xh;center,top&resize=480:*", idSec:1},



    {id:7, nombre: "2067", descripcion: "pelicula de ciencia Ficcion", director:"Carlos", ano:"2022", taquilla:"B01", url:"https://pbs.twimg.com/media/EjambZkX0AAGccI?format=jpg&name=4096x4096",idSec:2},
    {id:8, nombre: "Divergente", descripcion: "pelicula de ciencia Ficcion", director:"Leonel mesi", ano:"2020", taquilla:"B02", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohIcBfhYh6WvfvW-RamIOWjnPv5VMwi-81s_FsjF6u6KB_-oTtMlqiztrywu-juoyLZk&usqp=CAU",idSec:2},
    {id:9, nombre: "Leal", descripcion: "pelicula de ciencia Ficcion", director:"fredi mercuri", ano:"2021", taquilla:"B03", url:"https://estrenosdecine.eu/media/k2/items/cache/76131d103aa4916ef56029b55fe7b3be_S.jpg",idSec:2},
    {id:10, nombre: "Avatar", descripcion: "pelicula de ciencia Ficcion", director:"jack sparrout", ano:"2000", taquilla:"B04", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTvod8QS0ml8X70Vt7R5V1wyRNSAtPwe0M5Sdy0qJmSktY-3MAuwX39-cE5Tt8LtWJ60&usqp=CAU",idSec:2},
    {id:11, nombre: "Regreso al futuro", descripcion: "pelicula de ciencia Ficcion", director:"Mal aguero", ano:"1990", taquilla:"B05", url:"https://assets.afcdn.com/album/D20150316/regreso-al-futuro-1147165_H103851_L_w320.webp",idSec:2},
    {id:12, nombre: "Tron", descripcion: "pelicula de ciencia Ficcion", director:"Paulo londra", ano:"2001", taquilla:"B06", url:"data:image/jpeg;base64,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",idSec:2},






]


export {DESCRIPCION_CATEGORIAS}