interface Children {
  children: string
}
export function ProgramText({ children }: Children) {
  return (
    <p className="bg-blue-100 p-3 text-center">{children}</p>
  )
}
