import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users, Activity } from 'lucide-react';

type Stat = {
  label: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
};

const stats: Stat[] = [
  {
    label: 'Total Revenue',
    value: '$84,254',
    change: 12.5,
    icon: <DollarSign size={22} />,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    label: 'Total Orders',
    value: '3,842',
    change: 8.2,
    icon: <ShoppingBag size={22} />,
    iconBg: 'bg-fuchsia-100',
    iconColor: 'text-fuchsia-600',
  },
  {
    label: 'New Customers',
    value: '1,294',
    change: -3.1,
    icon: <Users size={22} />,
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    label: 'Active Sessions',
    value: '521',
    change: 5.7,
    icon: <Activity size={22} />,
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-violet-400">{stat.label}</p>
              <p className="text-2xl font-bold text-violet-900 mt-1">{stat.value}</p>
            </div>
            <div className={`${stat.iconBg} ${stat.iconColor} p-3 rounded-xl`}>
              {stat.icon}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1">
            {stat.change >= 0 ? (
              <TrendingUp size={16} className="text-emerald-500" />
            ) : (
              <TrendingDown size={16} className="text-red-500" />
            )}
            <span
              className={`text-sm font-semibold ${
                stat.change >= 0 ? 'text-emerald-600' : 'text-red-500'
              }`}
            >
              {stat.change >= 0 ? '+' : ''}{stat.change}%
            </span>
            <span className="text-sm text-violet-300 ml-1">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}
