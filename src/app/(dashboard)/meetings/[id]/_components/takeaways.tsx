export function Takeaways({ takeaways }: { takeaways: string[] }) {
  return (
    <div>
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold py-2">Takeaways</h1>
      <ul className="list-disc ml-5">
        {takeaways.map(takeaway => {
          return (
            <li key={takeaway} className="">{takeaway}</li>
          )
        })}
      </ul>
    </div>
  )
}
