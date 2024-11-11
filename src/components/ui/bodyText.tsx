import React from "react"

export const BodyText = ({ children, variant, className }: { children: React.ReactNode, variant?: string, className?: string }) => {
    const defaultClass =
        (variant === 'body2' ? "font-sans text-stone-600" : "font-sans") + (className ? " " + className : "")

    return (
        <p className={defaultClass}>{children}</p>
    )
}
