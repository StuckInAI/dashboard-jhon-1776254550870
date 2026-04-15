import { CheckCircle, Clock, XCircle, Truck } from 'lucide-react';

type OrderStatus = 'Delivered' | 'Processing' | 'Cancelled' | 'Shipped';

type Order = {
  id: string;
  customer: string;
  product: string;
  date: string;
  amount: string;
  status: OrderStatus;
  avatar: string;
};

const statusConfig: Record<OrderStatus, { label: string; icon: React.ReactNode; color: string; bg: string }> = {
  Delivered: {
    label: 'Delivered',
    icon: <CheckCircle size={14} />,
    color: 'text-emerald-700',
    bg: 'bg-emerald-100',
  },
  Processing: {
    label: 'Processing',
    icon: <Clock size={14} />,
    color: 'text-amber-700',
    bg: 'bg-amber-100',
  },
  Cancelled: {
    label: 'Cancelled',
    icon: <XCircle size={14} />,
    color: 'text-red-700',
    bg: 'bg-red-100',
  },
  Shipped: {
    label: 'Shipped',
    icon: <Truck size={14} />,
    color: 'text-blue-700',
    bg: 'bg-blue-100',
  },
};

const orders: Order[] = [
  { id: '#ORD-7291', customer: 'Alice Johnson', product: 'Pro Headphones', date: 'Dec 12, 2024', amount: '$249.00', status: 'Delivered', avatar: 'AJ' },
  { id: '#ORD-7290', customer: 'Bob Martinez', product: 'USB-C Hub', date: 'Dec 12, 2024', amount: '$89.99', status: 'Shipped', avatar: 'BM' },
  { id: '#ORD-7289', customer: 'Carol White', product: 'Mechanical Keyboard', date: 'Dec 11, 2024', amount: '$179.00', status: 'Processing', avatar: 'CW' },
  { id: '#ORD-7288', customer: 'David Lee', product: 'Wireless Mouse', date: 'Dec 11, 2024', amount: '$59.99', status: 'Delivered', avatar: 'DL' },
  { id: '#ORD-7287', customer: 'Eva Brown', product: 'Webcam HD', date: 'Dec 10, 2024', amount: '$129.00', status: 'Cancelled', avatar: 'EB' },
  { id: '#ORD-7286', customer: 'Frank Chen', product: 'Pro Headphones', date: 'Dec 10, 2024', amount: '$249.00', status: 'Delivered', avatar: 'FC' },
  { id: '#ORD-7285', customer: 'Grace Kim', product: 'USB-C Hub', date: 'Dec 9, 2024', amount: '$89.99', status: 'Shipped', avatar: 'GK' },
];

const avatarColors = [
  'from-blue-400 to-blue-600',
  'from-violet-400 to-violet-600',
  'from-emerald-400 to-emerald-600',
  'from-amber-400 to-amber-600',
  'from-rose-400 to-rose-600',
  'from-cyan-400 to-cyan-600',
  'from-pink-400 to-pink-600',
];

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="px-6 py-5 flex items-center justify-between border-b border-slate-100">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Recent Orders</h2>
          <p className="text-sm text-slate-500">Latest 7 transactions</p>
        </div>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
          View all →
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Order</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Product</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.map((order, idx) => {
              const s = statusConfig[order.status];
              return (
                <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-700">{order.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-white text-xs font-semibold flex-shrink-0`}
                      >
                        {order.avatar}
                      </div>
                      <span className="text-sm font-medium text-slate-700">{order.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-sm text-slate-500">{order.product}</span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <span className="text-sm text-slate-500">{order.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-slate-800">{order.amount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${s.color} ${s.bg}`}
                    >
                      {s.icon}
                      {s.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
