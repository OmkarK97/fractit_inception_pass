import { Skeleton } from "@/components/ui/skeleton"

interface BalanceDisplayProps {
  xionBalance: number | null;
  usdcBalance: number | null;
}

export function BalanceDisplay({ xionBalance, usdcBalance }: BalanceDisplayProps) {
  return (
    <div className="space-y-2 bg-white/5 rounded-lg p-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-300">XION Balance:</span>
        {xionBalance !== null ? (
          <span className="font-semibold text-white">{xionBalance.toFixed(3)}</span>
        ) : (
          <Skeleton className="h-6 w-20" />
        )}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-300">USDC Balance:</span>
        {usdcBalance !== null ? (
          <span className="font-semibold text-white">{usdcBalance.toFixed(3)}</span>
        ) : (
          <Skeleton className="h-6 w-20" />
        )}
      </div>
    </div>
  );
}

