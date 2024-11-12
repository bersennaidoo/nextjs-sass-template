"use client"

import React, { useEffect, useState, FC } from "react"

type TCHomeProps = {}

const CHome: FC<TCHomeProps> = (props: TCHomeProps) => {

    const {} = props

    return (
        <main className="c-home">
            <h1>H1</h1>
            <h2>H2</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum facilis tempore quia ullam necessitatibus nihil atque dolores cupiditate voluptatum earum assumenda, similique recusandae? Laborum vero tenetur repellendus architecto? Animi, omnis?</p>
        </main>
    )
}

export default CHome