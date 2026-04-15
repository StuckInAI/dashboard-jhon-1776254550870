import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StatsCards from '@/components/StatsCards';
import RevenueChart from '@/components/RevenueChart';
import RecentOrders from '@/components/RecentOrders';
import TopProducts from '@/components/TopProducts';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-purple-50 overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <StatsCards />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>
              <div>
                <TopProducts />
              </div>
            </div>
            <RecentOrders />
          </div>
        </main>
      </div>
    </div>
  );
}
