import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-y-8 w-full h-screen bg-[#121212]">
      <Image src="/under_construction.svg" alt="Under Construction" width="400" height="308" />
      <h1 className="text-white text-4xl font-bold uppercase">Under Construction</h1>
    </main>
  )
}
