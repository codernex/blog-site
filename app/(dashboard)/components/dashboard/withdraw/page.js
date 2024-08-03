"use client"
import { Card } from "antd";
import React from "react";
import Table from "../../common/table";
import { useFetch } from "../../../../helpers/hooks";
import { getRecentWithdrawList } from "../../../../helpers/backend";
import { useRouter } from "next/navigation";

const RecentWithdraw = () => {
  const { push } = useRouter();
  const [withdrawData, getWithdrawData, { loading }] = useFetch(
    getRecentWithdrawList
  );

  const columns = [
    {
      dataField: "_id",
      text: "Withdraw ID",
    },
    {
      dataField: "user_info",
      text: "User Name",
      formatter: (_, d) => d?.user_info?.fullName,
    },
    {
      dataField: "user_info",
      text: "Email",
      formatter: (_, d) => d?.user_info?.email,
    },
    {
      dataField: "amount",
      text: "Amount",
      formatter: (cellContent, row) => <span>${cellContent}</span>,
    },

    {
      dataField: "status",
      text: "status",
      formatter: (_, d) => (
        <span
          className={`capitalize ${
            d?.status?.toLowerCase() === "approved" && "text-green-600"
          } 
            ${d?.status?.toLowerCase() === "pending" && "text-yellow-500"}
            ${d?.status?.toLowerCase() === "rejected" && "text-red-500"}`}
        >
          {d?.status}
        </span>
      ),
    },
  ];

  return (
    <div className="shadow-md rounded-lg">
      <Card>
        <Table
          title={"Recent Withdraw Request"}
          columns={columns}
          data={withdrawData}
          loading={loading}
          onReload={getWithdrawData}
          indexed
          noActions
          action={
            <div
              onClick={() => push("/admin/withdraw-request")}
              className="text-mainColor cursor-pointer underline"
            >
              view all
            </div>
          }
        />
      </Card>
    </div>
  );
};

export default RecentWithdraw;
