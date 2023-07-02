import { FC, ReactNode } from 'react'

interface ContentContainerProps {
  classes?: string | null,
  children: ReactNode
}

const ContentContainer: FC<ContentContainerProps> = (props) => {
 return (
   <div className={`pageContainer mx-auto flex flex-col md:flex-row h-screen px-4 ${props.classes}`}>
       {props.children}
    </div>
  )
}

export default ContentContainer
