import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme()
  return (
    <div>
        <Button onClick = {() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <SunIcon className="w-[1.2rem] h-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
            <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
    </div>
  )
}

export default ThemeToggler