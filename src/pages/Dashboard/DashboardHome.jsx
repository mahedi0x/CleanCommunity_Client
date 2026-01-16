import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import CountUp from 'react-countup';
import { CheckCircle, Clock, AlertCircle, TrendingUp } from 'lucide-react';

const DashboardHome = () => {
    const axiosInstance = useAxios();
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get("/issues")
            .then(res => {
                setIssues(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [axiosInstance]);

    console.log(issues)
    // Calculate Stats
    const totalIssues = issues.length;
    const resolvedIssues = issues.filter(i => i.status === 'Resolved' || i.status === 'ended').length;
    const inProgressIssues = issues.filter(i => i.status === "ongoing").length;
    const pendingIssues = issues.filter(i => !i.status || i.status === 'Open' || i.status === 'pending').length;

    // Prepare Chart Data
    const statusData = [
        { name: 'Resolved', value: resolvedIssues, color: '#10B981' },
        { name: 'In Progress', value: inProgressIssues, color: '#F59E0B' },
        { name: 'Pending', value: pendingIssues, color: '#EF4444' },
    ];

    // Category Data
    const categoryCount = issues.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + 1;
        return acc;
    }, {});

    const categoryData = Object.keys(categoryCount).map(key => ({
        name: key,
        count: categoryCount[key]
    }));

    if (loading) {
        return (
            <div className="flex justify-center items-center h-96">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-black text-slate-800 dark:text-white">Dashboard Overview</h1>
                <p className="text-slate-500 mt-1">Welcome back! Here's what's happening today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="stat bg-white dark:bg-slate-800 shadow-sm rounded-2xl border border-gray-100 dark:border-slate-700">
                    <div className="stat-figure text-primary">
                        <TrendingUp size={32} />
                    </div>
                    <div className="stat-title text-slate-500 font-bold">Total Issues</div>
                    <div className="stat-value text-primary">
                        <CountUp end={totalIssues} duration={2} />
                    </div>
                    <div className="stat-desc">Lifetime reported issues</div>
                </div>

                <div className="stat bg-white dark:bg-slate-800 shadow-sm rounded-2xl border border-gray-100 dark:border-slate-700">
                    <div className="stat-figure text-green-500">
                        <CheckCircle size={32} />
                    </div>
                    <div className="stat-title text-slate-500 font-bold">Resolved</div>
                    <div className="stat-value text-green-500">
                        <CountUp end={resolvedIssues} duration={2} />
                    </div>
                    <div className="stat-desc">Successfully fixed</div>
                </div>

                <div className="stat bg-white dark:bg-slate-800 shadow-sm rounded-2xl border border-gray-100 dark:border-slate-700">
                    <div className="stat-figure text-orange-500">
                        <Clock size={32} />
                    </div>
                    <div className="stat-title text-slate-500 font-bold">In Progress</div>
                    <div className="stat-value text-orange-500">
                        <CountUp end={inProgressIssues} duration={2} />
                    </div>
                    <div className="stat-desc">Currently being worked on</div>
                </div>

                {/* <div className="stat bg-white dark:bg-slate-800 shadow-sm rounded-2xl border border-gray-100 dark:border-slate-700">
                    <div className="stat-figure text-red-500">
                        <AlertCircle size={32} />
                    </div>
                    <div className="stat-title text-slate-500 font-bold">Pending</div>
                    <div className="stat-value text-red-500">
                        <CountUp end={pendingIssues} duration={2} />
                    </div>
                    <div className="stat-desc">Waiting for action</div>
                </div> */}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Status Distribution */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700">
                    <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Issue Status Distribution</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={statusData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={110}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {statusData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Category Stats */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700">
                    <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Issues by Category</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={categoryData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="count" fill="#10B981" radius={[6, 6, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
