/* eslint-disable readable-tailwind/sort-classes */
interface propsTypes {
  type?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function KInput({ type, onChange, value }: propsTypes) {
  return (
    <input
      className={`
        my-1 w-full rounded-lg border border-blue-200 bg-white p-1 shadow-sm transition duration-200
        ease-in-out

        dark:text-gray-300 dark:bg-dark-bg dark:border-gray-700

        focus:outline-none focus:ring-blue-300 focus:ring-1

        hover:border-blue-400 hover:bg-blue-50 hover:shadow-sm
      `}
      type={type}
      value={value}
      onChange={onChange}
    >
    </input>
  )
};
