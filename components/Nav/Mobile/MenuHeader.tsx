import { SheetClose, SheetTitle } from "@/components/ui/sheet"

const MenuHeader = () => {

  return (
    <div className="flex items-center justify-between p-6">
      <SheetTitle className="p-0 text-md uppercase text-body-medium">
        ramicoin.com
      </SheetTitle>
      <SheetClose className="w-fit text-md">close</SheetClose>
    </div>
  )
}

export default MenuHeader
