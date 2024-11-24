import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ActionItem } from "@/types";

type ActionItemsProps = {
  actionItems: ActionItem[];
};

export function ActionItems({ actionItems }: ActionItemsProps) {
  return (
    <div>
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
        Action Items
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Assignee</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Deadline</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {actionItems.map((actionItem) => (
            <TableRow key={actionItem.id}>
              <TableCell>{actionItem.assignee}</TableCell>
              <TableCell>{actionItem.description}</TableCell>
              <TableCell className="text-right">
                {new Date(actionItem.deadline).toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
