"use client";

import { motion } from "framer-motion";

interface Pool {
  id: string;
  name: string;
  tvl: string;
  apy: string;
  status: "Active" | "Paused";
  riskLevel: "Low" | "Medium" | "High";
}

interface Activity {
  id: string;
  title: string;
  poolName: string;
  amount?: string;
  timeAgo: string;
}

const mockPools: Pool[] = [
  {
    id: "1",
    name: "High-Yield Consumer",
    tvl: "$847,392",
    apy: "8.5%",
    status: "Active",
    riskLevel: "Medium",
  },
  {
    id: "2",
    name: "SMB Lending Pool",
    tvl: "$1,234,567",
    apy: "12.3%",
    status: "Active",
    riskLevel: "High",
  },
  {
    id: "3",
    name: "Auto Loan Pool",
    tvl: "$567,890",
    apy: "6.2%",
    status: "Paused",
    riskLevel: "Low",
  },
  {
    id: "4",
    name: "Real Estate Bridge",
    tvl: "$2,100,000",
    apy: "15.7%",
    status: "Active",
    riskLevel: "High",
  },
];

const mockActivities: Activity[] = [
  {
    id: "1",
    title: "New loan approved",
    poolName: "High-Yield Consumer",
    amount: "$25,000",
    timeAgo: "2 min ago",
  },
  {
    id: "2",
    title: "Pool rebalancing completed",
    poolName: "SMB Lending Pool",
    timeAgo: "5 min ago",
  },
  {
    id: "3",
    title: "Loan repayment received",
    poolName: "Auto Loan Pool",
    amount: "$12,500",
    timeAgo: "8 min ago",
  },
  {
    id: "4",
    title: "New investor joined",
    poolName: "Real Estate Bridge",
    amount: "$100,000",
    timeAgo: "15 min ago",
  },
  {
    id: "5",
    title: "Risk assessment updated",
    poolName: "High-Yield Consumer",
    timeAgo: "22 min ago",
  },
];

const statusStyles = {
  Active: "bg-black text-white",
  Paused: "bg-zinc-200 text-zinc-600",
};

const riskStyles = {
  Low: "bg-zinc-200 text-zinc-600",
  Medium: "bg-black text-white",
  High: "bg-red-500 text-white",
};

export function PoolsAndActivitySection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Active Pools */}
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-1">Active Pools</h2>
            <p className="text-sm text-zinc-500">
              Your currently running lending pools
            </p>
          </div>

          <div className="space-y-4">
            {mockPools.map((pool, index) => (
              <motion.div
                key={pool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="border rounded-md p-4 hover:shadow-sm transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{pool.name}</h3>
                  <span className="text-lg font-semibold text-gray-900">
                    {pool.apy}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-600">TVL: {pool.tvl}</span>

                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[pool.status]}`}
                    >
                      {pool.status}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${riskStyles[pool.riskLevel]}`}
                    >
                      {pool.riskLevel}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Recent Activity */}
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-1">Recent Activity</h2>
            <p className="text-sm text-zinc-500">
              Latest transactions and events
            </p>
          </div>

          <div className="space-y-4">
            {mockActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (index + mockPools.length) * 0.1,
                  duration: 0.3,
                }}
                className="border rounded-md p-4 hover:shadow-sm transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-zinc-600">{activity.poolName}</p>
                  </div>

                  <div className="text-right">
                    {activity.amount && (
                      <div className="font-semibold text-gray-900 mb-1">
                        {activity.amount}
                      </div>
                    )}
                    <div className="text-xs text-zinc-500">
                      {activity.timeAgo}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
