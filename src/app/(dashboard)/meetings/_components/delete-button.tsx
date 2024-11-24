"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner"
import { deleteMeeting } from "./actions";
import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const DeleteButton = ({ id }: { id: string }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await deleteMeeting(id);
      if (res.length > 0) {
        toast.success("Meeting deleted successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Error deleting meeting");
    } finally {
      setDialogOpen(false);
      setPopoverOpen(false);
    }
  }

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger>
        <Ellipsis size={18} />
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger>
            <div className="flex items-center gap-2">
              <p className="text-sm text-destructive-foreground">Delete this meeting</p>
              <Button size="sm" variant="destructive">Delete</Button>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete this meeting from your account.
              </DialogDescription>
            </DialogHeader>
            <div className="w-full flex justify-between">
              <Button size="sm">No</Button>
              <Button size="sm" variant="destructive" onClick={handleDelete}>Yes, delete it</Button>
            </div>
          </DialogContent>
        </Dialog>
      </PopoverContent>
    </Popover>
  );
};
