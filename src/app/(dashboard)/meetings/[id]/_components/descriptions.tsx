import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Description({ text }: { text: string }) {
  const lines = text.split("\\n");
  return (
    <div className="relative w-full p-3 border rounded-lg max-h-[200px] overflow-hidden">
      <div
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
        className="w-full h-full"
      >
        <h1 className="text-lg md:text-xl lg:text-2xl py-1">Summary</h1>
        {lines.slice(0, 4).map((line, index) => (
          <p key={index} className="text-sm md:text-lg">
            {line}
          </p>
        ))}
      </div>
      <Dialog>
        <DialogTrigger
          className="absolute bottom-2 left-1/2 -translate-x-1/2"
          asChild
        >
          <Button size="sm" variant="secondary">
            Expand
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-5xl max-h-[600px] overflow-scroll">
          <DialogHeader>
            <DialogTitle className="text-lg md:text-xl lg:text-2xl">Summary</DialogTitle>
          </DialogHeader>
          {lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}
