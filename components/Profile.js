import Head from 'next/head'
import React from 'react'

export default function Profile() {
    return(
        <div class="ml-8 space-y-2 mb-20">
            <Head>
                <title>Melissa Hirtle Profile</title>
            </Head>
            <h1 className="text-3xl font-bold">Melissa Hirtle</h1>
            <p class="text-xl font-semi-bold text-gray-400">@melissa-hirtle-794768</p>
            <p>Rockingham, Halifax, NS</p>
            <div class="text-l space-y-4">
                <h1 class="text-xl font-bold mt-12 mb-12">Profile</h1>
                <p>I bring over 20 years of dedicated experience to my valued clientele.</p>
                <p>I have an adoration for doing color but I equally enjoy cutting short and long hair.</p>
                <p>My education includes training with John Paul Mitchell Systems in Las Vegas as well as classes in a wide variety of other colour lines and cutting techniques.</p>
                <p>Follow me on Instagram @ merakihairbeautik.</p>
                <p>I offer all hair services and facial waxing.</p>
            </div>
        </div>
    )
}