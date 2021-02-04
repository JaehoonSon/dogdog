import { useRouter } from 'next/router'

export default function Generate( {generated} ){
    const router = useRouter()
    const { size } = router.query

    return(
        <>
        <h1>HI {size} </h1>
        {/* <img src={cat.data}/> */}
        <h1>{generated.status}</h1>
        <img src={generated.message} />
        </>
    )
}

export async function getServerSideProps({params}){
        // const req = await fetch(`https://placekitten.com/${params.size}`)
        const req = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await req.json();
    
        return {
            props: {generated: data}
        }
}

// export async function getStaticProps( {params}){
//     // const req = await fetch(`https://placekitten.com/${params.size}`)
//     const req = await fetch("https://dog.ceo/api/breeds/image/random")
//     const data = await req.json();

//     return {
//         props: {generated: data}
//     }
// }

// export async function getStaticPaths(){
//     return {
//         paths: [
//             {params: {size: "200"}},
//         ],
//         fallback: false,
//     }
// }