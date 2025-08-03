import Link from "next/link";
const DashboardHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-[#E4E4E7] py-8 px-36">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl text-black">
          Pool Dashboard
        </h1>
        <p className="text-[16px] text-zinc-500">
          Monitor and manage your Blend integrations
        </p>
      </div>
      <div>
        <Link href="/dashboard/new-pool">
          <button className="bg-black text-white py-2 px-5 rounded-[6px]">
            Create new pool
          </button>
        </Link>
      </div>
    </div>
  );
};
export default DashboardHeader;
