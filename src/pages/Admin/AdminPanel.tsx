import { type } from 'node:os'
import { AddressCreate } from '@/features/address/create'
import { useMeetings } from '@/shared/api/meetings'
import { cn } from '@/shared/lib/styles'
import { Dialog, RadioCards } from '@radix-ui/themes'
import { Plus, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export function AdminPanel() {
  const { data, isLoading } = useMeetings()
  if (data) {
    const formattedDate = `${data[1].date.getFullYear()}-${String(data[1].date.getMonth() + 1).padStart(2, '0')}-${String(data[1].date.getDate()).padStart(2, '0')}`
    console.log(formattedDate)
  }

  const navigate = useNavigate()
  if (isLoading)
    return <div>Loading...</div>

  return (
    <div className="p-6">
      <div className="m-5">
        {/* <Link to="/admin/meeting">Meeting</Link> */}
        <button
          onClick={() => navigate(`/admin/meeting/${formattedDate}`)}
          className={`
            flex items-center gap-2 rounded-md border px-4 py-2

            dark:border-gray-600
          `}
        >
          nav
        </button>
      </div>
      <RadioCards.Root columns={{ initial: '1', sm: '4' }}>
        {data?.map(meeting => (
          <button
            className={cn(
              `
                relative h-20 rounded-md border px-4 py-2 text-start text-sm transition-all
                duration-200 ease-in-out

                dark:border-gray-600
              `,
            )}
            key={meeting.id}
          >
            <div
              className="absolute right-1 top-1 cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <X className="size-3" />
            </div>
            <p className={meeting.status.title !== 'Собрание' ? 'font-bold' : undefined}>{meeting.status.title}</p>
            <p className="text-xs">
              {meeting.date.toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </button>
        ))}
        <Dialog.Root>
          <Dialog.Trigger>
            <button className={`
              flex size-full items-center justify-center rounded-md border

              dark:border-gray-600
            `}
            >
              <Plus />
            </button>
          </Dialog.Trigger>
          <AddressCreate />
        </Dialog.Root>
      </RadioCards.Root>
    </div>
  )
}
