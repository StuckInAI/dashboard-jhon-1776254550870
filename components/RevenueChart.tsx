'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 32000, expenses: 18000 },
  { month: 'Feb', revenue: 41000, expenses: 22000 },
  { month: 'Mar', revenue: 38000, expenses: 20000 },
  { month: 'Apr', revenue: 52000, expenses: 27000 },
  { month: 'May', revenue: 48000, expenses: 25000 },
  { month: 'Jun', revenue: 61000, expenses: 31000 },
  { month: 'Jul', revenue: 55000, expenses: 29000 },
  { month: 'Aug', revenue: 67000, expenses: 34000 },
  { month: 'Sep', revenue: 72000, expenses: 36000 },
  { month: 'Oct', revenue: 84000, expenses: 40000 },
  { month: 'Nov', revenue: 79000, expenses: 38000 },
  { month: 'Dec', revenue: 91000, expenses: 43000 },
];

const formatCurrency = (value: number) => {
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}k`;
  return `$${value}`;
};

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Revenue Overview</h2>
          <p className="text-sm text-slate-500">Monthly revenue vs expenses</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-lg">Year</button>
          <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 rounded-lg">Quarter</button>
          <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 rounded-lg">Month</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: '#94a3b8' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatCurrency}
            tick={{ fontSize: 12, fill: '#94a3b8' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '8px',
              color: '#f8fafc',
              fontSize: '13px',
            }}
            labelStyle={{ color: '#94a3b8' }}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: '13px', paddingTop: '12px' }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            name="Revenue"
            stroke="#3b82f6"
            strokeWidth={2.5}
            fill="url(#colorRevenue)"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            name="Expenses"
            stroke="#a78bfa"
            strokeWidth={2.5}
            fill="url(#colorExpenses)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
