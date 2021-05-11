import React from 'react'

export default function Nav() {
    return(
        <div class="py-8 px-8 bg-white text-black flex justify-between">
            <div class="text-2xl font-semibold">SalonEverywhere.com</div>
            <div class="flex">
                <button class="bg-red-500 rounded-full py-2 px-12 ml-6 text-white font-bold hover:bg-red-700">
                    <a target="_blank" href="https://saloneverywhere.com">Join For Free</a>
                </button>
                <button class="ml-6 font-medium">
                    <a target="_blank" href="https://saloneverywhere.com/account/sign-in">Sign in</a>
                </button>
            </div>
        </div>
    )
}