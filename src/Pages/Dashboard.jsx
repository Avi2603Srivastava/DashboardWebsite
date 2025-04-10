import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Legend,
} from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import RightSide from "../Components/RightSide";

export default function Dashboard() {
  const lineData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const trafficData = [
    { name: "Google", width: "w-12", color: "bg-gray-500" },
    { name: "YouTube", width: "w-20", color: "bg-black" },
    { name: "Instagram", width: "w-16", color: "bg-gray-700" },
    { name: "Pinterest", width: "w-24", color: "bg-black" },
    { name: "Facebook", width: "w-14", color: "bg-gray-500" },
    { name: "Twitter", width: "w-16", color: "bg-black" },
  ];

  const barData = [
    { name: "Linux", users: 12000, color: "#FF5733" },
    { name: "Mac", users: 25000, color: "#33FF57" },
    { name: "iOS", users: 30000, color: "#3357FF" },
    { name: "Windows", users: 10000, color: "#FF33A1" },
    { name: "Android", users: 15000, color: "#FFD700" },
    { name: "Other", users: 22000, color: "#FF5733" },
  ];
  const pieData = [
    { name: "United States", value: 52.1, color: "#000000" },
    { name: "Canada", value: 22.8, color: "#82ca9d" },
    { name: "Mexico", value: 13.9, color: "#8884d8" },
    { name: "Other", value: 11.2, color: "#5b5b5b" },
  ];

  const stats = [
    { title: "Views", value: "7,265", change: "+11.01%" },
    { title: "Visits", value: "3,671", change: "-0.03%" },
    { title: "New Users", value: "156", change: "+15.03%" },
    { title: "Active Users", value: "2,318", change: "+6.08%" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen bg-gray-100 overflow-hidden">
      <div className="bg-gray-200 p-4 md:col-span-2">
        <Sidebar />
      </div>

      <div className="p-6 md:col-span-8">
        <Navbar />
        <div className="flex justify-between items-center mx-2 mt-6">
          <span>Overview</span>
          <span>Today</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-4">
          {stats.map((item, index) => {
            const isPositive = item.change.includes("+");
            return (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md">
                <h2 className="text-gray-500 text-left">{item.title}</h2>

                <div className="flex items-center justify-between mt-1">
                  <span className="text-2xl font-bold">{item.value}</span>
                  <div
                    className={`flex items-center ${
                      isPositive ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    <span className="text-sm mx-2"> {item.change}</span>
                    {isPositive ? (
                      <TrendingUp size={16} />
                    ) : (
                      <TrendingDown size={16} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6 mt-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Total Users</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                width={730}
                height={250}
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ dy: 10 }}
                  padding={{ right: 10 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ dx: -15 }}
                  padding={{ left: 20 }}
                />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#000000"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#000000"
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Traffic by Website</h2>
            <div className="space-y-3">
              {trafficData.map((site, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-24">{site.name}</span>
                  <div className="h-2 w-32 bg-gray-300 relative rounded">
                    <div
                      className={`h-2 ${site.width} ${site.color} absolute left-0 rounded`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Traffic by Device</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="users" radius={[10, 10, 10, 10]}>
                  {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Traffic by Location</h2>

            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="flex justify-center">
                <ResponsiveContainer width={200} height={200}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3">
                {pieData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center space-x-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></span>
                      <span className="text-gray-700">{item.name}</span>
                    </div>
                    <span className="text-gray-900 font-semibold">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 p-4 md:col-span-2">
        <RightSide />
      </div>
    </div>
  );
};

 
