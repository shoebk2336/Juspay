import { cn } from "@/lib/utils";
import { Strip } from "@/components/ui/strip";

export function CustomStrip({ className, data, ...props }) {
  const { val, title } = data;
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[12px]  tracking-tighter">{title}</h1>
        <h1 className="text-[12px]">{val}K</h1>
      </div>
      <Strip
        defaultValue={[val]}
        max={100}
        step={0}
        className={cn("w-[100%] ", className)}
        {...props}
      />
    </div>
  );
}
