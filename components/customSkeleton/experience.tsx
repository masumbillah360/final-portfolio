import { Skeleton } from '@/components/ui/skeleton';

export function ExperienceSkeleton() {
    return (
        <div className="h-auto border border-slate-400 dark:border-slate-700 hover:border-primary dark:hover:border-white rounded-lg p-3">
            <div className="flex flex-col justify-center items-center gap-5">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-10 w-40" />
                <Skeleton className="h-6 w-52" />
            </div>
        </div>
    );
}
