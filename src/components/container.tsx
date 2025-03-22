import { cn } from "@/lib/utils";
interface ContainerProps{
    children : React.ReactNode,
    className? : String;
}

export const Cointener = ({children, className}:ContainerProps) => {
  return (
   <div  
     className={cn("container max-auto px-4 md:pd-8 py-4 w-full",className)}
    >
     {children}
   </div>

  );
  
};
