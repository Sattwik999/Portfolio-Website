import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  slug: string
}

export function ProjectCard({ title, category, image, slug }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block h-full">
      <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden group hover:border-cyan-500/50 transition-all h-full">
        <div className="relative h-40 sm:h-48 w-full overflow-hidden flex items-center justify-center bg-zinc-800/30">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-4">
            <div className="text-xs text-cyan-400 mb-1">{category}</div>
            <h3 className="font-medium text-sm sm:text-base text-white">{title}</h3>
          </div>
        </div>
      </Card>
    </Link>
  )
}
