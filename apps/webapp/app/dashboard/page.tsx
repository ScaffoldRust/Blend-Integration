import { DashboardStatsCards } from "../../components/dashboard/dashboard-stats-cards";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardStatsCards />
      </div>
    </div>
  );
}
