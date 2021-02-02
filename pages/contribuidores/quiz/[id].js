import React from 'react'

export default function QuizDaGaleraPage() {
    return (
        <div>

        </div>
    )
}


export async function getServerSideProps (context) {
    const dbExterno = await fetch('https://aluraquiz-marvel.omariosouto.vercel.app/api/db')
    .then((response) => {
        if(response.ok)
        return response.json()
        throw new Error('Falha em pegar os dados');
    })
    .then((response) => response)
    .catch((err) => {
        console.log(error(err))
    });
    return{
        props: {
            dbExterno,
        },
    };
}