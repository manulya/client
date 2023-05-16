import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import { fetchOrders } from "../http/orderAPI";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

export function ChartBar() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.basket.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (!orders) {
    return <Spinner />;
  }

  const orderCountByUser = orders.reduce((countMap, order) => {
    const { userid, name } = order;
    countMap[userid] = {
      name,
      count: (countMap[userid]?.count || 0) + 1,
    };
    return countMap;
  }, {});

  const data = [["User", "Order Count"]];
  Object.values(orderCountByUser).forEach(({ name, count }) => {
    data.push([name, count]);
  });

  const options = {
    title: "Количество заказов по каждому пользователю",
    legend: { position: "none" },
    vAxis: { title: "Количество заказов" },
  };

  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
