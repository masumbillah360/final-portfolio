import { Skeleton } from '@/components/ui/skeleton';

export function CardSkeleton() {
    return (
        <div className="border border-slate-400 dark:border-slate-700 hover:border-primary dark:hover:border-white rounded-lg p-3">
            <div className="flex flex-col gap-5">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-48 w-full" />
                <div className="mt-6 flex justify-end items-center gap-5">
                    <Skeleton className="h-10 w-20" />
                    <Skeleton className="h-10 w-20" />
                </div>
            </div>
        </div>
    );
}
