import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow,
} from "@/app/ui/table";

import { DeleteInvoice, UpdateInvoice } from "@/app/ui/invoices/buttons";

export function AccountsTable() {
  const accounts = [
    {
      id: "1100",
      id_Hi: "1000",
      name: "Наличные",
      type: "Cash",
      currency: "KGS",
      balance: "5,000",
      is_Active: "true",
      date: "2025-12-01 00:01",
    },
    {
      id: "1210",
      id_Hi: "1200",
      name: "MBank",
      type: "Card",
      currency: "KGS",
      balance: "0",
      is_Active: "true",
      date: "2025-12-01 00:01",
    },
    {
      id: "1220",
      id_Hi: "1200",
      name: "O!Bank",
      type: "Card",
      currency: "KGS",
      balance: "2,120",
      is_Active: "true",
      date: "2025-12-01 00:01",
    },
    {
      id: "1230",
      id_Hi: "1200",
      name: "OptimaBank",
      type: "Card",
      currency: "KGS",
      balance: "0",
      is_Active: "true",
      date: "2025-12-01 00:01",
    },
    {
      id: "1240",
      id_Hi: "1200",
      name: "DemirBank",
      type: "Card",
      currency: "KGS",
      balance: "0",
      is_Active: "true",
      date: "2025-12-01 00:01",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "returned":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <Table>
            <TableHeader>
              <TableHeaderRow>
                <TableHead className="px-4 sm:pl-6">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Currency</TableHead>
                <TableHead className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </TableHead>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell>{account.id}</TableCell>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>{account.balance}</TableCell>
                  <TableCell>{account.currency}</TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={account.id} />
                      <DeleteInvoice id={account.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
