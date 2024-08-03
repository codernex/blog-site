"use client"
import { Card } from "antd";
import React from "react";
import Table from "../../common/table";
import { useFetch } from "../../../../helpers/hooks";
import { getAllOrder, getRecentOrder } from "../../../../helpers/backend";
import { useRouter } from "next/navigation";

const RecentOrder = () => {
  const { push } = useRouter();
  const [data, getData, { loading }] = useFetch(getRecentOrder);

  const columns = [
    {
      text: "Dog Name",
      dataField: "productName",
      formatter: (_, d) => d?.productName,
    },
    {
      text: "User Name",
      dataField: "info",
      formatter: (_, d) => <span className="capitalize">{d?.info?.name}</span>,
    },

    {
      text: "Paid",
      dataField: "price",
      formatter: (_, d) => <span>${d?.price}</span>,
    },
    {
      text: "Price",
      dataField: "main_price",
      formatter: (_, d) => <span>${d?.main_price}</span>,
    },
    {
      text: "Seller Earning",
      dataField: "sellerEarning",
      formatter: (_, d) => <span>${d?.sellerEarning}</span>,
    },
    {
      text: "My Earning",
      dataField: "adminEarning",
      formatter: (_, d) => <span>${d?.adminEarning}</span>,
    },

    {
      dataField: "status",
      text: "Status",
      formatter: (_, d) => (
        <span
          className={`capitalize ${
            d?.status?.toLowerCase() === "completed"
              ? "text-green-600"
              : "text-orange-400"
          } 
              `}
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
          title={"Recent Orders"}
          columns={columns}
          data={data}
          loading={loading}
          onReload={getData}
          indexed
          noActions
          action={
            <div
              onClick={() => push("/admin/dog-order")}
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

export default RecentOrder;
