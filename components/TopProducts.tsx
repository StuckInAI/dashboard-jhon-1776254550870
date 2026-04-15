import { TrendingUp, TrendingDown } from 'lucide-react';

type Product = {
  name: string;
  sales: number;
  revenue: string;
  change: number;
  color: string;
};

const products: Product[] = [
  { name: 'Pro Headphones', sales: 842, revenue: '$21,050', change: 12.4, color: 'bg-purple-500' },
  { name: 'Wireless Mouse', sales: 631, revenue: '$9,465', change: 7.2, color: 'bg-fuchsia-500' },
  { name: 'Mechanical Keyboard', sales: 527, revenue: '$26,350', change: -2.3, color: 'bg-pink-500' },
  { name: 'USB-C Hub', sales: 419, revenue: '$12,570', change: 15.8, color: 'bg-violet-500' },
  { name: 'Webcam HD', sales: 310, revenue: '$9,300', change: -4.1, color: 'bg-indigo-500' },
];

export default function TopProducts() {
  const maxSales = Math.max(...products.map((p) => p.sales));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100 h-full">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-violet-900">Top Products</h2>
        <p className="text-sm text-violet-400">Best sellers this month</p>
      </div>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-violet-700 truncate max-w-[130px]">
                {product.name}
              </span>
              <div className="flex items-center gap-1">
                {product.change >= 0 ? (
                  <TrendingUp size={12} className="text-emerald-500" />
                ) : (
                  <TrendingDown size={12} className="text-red-500" />
                )}
                <span
                  className={`text-xs font-semibold ${
                    product.change >= 0 ? 'text-emerald-600' : 'text-red-500'
                  }`}
                >
                  {product.change >= 0 ? '+' : ''}{product.change}%
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-purple-100 rounded-full h-1.5">
                <div
                  className={`${product.color} h-1.5 rounded-full`}
                  style={{ width: `${(product.sales / maxSales) * 100}%` }}
                />
              </div>
              <span className="text-xs text-violet-400 w-10 text-right">{product.sales}</span>
            </div>
            <p className="text-xs text-violet-300 mt-0.5">{product.revenue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
