import React from 'react'

const days = [
  { label: 'Mon', done: 8, total: 8 },
  { label: 'Tue', done: 6, total: 8 },
  { label: 'Wed', done: 7, total: 8 },
  { label: 'Thu', done: 5, total: 8 },
  { label: 'Fri', done: 3, total: 8 },
  { label: 'Sat', done: 0, total: 4 },
  { label: 'Sun', done: 0, total: 4 },
]

const WeeklyStatus = () => {
  return (
    <div className='grid grid-cols-7 w-full px-4 gap-1 sm:gap-2'>
      {days.map(({ label, done, total }) => {
        const pct = total > 0 ? (done / total) * 100 : 0
        const isFull = done === total && total > 0
        return (
          <div key={label} className='flex flex-col items-center gap-1 py-4 sm:py-6'>
            <div className='h-16 sm:h-24 w-full bg-slate-100 rounded-xl sm:rounded-2xl relative overflow-hidden'>
              {pct > 0 && (
                <div
                  className={`absolute bottom-0 w-full rounded-xl sm:rounded-2xl ${isFull ? 'bg-green-400' : 'bg-indigo-500'}`}
                  style={{ height: `${pct}%` }}
                />
              )}
            </div>
            <p className='text-[10px] sm:text-sm font-medium'>{label}</p>
            <p className='text-[9px] sm:text-xs text-slate-400'>{done}/{total}</p>
          </div>
        )
      })}
    </div>
  )
}

export default WeeklyStatus