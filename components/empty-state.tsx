import { Plus } from "lucide-react";
import { Button } from "./ui/button";

interface EmptyStateProps {
    message:string;
    buttonText:string;
    onButtonClick?: () => void;
}

export default function  EmptyState({
    
    message,
    buttonText,
    onButtonClick


}:EmptyStateProps) {
  return (
    <div className="flex items-center justify-center h-full">
        <div className="text-center p-8">
            <p className="text-muted-foreground mb-8">{message}</p>
            <Button onClick={onButtonClick}>
                <Plus className="mr-2 h-4 w-4" />
                {buttonText}</Button>
        </div>
    </div>
  )
}
