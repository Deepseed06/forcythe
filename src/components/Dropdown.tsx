
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BiMenuAltLeft } from 'react-icons/bi'
import GlowingBorderCard from "./GlowingBorderCard"

export function DropdownMenuBtn() {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
      <div className='text-3xl md:hidden bg-gray-700 p-2 rounded-lg cursor-pointer'> <BiMenuAltLeft/></div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="-m-14">
              <GlowingBorderCard/>
    </DropdownMenuContent>
    </DropdownMenu>
  )
}

