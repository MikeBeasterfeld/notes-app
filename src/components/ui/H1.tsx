import React from "react"


export const H1 = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const defaultClass = "text-6xl font-bold mb-8" + (className ? " " + className : "");
    return (
        <h1 className={defaultClass}>{children}</h1>
    )
}