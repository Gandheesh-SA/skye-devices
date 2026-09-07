import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import logo from "../images/Logo.png";

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/+$/, "");

const STATUS_OPTIONS = [
  { value: "PAID", label: "Paid", dot: "bg-emerald-500", pill: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100" },
  { value: "CONFIRMED", label: "Confirmed", dot: "bg-blue-500", pill: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100" },
  { value: "SHIPPED", label: "Shipped", dot: "bg-sky-500", pill: "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100" },
  { value: "IN_TRANSIT", label: "In Transit", dot: "bg-amber-500", pill: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100" },
  { value: "OUT_FOR_DELIVERY", label: "Out for Delivery", dot: "bg-purple-500", pill: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100" },
  { value: "DELIVERED", label: "Delivered", dot: "bg-emerald-600", pill: "bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200" },
  { value: "FAILED", label: "Failed", dot: "bg-rose-500", pill: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100" },
];

function OrderStatusDropdown({ currentStatus, orderId, isUpdating, onSelect }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const calculatePosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropHeight = 250;
      const spaceBelow = window.innerHeight - rect.bottom;

      let top;
      if (spaceBelow < dropHeight && rect.top > dropHeight) {
        top = rect.top - dropHeight - 4;
      } else {
        top = rect.bottom + 4;
      }
      setCoords({ top, left: Math.max(8, rect.left) });
    }
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    if (!open) {
      calculatePosition();
    }
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    function handleScrollOrResize() {
      setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScrollOrResize, true);
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScrollOrResize, true);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [open]);

  const current = STATUS_OPTIONS.find((s) => s.value === currentStatus) || {
    value: currentStatus,
    label: currentStatus,
    dot: "bg-gray-400",
    pill: "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100",
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        disabled={isUpdating}
        onClick={handleToggle}
        className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 shadow-sm ${current.pill} disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${current.dot} flex-shrink-0`} />
        <span>{current.label}</span>
        {isUpdating ? (
          <svg className="animate-spin h-3 w-3 text-current ml-0.5" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
        ) : (
          <svg className={`h-3 w-3 text-current transition-transform duration-150 ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {open &&
        createPortal(
          <div
            ref={dropdownRef}
            style={{
              position: "fixed",
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              zIndex: 9999,
            }}
            className="w-44 rounded-xl bg-white shadow-2xl ring-1 ring-black/10 border border-gray-100 py-1.5 focus:outline-none animate-in fade-in zoom-in-95 duration-100"
          >
            <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100 mb-1">
              Change Status
            </div>
            {STATUS_OPTIONS.map((opt) => {
              const isSelected = opt.value === currentStatus;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    if (opt.value !== currentStatus) {
                      onSelect(orderId, opt.value);
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium text-left transition-colors ${
                    isSelected ? "bg-gray-50 text-gray-900 font-semibold" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${opt.dot}`} />
                    <span>{opt.label}</span>
                  </div>
                  {isSelected && (
                    <svg className="w-3.5 h-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>,
          document.body
        )}
    </>
  );
}

const AdminPage = () => {
  const [token, setToken] = useState(localStorage.getItem("skye_admin_token") || "");
  const [passwordInput, setPasswordInput] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  // Data states
  const [stats, setStats] = useState(null);
  const [affiliates, setAffiliates] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commissions, setCommissions] = useState([]);
  
  // UI states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [orderFilter, setOrderFilter] = useState("ALL");
  
  // Add affiliate modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAffiliate, setNewAffiliate] = useState({ name: "", email: "", code: "" });
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState("");

  // Export to Sheets state
  const [exportLoading, setExportLoading] = useState(false);
  const [exportResult, setExportResult] = useState(null); // { message, sheetUrl, isError }

  const authHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passwordInput }),
      });
      
      let data = {};
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(
          res.status === 404
            ? "Backend API route not found (404). Please ensure Vercel was redeployed with VITE_API_BASE_URL set."
            : `Server returned status ${res.status}: ${text.slice(0, 100)}`
        );
      }

      if (!res.ok) throw new Error(data.error || `Login failed (${res.status})`);
      
      setToken(data.token);
      localStorage.setItem("skye_admin_token", data.token);
      setPasswordInput("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("skye_admin_token");
    setStats(null);
    setAffiliates([]);
    setOrders([]);
    setCommissions([]);
  };

  const fetchDashboardData = async () => {
    if (!token) return;
    setLoading(true);
    setError("");
    try {
      const [statsRes, affRes, ordRes, commRes] = await Promise.all([
        fetch(`${API_BASE}/api/admin/stats`, { headers: authHeaders }),
        fetch(`${API_BASE}/api/admin/affiliates`, { headers: authHeaders }),
        fetch(`${API_BASE}/api/admin/orders`, { headers: authHeaders }),
        fetch(`${API_BASE}/api/admin/commissions`, { headers: authHeaders }),
      ]);

      if (statsRes.status === 401 || statsRes.status === 403) {
        handleLogout();
        throw new Error("Session expired. Please log in again.");
      }

      const statsData = await statsRes.json();
      const affData = await affRes.json();
      const ordData = await ordRes.json();
      const commData = await commRes.json();

      setStats(statsData);
      setAffiliates(affData.affiliates || []);
      setOrders(ordData.orders || []);
      setCommissions(commData.commissions || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchDashboardData();
    }
  }, [token]);

  const handleCreateAffiliate = async (e) => {
    e.preventDefault();
    setModalError("");
    setModalLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/admin/affiliates`, {
        method: "POST",
        headers: authHeaders,
        body: JSON.stringify(newAffiliate),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create affiliate");

      setShowAddModal(false);
      setNewAffiliate({ name: "", email: "", code: "" });
      setSuccessMsg(`Affiliate "${data.affiliate.name}" with code ${data.affiliate.code} created successfully!`);
      setTimeout(() => setSuccessMsg(""), 4000);
      fetchDashboardData();
    } catch (err) {
      setModalError(err.message);
    } finally {
      setModalLoading(false);
    }
  };

  const handleToggleAffiliateStatus = async (affiliate) => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/affiliates/${affiliate.id}`, {
        method: "PATCH",
        headers: authHeaders,
        body: JSON.stringify({ is_active: !affiliate.is_active }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update affiliate");
      
      setAffiliates(affiliates.map((a) => (a.id === affiliate.id ? data.affiliate : a)));
      setSuccessMsg(`Status for ${affiliate.name} updated.`);
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  const [updatingOrderId, setUpdatingOrderId] = useState(null);

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    setUpdatingOrderId(orderId);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/admin/orders/${orderId}/status`, {
        method: "PATCH",
        headers: authHeaders,
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update order status");

      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
      );
      setSuccessMsg(
        `Order status updated to "${newStatus}"${data.emailSent ? " and email notification sent to customer!" : "."}`
      );
      setTimeout(() => setSuccessMsg(""), 4500);
    } catch (err) {
      setError(err.message);
    } finally {
      setUpdatingOrderId(null);
    }
  };

  const filteredOrders = orders.filter((o) => {
    if (orderFilter === "ALL") return true;
    return o.status === orderFilter;
  });

  const handleExportToSheets = async () => {
    setExportLoading(true);
    setExportResult(null);
    try {
      const res = await fetch(`${API_BASE}/api/admin/export-sheets`, {
        method: "POST",
        headers: authHeaders,
        // Send all orders (not just filtered) so every month tab is complete
        body: JSON.stringify({ orders }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Export failed");
      setExportResult({ message: data.message, sheetUrl: data.sheetUrl, isError: false });
    } catch (err) {
      setExportResult({ message: err.message, sheetUrl: null, isError: true });
    } finally {
      setExportLoading(false);
      // Auto-dismiss after 8 seconds
      setTimeout(() => setExportResult(null), 8000);
    }
  };

  // ─── LOGIN VIEW ─────────────────────────────────────────────────────────────
  if (!token) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-gray-50">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img src={logo} alt="Skye" className="h-12 w-auto object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Skye Admin Portal</h1>
            <p className="text-sm text-gray-500 mt-1">Enter your admin password to manage orders and affiliates</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Admin Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                required
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !passwordInput}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-150 shadow-md disabled:bg-gray-300"
            >
              {loading ? "Authenticating..." : "Unlock Dashboard"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─── MAIN ADMIN DASHBOARD ──────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Skye" className="h-9 w-auto object-contain" />
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-none">Skye Admin</h1>
              <span className="text-xs text-emerald-600 font-semibold inline-flex items-center gap-1 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Connected
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchDashboardData}
              disabled={loading}
              className="px-3 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
            >
              {loading ? "Refreshing..." : "↻ Refresh"}
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition shadow-sm"
            >
              + Add Affiliate
            </button>
            <button
              onClick={handleLogout}
              className="px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition border border-red-200"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-8 border-t border-gray-100">
          {[
            { id: "overview", label: "Overview" },
            { id: "affiliates", label: `Affiliates (${affiliates.length})` },
            { id: "orders", label: `Orders (${orders.length})` },
            { id: "commissions", label: `Commissions (${commissions.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 text-sm font-semibold border-b-2 transition ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Toast notifications */}
        {successMsg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center justify-between">
            <span>✓ {successMsg}</span>
            <button onClick={() => setSuccessMsg("")} className="text-emerald-600 hover:text-emerald-900">✕</button>
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-medium flex items-center justify-between">
            <span>⚠️ {error}</span>
            <button onClick={() => setError("")} className="text-red-600 hover:text-red-900">✕</button>
          </div>
        )}

        {/* ─── TAB 1: OVERVIEW ────────────────────────────────────────────── */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Revenue</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-2">
                  ₹{((stats?.orders?.total_revenue || 0) / 100).toLocaleString("en-IN")}
                </h3>
                <p className="text-xs text-gray-500 mt-2">From completed paid orders</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Paid / Total Orders</p>
                <h3 className="text-3xl font-extrabold text-blue-600 mt-2">
                  {stats?.orders?.paid_orders || 0} <span className="text-lg text-gray-400 font-normal">/ {stats?.orders?.total_orders || 0}</span>
                </h3>
                <p className="text-xs text-gray-500 mt-2">Success conversion rate</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Affiliates</p>
                <h3 className="text-3xl font-extrabold text-emerald-600 mt-2">
                  {stats?.affiliates?.active_affiliates || 0} <span className="text-lg text-gray-400 font-normal">/ {stats?.affiliates?.total_affiliates || 0}</span>
                </h3>
                <p className="text-xs text-gray-500 mt-2">Active promo codes</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Commissions Accrued</p>
                <h3 className="text-3xl font-extrabold text-purple-600 mt-2">
                  ₹{((stats?.commissions?.total_commissions_amount || 0) / 100).toLocaleString("en-IN")}
                </h3>
                <p className="text-xs text-gray-500 mt-2">{stats?.commissions?.total_commissions_count || 0} total payouts</p>
              </div>
            </div>

            {/* Recent Orders Overview */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-gray-900 text-base">Recent Orders</h3>
                <button
                  onClick={() => setActiveTab("orders")}
                  className="text-xs text-blue-600 font-semibold hover:underline"
                >
                  View All →
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase">
                    <tr>
                      <th className="px-6 py-3">Order ID</th>
                      <th className="px-6 py-3">Customer</th>
                      <th className="px-6 py-3">Affiliate Code</th>
                      <th className="px-6 py-3">Amount</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {orders.slice(0, 5).map((o) => (
                      <tr key={o.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-mono text-xs text-gray-900">{o.razorpay_order_id}</td>
                        <td className="px-6 py-4">
                          <p className="font-medium text-gray-900">{o.customer_name || "Guest"}</p>
                          <p className="text-xs text-gray-500">{o.customer_email || "—"}</p>
                        </td>
                        <td className="px-6 py-4">
                          {o.affiliate_code_used ? (
                            <span className="px-2 py-1 bg-blue-50 text-blue-700 font-mono text-xs rounded font-bold">
                              {o.affiliate_code_used}
                            </span>
                          ) : (
                            <span className="text-gray-400 text-xs">Direct</span>
                          )}
                        </td>
                        <td className="px-6 py-4 font-bold text-gray-900">
                          ₹{(o.final_amount / 100).toLocaleString("en-IN")}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                              o.status === "PAID"
                                ? "bg-emerald-100 text-emerald-800"
                                : o.status === "CREATED"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {o.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-gray-500">
                          {new Date(o.created_at).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                      </tr>
                    ))}
                    {orders.length === 0 && (
                      <tr>
                        <td colSpan="6" className="px-6 py-8 text-center text-gray-500 text-sm">
                          No orders created yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ─── TAB 2: AFFILIATES ──────────────────────────────────────────── */}
        {activeTab === "affiliates" && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900 text-base">Affiliate Influencers</h3>
                <p className="text-xs text-gray-500 mt-1">Manage partner codes and track referral performance</p>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm transition"
              >
                + Add New Affiliate
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase">
                  <tr>
                    <th className="px-6 py-3">Influencer</th>
                    <th className="px-6 py-3">Promo Code</th>
                    <th className="px-6 py-3">Total Sales</th>
                    <th className="px-6 py-3">Sales Volume</th>
                    <th className="px-6 py-3">Lifetime Earned</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {affiliates.map((aff) => (
                    <tr key={aff.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-gray-900">{aff.name}</p>
                        <p className="text-xs text-gray-500">{aff.email}</p>
                      </td>
                      <td className="px-6 py-4 font-mono font-bold text-blue-600 text-sm">
                        {aff.code}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {aff.total_sales_count || 0} orders
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        ₹{((aff.total_sales_volume || 0) / 100).toLocaleString("en-IN")}
                      </td>
                      <td className="px-6 py-4 font-bold text-emerald-600">
                        ₹{((aff.lifetime_commission_amount || 0) / 100).toLocaleString("en-IN")}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                            aff.is_active ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {aff.is_active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleToggleAffiliateStatus(aff)}
                          className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition ${
                            aff.is_active
                              ? "border-red-200 text-red-600 hover:bg-red-50"
                              : "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                          }`}
                        >
                          {aff.is_active ? "Deactivate" : "Activate"}
                        </button>
                      </td>
                    </tr>
                  ))}
                  {affiliates.length === 0 && (
                    <tr>
                      <td colSpan="7" className="px-6 py-8 text-center text-gray-500 text-sm">
                        No affiliates created yet. Click "+ Add New Affiliate" to create one.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ─── TAB 3: ORDERS ─────────────────────────────────────────────── */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900 text-base">All Orders</h3>
                <p className="text-xs text-gray-500 mt-1">Live customer transactions and Razorpay payment states</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Status Filter */}
                <div className="flex flex-wrap gap-1.5">
                  {["ALL", "PAID", "CONFIRMED", "SHIPPED", "IN_TRANSIT", "OUT_FOR_DELIVERY", "DELIVERED"].map((st) => (
                    <button
                      key={st}
                      onClick={() => setOrderFilter(st)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition ${
                        orderFilter === st
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {st.replace(/_/g, " ")}
                    </button>
                  ))}
                </div>

                {/* Export to Google Sheets button */}
                <button
                  onClick={handleExportToSheets}
                  disabled={exportLoading || orders.length === 0}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-xl shadow-sm transition"
                >
                  {exportLoading ? (
                    <>
                      <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Exporting…
                    </>
                  ) : (
                    <>
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      Export to Google Sheets
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Export result toast */}
            {exportResult && (
              <div
                className={`mx-6 mt-4 mb-2 px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between gap-4 ${
                  exportResult.isError
                    ? "bg-red-50 border border-red-200 text-red-800"
                    : "bg-emerald-50 border border-emerald-200 text-emerald-900"
                }`}
              >
                <span>
                  {exportResult.isError ? "Export failed: " : ""}
                  {exportResult.message}
                </span>
                <div className="flex items-center gap-3 flex-shrink-0">
                  {!exportResult.isError && exportResult.sheetUrl && (
                    <a
                      href={exportResult.sheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-700 underline hover:text-emerald-900"
                    >
                      Open Sheet →
                    </a>
                  )}
                  <button onClick={() => setExportResult(null)} className="text-current opacity-60 hover:opacity-100">
                    ✕
                  </button>
                </div>
              </div>
            )}


            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase">
                  <tr>
                    <th className="px-6 py-3">Order Details</th>
                    <th className="px-6 py-3">Customer Info</th>
                    <th className="px-6 py-3">Coupon / Referral</th>
                    <th className="px-6 py-3">Price Breakdown</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredOrders.map((o) => (
                    <tr key={o.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <p className="font-mono text-xs font-bold text-gray-900">{o.razorpay_order_id}</p>
                        {o.razorpay_payment_id && (
                          <p className="font-mono text-[11px] text-gray-500 mt-0.5">Pay: {o.razorpay_payment_id}</p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-gray-900">{o.customer_name || "Guest"}</p>
                        <p className="text-xs text-gray-500">{o.customer_email || "—"}</p>
                        {o.customer_phone && <p className="text-xs text-gray-400">{o.customer_phone}</p>}
                      </td>
                      <td className="px-6 py-4">
                        {o.affiliate_code_used ? (
                          <div>
                            <span className="px-2 py-0.5 bg-blue-50 text-blue-700 font-mono text-xs rounded font-bold">
                              {o.affiliate_code_used}
                            </span>
                            {o.affiliate_name && (
                              <p className="text-xs text-gray-500 mt-1">by {o.affiliate_name}</p>
                            )}
                          </div>
                        ) : (
                          <span className="text-gray-400 text-xs">Direct (No code)</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-bold text-gray-900">₹{(o.final_amount / 100).toLocaleString("en-IN")}</p>
                        {o.discount_amount > 0 && (
                          <p className="text-[11px] text-emerald-600">
                            Discount: -₹{(o.discount_amount / 100).toLocaleString("en-IN")}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <OrderStatusDropdown
                          currentStatus={o.status}
                          orderId={o.id}
                          isUpdating={updatingOrderId === o.id}
                          onSelect={handleUpdateOrderStatus}
                        />
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-500">
                        {new Date(o.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                  {filteredOrders.length === 0 && (
                    <tr>
                      <td colSpan="6" className="px-6 py-8 text-center text-gray-500 text-sm">
                        No orders matching "{orderFilter}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ─── TAB 4: COMMISSIONS ────────────────────────────────────────── */}
        {activeTab === "commissions" && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 text-base">Affiliate Commission Log</h3>
              <p className="text-xs text-gray-500 mt-1">
                Payout records earned per completed order (Retention policy: records kept through 5th of next month)
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase">
                  <tr>
                    <th className="px-6 py-3">Month</th>
                    <th className="px-6 py-3">Affiliate</th>
                    <th className="px-6 py-3">Commission</th>
                    <th className="px-6 py-3">Order Ref</th>
                    <th className="px-6 py-3">Email Notification</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {commissions.map((comm) => (
                    <tr key={comm.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-mono font-bold text-gray-800 text-xs">
                        {comm.period_month}
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-gray-900">{comm.affiliate_name}</p>
                        <p className="text-xs font-mono text-blue-600 font-bold">{comm.affiliate_code}</p>
                        <p className="text-xs text-gray-500">{comm.affiliate_email}</p>
                      </td>
                      <td className="px-6 py-4 font-bold text-emerald-600 text-base">
                        ₹{(comm.amount / 100).toLocaleString("en-IN")}
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-mono text-xs text-gray-700">{comm.razorpay_order_id}</p>
                        <p className="text-xs text-gray-500">Order: ₹{((comm.order_amount || 0) / 100).toLocaleString("en-IN")}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-semibold ${
                            comm.email_sent ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {comm.email_sent ? "✓ Sent" : "Pending"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-500">
                        {new Date(comm.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                  {commissions.length === 0 && (
                    <tr>
                      <td colSpan="6" className="px-6 py-8 text-center text-gray-500 text-sm">
                        No commissions recorded yet. Commissions appear automatically when customers buy using affiliate codes.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ─── MODAL: ADD AFFILIATE ────────────────────────────────────────── */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Create New Affiliate</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateAffiliate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={newAffiliate.name}
                  onChange={(e) => setNewAffiliate({ ...newAffiliate, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. rahul@example.com"
                  value={newAffiliate.email}
                  onChange={(e) => setNewAffiliate({ ...newAffiliate, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"
                  required
                />
                <p className="text-[11px] text-gray-500 mt-1">Commission notifications will be sent to this email.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Coupon Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. RAHUL500"
                  value={newAffiliate.code}
                  onChange={(e) => setNewAffiliate({ ...newAffiliate, code: e.target.value.toUpperCase() })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-mono text-gray-900 uppercase"
                  required
                />
                <p className="text-[11px] text-gray-500 mt-1">Gives customers ₹500 off and tracks ₹500 commission.</p>
              </div>

              {modalError && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                  {modalError}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={modalLoading}
                  className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition shadow-md disabled:bg-gray-300"
                >
                  {modalLoading ? "Creating..." : "Save Affiliate"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
