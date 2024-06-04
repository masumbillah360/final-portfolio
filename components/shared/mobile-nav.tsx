import { Button } from '@/components/ui/button';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

export function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Masum Billah</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you
                        are done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Powered by Shadcn UI</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
