import { collection, doc, getDoc, getDocs, limit, query, where } from 'firebase/firestore'
import { db } from '../firebase/client'

export const getItems = async (categoryId) => {

    if (!categoryId){
        const productsRef= collection(db, "items")

        const getProducts = async () => {
            const data = await getDocs(productsRef)
            const dataFilter = data.docs.map((doc)=>  ({...doc.data(), id: doc.id}))
            return dataFilter
        }
        
        return await getProducts()
    }
    else {
        const productsRefFilter = query(
            collection(db, "items"),
            where("category", "==", categoryId),
            limit(10)
          )
          const getProducts = async () => {
            const data = await getDocs(productsRefFilter)
            const dataFilter = data.docs.map((doc)=>  ({...doc.data(), id: doc.id}))
            return dataFilter
          }
        return await getProducts()
    }
}

export const getItemById = (itemId) => {
    const productRef = doc(db, "items", itemId)
    return getDoc(productRef)
        .then((snapshot => {
            if(snapshot.exists()){
                const miProducto = {
                    id: snapshot.id,
                    ...snapshot.data()
                }
                return miProducto
            }
    }))
}

// const itemsList = [
//     {
//         id: 1,
//         category: "new",
//         description: "La poolera perfecta para este invierno llegó a CL ¡El fit te encantará! 💓 Y la tela es atemporal, así que podrá acompañarte en los días fríos y en tus tardes de verano.",
//         img: "https://www.almarosa.shop/wp-content/uploads/2024/05/Polera-oversized-Gris-2.png",
//         name: "Polera oversized gris",
//         price: 109,
//         stock: 5
//     },
//     {
//         id: 2,
//         category: "new",
//         description: "Maxi falda de fit sirena, elasticada a la cintura y con pinzas posteriores. Además lleva forro interno para mayor comodidad.",
//         img: "https://www.almarosa.shop/wp-content/uploads/2024/03/Maxi-falda-vegas-blanca-2-1.png",
//         name: "Maxi Falda Vegas Perla",
//         price: 159,
//         stock: 5
//     },
//     {
//         id: 3,
//         category: "new",
//         description: "Top de manga asimétrica y recogido en los laterales. Además lleva una tira atada al hombro removible.",
//         img: "https://www.almarosa.shop/wp-content/uploads/2024/03/Top-asimetrico-cherry.png",
//         name: "Top Asimétrico Cherry",
//         price: 99,
//         stock: 10
//     },
//     {
//         id: 4,
//         category: "basics",
//         description: "Básico de fit ceñido, cuello redondo y manga corta.",
//         img: "https://www.almarosa.shop/wp-content/uploads/2024/05/Basico-Gris-Everyday-3.png",
//         name: "Polo Básico Gris Everyday",
//         price: 60,
//         stock: 7
//     },
//     {
//         id: 5,
//         category: "basics",
//         description: "Básico de fit ceñido, cuello redondo y manga corta",
//         img: "https://www.almarosa.shop/wp-content/uploads/2024/05/Basico-Blanco-Everyday-4.png",
//         name: "Polo Básico Blanco Everyday",
//         price: 200,
//         stock: 15
//     },
//     {
//         id: 6,
//         category: "basics",
//         description: "Básico de fit ceñido, cuello redondo y manga larga.",
//         img: "https://www.almarosa.shop/wp-content/uploads/2024/05/Basico-Must-Have-4.png",
//         name: "Polo Básico Blanco Must Have",
//         price: 79,
//         stock: 20
//     },
//     {
//         id: 7,
//         category: "pants",
//         description: "Pantalón de fit recto y ligeramente oversized, con pinzas delanteras y traseras, botón invisible y bolsillos delanteros.",
//         img: "https://www.almarosa.shop/wp-content/uploads/2024/05/Tailoring-Pant-Negro-1.png",
//         name: "Tailoring Pant Negro",
//         price: 100,
//         stock: 25
//     },
//     {
//         id: 8,
//         category: "pants",
//         description: "Pantalón high waisted y de fit flare, es decir ceñido hasta la rodilla y acampanado hasta la basta. Lleva elástico a la cintura y forro interno de Viena hasta el muslo.",
//         img: "https://www.almarosa.shop/wp-content/uploads/2022/10/Set-brillos-8.jpeg",
//         name: "Glam Flare Pant",
//         price: 150,
//         stock: 30
//     },
//     {
//         id: 9,
//         category: "pants",
//         description: "Maxifalda elasticada a la cintura con abertura trasera. La falda lleva elástico en la cintura en la parte posterior para que se adapte a la figura, así como bolsillos delanteros.",
//         img: "https://www.almarosa.shop/wp-content/uploads/2023/09/b7277128-e916-477d-98a9-9fe58eac5af4.jpg",
//         name: "Drill Maxi Skirt",
//         price: 500,
//         stock: 12
//     },
//     {
//         id: 10,
//         category: "complements",
//         description: "Acero Inoxidable.",
//         img: "https://www.almarosa.shop/wp-content/uploads/2022/07/Mini-chunky-hoops.jpeg",
//         name: "Mini Chunky Hoops",
//         price: 450,
//         stock: 10
//     },
//     {
//         id: 11,
//         category: "complements",
//         description: "Acero Inoxidable.",
//         img: "https://www.almarosa.shop/wp-content/uploads/2022/07/Collar-Minimal.jpeg",
//         name: "Collar Minimal",
//         price: 450,
//         stock: 10
//     }
// ]