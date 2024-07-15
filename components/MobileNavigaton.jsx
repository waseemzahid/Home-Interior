import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Nav from "./Nav"
import Logo from "./Logo"
import { AlignJustify } from "lucide-react"

const MobileNavigaton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-20">
            <Logo />
            <Nav 
            containerStyles='flex flex-col items-center gap-y-6'
            linkStyles='text-xl font-semibold' 
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavigaton