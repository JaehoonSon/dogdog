import { useRouter } from 'next/router'
import Head from 'next/head'

export default function cats( {cat} ){
    const router = useRouter()
    const { id } = router.query

    return (<>
        <Head>
            <title>Cat Profiles</title>
        </Head>
        <h1>Hello {id}</h1>
        {/* <h2>{cat.age}</h2> */}
        {/* <img src={cat.image}/> */}
        </>)
}

export async function getStaticProps( { params} ){
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { cat: data },
    }
}

export async function getStaticPaths(){
    const req = await fetch(`http://localhost:3000/names.json`);
    const data = await req.json();

    const paths = data.map(cat => {
        return { params: { id: cat } }
    })
    
    return {
        paths,
        fallback: false
    }
}