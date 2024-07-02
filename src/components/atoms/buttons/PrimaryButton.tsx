import { propagateServerField } from 'next/dist/server/lib/render-server';
import React, { Children, ReactNode } from 'react'

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  additionalStyles: string;
  children?:ReactNode
  
}

export default function PrimaryButton<PrimaryButtonProps>({additionalStyles, children, ...props}) {
  return (
    <button className={`justify-center place-content-center ${additionalStyles}`} {...props}>{children}</button>
  )
}

